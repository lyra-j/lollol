import { LOL_API_URL } from '@/constants/constants';
import { Item } from '@/types/Item';
import Image from 'next/image';
import Link from 'next/link';

type ItemCardProps = {
  item: Item;
  version: string;
};

const ItemCard = ({ item, version }: ItemCardProps) => {
  // 아이템 이미지 불러오기
  const itemImgUrl = (version: string, itemImg: string) => `${LOL_API_URL}/cdn/${version}/img/item/${itemImg}`;
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
    <li className="border-primary rounded-lg border p-4">
      <Link href={`/items/${item.name}`} className="flex flex-col items-start">
        <Image src={ITEM_IMG_URL} alt={item.name} width={80} height={80} className="mx-auto" />
        <h3 className="text-primary mt-2 text-xl font-semibold">{withoutHtmlAndSlice(item.name)}</h3>
        <p className="text-gray-400">{withoutHtmlAndSlice(item.plaintext)}</p>
      </Link>
    </li>
  );
};

export default ItemCard;
