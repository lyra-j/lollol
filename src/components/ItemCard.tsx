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

  // 정규식을 사용하여 HTML 태그를 제거하는 함수
  const withoutHtmlAndSlice = (htmlString: string): string => {
    const withoutHtml = htmlString.replace(/<\/?[^>]+(>|$)/g, '');
    // '바다뱀'문자열 앞부분만 남기기
    const str = withoutHtml.indexOf('바다뱀');
    const strSlice = str !== -1 ? withoutHtml.slice(0, str) : withoutHtml;
    return strSlice.trim();
  };
  return (
    <li className="rounded-lg border border-violet-300 p-4">
      <Link href={`/items/${item.name}`} className="flex flex-col items-start">
        <Image src={ITEM_IMG_URL} alt={item.name} width={80} height={80} className="mx-auto" />
        <h3 className="mt-2 text-xl font-semibold text-violet-500">{withoutHtmlAndSlice(item.name)}</h3>
        <p className="text-gray-400">{withoutHtmlAndSlice(item.plaintext)}</p>
      </Link>
    </li>
  );
};

export default ItemCard;
