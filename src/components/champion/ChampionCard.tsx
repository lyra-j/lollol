import { LOL_API_URL } from '@/constants/constants';
import { NAVI } from '@/constants/navigation';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  // 챔피언 썸네일 이미지 불러오기
  const championSquareImgUrl = (version: string) => `${LOL_API_URL}/cdn/${version}/img/champion`;
  const SQUARE_IMAGE_URL = championSquareImgUrl(champion.version);

  return (
    <li className="border-primary h-[240px] w-[180px] rounded-lg border p-4">
      <Link href={`${NAVI.CAHMPIONS.URL}/${champion.id}`} className="flex flex-col items-start">
        <Image
          src={`${SQUARE_IMAGE_URL}/${champion.id}.png`}
          alt={champion.name}
          width={150}
          height={150}
          className="mx-auto"
        />
        <h3 className="text-primary mt-2 text-xl font-semibold">{champion.name}</h3>
        <p className="text-gray-400">{champion.title}</p>
      </Link>
    </li>
  );
};

export default ChampionCard;
