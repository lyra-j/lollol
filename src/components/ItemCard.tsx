import { LOL_API_URL } from '@/constants/constants';
import { Item } from '@/types/Item';
import { withoutHtmlAndSlice } from '@/utils/removeHtml';
import Image from 'next/image';

type ItemCardProps = {
  item: Item;
  version: string;
};

const ItemCard = ({ item, version }: ItemCardProps) => {
  // 아이템 이미지 불러오기
  const ITEM_IMG_URL = `${LOL_API_URL}/cdn/${version}/img/item/${item.image.full}`;

  return (
    <li className="border-primary rounded-lg border p-4">
      <Image src={ITEM_IMG_URL} alt={item.name} width={80} height={80} className="mx-auto" />
      <h3 className="text-primary mt-2 text-xl font-semibold">{withoutHtmlAndSlice(item.name)}</h3>
      <p className="text-gray-400">{withoutHtmlAndSlice(item.plaintext)}</p>
    </li>
  );
};

export default ItemCard;
