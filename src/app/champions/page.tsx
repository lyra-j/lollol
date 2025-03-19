import ChampionCard from '@/components/champion/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/services/serverApi';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '../loading';
import GridUi from '@/components/GridUI';

export const metadata: Metadata = {
  title: 'LoL Champion List',
  description: 'LoL의 모든 챔피언들을 확인 할 수 있습니다.',
};

const ChampionsPage = async () => {
  const championList: Champion[] = await fetchChampionList();

  return (
    <>
      <section className="flex flex-col p-4">
        <h2 className="font-pretendard text-4xl font-bold">챔피언 목록 보기</h2>
        <p className="mt-4 text-gray-400">챔피언 정보를 확인해보세요.</p>
        <GridUi>
          <Suspense fallback={<Loading />}>
            {championList.map((champion: Champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </Suspense>
        </GridUi>
      </section>
    </>
  );
};

export default ChampionsPage;
