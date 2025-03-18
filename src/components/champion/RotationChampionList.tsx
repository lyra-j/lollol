'use client';

import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/services/riotApi';
import { fetchChampionList } from '@/services/serverApi';
import { useQuery } from '@tanstack/react-query';
import Error from '@/app/rotation/error';
import Loading from '@/app/loading';
import ChampionCard from './ChampionCard';

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

  if (rotationPending || championPending) return <Loading />;
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
