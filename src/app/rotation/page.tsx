import RotationChampionList from '@/components/RotationChampionList';

const RotationPage = () => {
  return (
    <section>
      <article className="flex flex-col p-4">
        <h2 className="font-pretendard text-4xl font-bold">챔피언 로테이션</h2>
        <p className="mt-4 text-gray-400">이번주 무료로 플레이 할 수 있어요!</p>
        <RotationChampionList />
      </article>
    </section>
  );
};

export default RotationPage;
