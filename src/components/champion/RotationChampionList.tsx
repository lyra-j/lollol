'use client';

import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/services/riotApi';
import { fetchChampionList } from '@/services/serverApi';
import { useQuery } from '@tanstack/react-query';
import Error from '@/app/rotation/error';
import ChampionCard from './ChampionCard';
import LoadingSpinner from '../LoadingSpinner';
import { QUERY_KEY } from '@/constants/queryKeys';
import GridUi from '../GridUI';

const RotationChampionList = () => {
  // 챔피언 로테이션 정보 가져오기
  const {
    data: rotationData,
    isPending: rotationPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEY.ROTATIONKEYLIST],
    queryFn: getChampionRotation,
  });

  // 챔피언 목록 가져오기
  const { data: championsData, isPending: championPending } = useQuery({
    queryKey: [QUERY_KEY.CAHMPIONLIST],
    queryFn: fetchChampionList,
  });

  if (rotationPending || championPending) return <LoadingSpinner />;
  if (isError) return <Error error={error} reset={refetch} />;
  if (!rotationData || !championsData) return <div>데이터가 없습니다</div>;

  // 챔피언데이터의 key를 기준으로 매칭하기 편하도록 새로운 Map 형태로 변환
  const championMap = championsData
    ? new Map(Object.entries(championsData).map(([, champion]) => [champion.key, champion]))
    : new Map<string, Champion>();

  // 로테이션 데이터중 freeChampionIds와 일치하는 챔피언만 찾기
  const rotationChampionList = rotationData.freeChampionIds
    .map((rotationId: number) => championMap.get(String(rotationId)))
    .filter((champion) => champion !== undefined) as Champion[];

  return (
    <GridUi>{rotationChampionList?.map((champion) => <ChampionCard key={champion.key} champion={champion} />)}</GridUi>
  );
};

export default RotationChampionList;
