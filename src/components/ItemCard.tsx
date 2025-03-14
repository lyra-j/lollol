import { itemImgUrl } from '@/constants/constants';
import { Item } from '@/types/Item';
import Image from 'next/image';
import Link from 'next/link';

type ItemCardProps = {
  item: Item;
  version: string;
};

const ItemCard = ({ item, version }: ItemCardProps) => {
  const ITEM_IMG_URL = itemImgUrl(version, item.image.full);

  // HTML 태그를 제거하는 함수
  const stripHtml = (htmlString: string): string => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  };
  return (
    <li className="rounded-lg border border-violet-300 p-4">
      <Link href={`/items/${item.name}`} className="flex flex-col items-start">
        <Image src={ITEM_IMG_URL} alt={item.name} width={80} height={80} className="mx-auto" />
        <h3 className="mt-2 text-xl font-semibold text-violet-500">{item.name}</h3>
        <p className="text-gray-400">{stripHtml(item.plaintext)}</p>
      </Link>
    </li>
  );
};

export default ItemCard;
