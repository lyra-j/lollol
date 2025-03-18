import RotationChampionList from '@/components/champion/RotationChampionList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LoL Rotation Champion List',
  description: '이번주 무료로 플레이 할 수 있는 챔피언들을 확인 할 수 있습니다.',
};

const RotationPage = () => {
  return (
    <section className="flex flex-col p-4">
      <h2 className="font-pretendard text-4xl font-bold">챔피언 로테이션</h2>
      <p className="mt-4 text-gray-400">이번주 무료로 플레이 할 수 있어요!</p>
      <RotationChampionList />
    </section>
  );
};

export default RotationPage;
