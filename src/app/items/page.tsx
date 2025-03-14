import ItemCard from '@/components/ItemCard';
import { Item } from '@/types/Item';
import { fetchItemList, getLatestVersion } from '@/utils/serverApi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LoL Item List',
  description: 'LoL의 모든 아이템들을 확인 할 수 있습니다.',
};

const ItemsPage = async () => {
  const version: string = await getLatestVersion();
  const items: Item[] = await fetchItemList();

  return (
    <section>
      <article className="flex flex-col p-4">
        <h2 className="font-pretendard text-4xl font-bold">아이템 목록 보기</h2>
        <p className="mt-4 text-gray-400">아이템 정보를 확인해보세요.</p>

        <ul className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <ItemCard key={item.name} item={item} version={version} />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default ItemsPage;
