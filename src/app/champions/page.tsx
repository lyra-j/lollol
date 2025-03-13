import ChampionCard from '@/components/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LoL Champion List',
  description: 'LoL의 모든 챔피언들을 확인 할 수 있습니다.',
};

const ChampionList = async () => {
  const championList: Champion[] = await fetchChampionList();

  return (
    <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {championList.map((champion: Champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </ul>
  );
};

const ChampionsPage = () => {
  return (
    <>
      <section>
        <article className="flex flex-col p-4">
          <h2 className="font-pretendard text-4xl font-bold">챔피언 목록 보기</h2>
          <p className="mt-4 text-gray-400">챔피언 정보를 확인해보세요.</p>
          <ChampionList />
        </article>
      </section>
    </>
  );
};

export default ChampionsPage;
