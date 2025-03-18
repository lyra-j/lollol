'use client';

import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/services/riotApi';
import { fetchChampionList } from '@/services/serverApi';
import { useQuery } from '@tanstack/react-query';
import Error from '@/app/rotation/error';
import ChampionCard from './ChampionCard';
import LoadingSpinner from '../LoadingSpinner';
import { QUERY_KEY } from '@/constants/queryKeys';

const RotationChampionList = () => {
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

  const { data: championsData, isPending: championPending } = useQuery({
    queryKey: [QUERY_KEY.CAHMPIONLIST],
    queryFn: fetchChampionList,
  });

  if (rotationPending || championPending) return <LoadingSpinner />;
  if (isError) return <Error error={error} reset={refetch} />;
  if (!rotationData || !championsData) return <div>데이터가 없습니다</div>;

  const championMap = championsData
    ? new Map(Object.entries(championsData).map(([, champion]) => [champion.key, champion]))
    : new Map<string, Champion>();

  const rotationChampionList = rotationData.freeChampionIds
    .map((rotationId: number) => championMap.get(String(rotationId)))
    .filter((champion) => champion !== undefined) as Champion[];

  return (
    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {rotationChampionList?.map((champion) => <ChampionCard key={champion.key} champion={champion} />)}
    </ul>
  );
};

export default RotationChampionList;
