'use client';

import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/utils/riotApi';
import { fetchChampionList } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query';
import ChampionCard from './ChampionCard';
import Error from '@/app/rotation/error';

const RotationChampionList = () => {
  const {
    data: rotationData,
    isPending: rotationPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['rotationKeyList'],
    queryFn: getChampionRotation,
  });

  const { data: championsData, isPending: championPending } = useQuery({
    queryKey: ['championList'],
    queryFn: fetchChampionList,
  });

  if (rotationPending || championPending) return <div>불러오는 중...</div>;
  if (isError) return <Error error={error} reset={refetch} />;
  if (!rotationData || !championsData) return <div>데이터가 없습니다</div>;

  const championMap = championsData
    ? new Map(Object.entries(championsData).map(([, champion]) => [champion.key, champion]))
    : new Map<string, Champion>();

  const rotationChampionList = rotationData.freeChampionIds
    .map((rotationId: number) => championMap.get(String(rotationId)))
    .filter((champion) => champion !== undefined) as Champion[];

  return (
    <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {rotationChampionList?.map((champion) => <ChampionCard key={champion.key} champion={champion} />)}
    </ul>
  );
};

export default RotationChampionList;
