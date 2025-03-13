import { LOADING_IMG_URL } from '@/constants/constants';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  const IMAGE_URL = `${LOADING_IMG_URL}/${champion.id}_0.jpg`;

  return (
    <li className="p-4 border rounded-lg border-violet-300">
      <Link href={`/champions/${champion.id}`} className='flex flex-col items-start '>
        <Image
          src={IMAGE_URL}
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
