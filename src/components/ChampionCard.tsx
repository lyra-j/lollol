import { championSquareImgUrl} from '@/constants/constants';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  const SQUARE_IMAGE_URL = championSquareImgUrl(champion.version);

  return (
    <li className="p-4 border rounded-lg border-violet-300">
      <Link href={`/champions/${champion.id}`} className='flex flex-col items-start '>
        <Image
          src={`${SQUARE_IMAGE_URL}/${champion.id}.png`}
          alt={`${champion.name} 이미지`}
          width={200}
          height={200}
          className='mx-auto'
        />
        <h2 className="mt-2 text-xl font-semibold text-violet-500">{champion.name}</h2>
        <p className="text-gray-400">{champion.title}</p>
      </Link>
    </li>
  );
};

export default ChampionCard;
