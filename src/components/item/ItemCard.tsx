import { LOL_API_URL } from '@/constants/constants';
import { Item } from '@/types/Item';
import { removeHtmlAndSlice } from '@/utils/removeHtml';
import Image from 'next/image';

type ItemCardProps = {
  item: Item;
  version: string;
};

const ItemCard = ({ item, version }: ItemCardProps) => {
  // 아이템 이미지 불러오기
  const itemImgUrl = `${LOL_API_URL}/cdn/${version}/img/item/${item.image.full}`;

  return (
    <li className="border-primary rounded-lg border p-4">
      <Image src={itemImgUrl} alt={item.name} width={80} height={80} className="mx-auto" />
      <h3 className="text-primary mt-2 text-xl font-semibold">
        {/* JSON데이터에서 넘어온 HTML 및 불필요한 텍스트 제거 */}
        {removeHtmlAndSlice(item.name)}
      </h3>
      <p className="text-gray-400">{removeHtmlAndSlice(item.plaintext)}</p>
    </li>
  );
};

export default ItemCard;
