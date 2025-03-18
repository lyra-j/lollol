import { LOADING_IMG_URL, passiveImgUrl, spellImgUrl, SPLASH_IMG_URL } from '@/constants/constants';
import { ChampionDetail } from '@/types/Champion';
import { fetchChampionDetail, getLatestVersion } from '@/utils/serverApi';
import { Metadata } from 'next';
import Image from 'next/image';

type ChampionDetailProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: ChampionDetailProps): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  return {
    title: `League Of Legends: ${champion.name}`,
    description: `${champion.lore}`,
  };
}

const ChampionDetailPage = async ({ params }: ChampionDetailProps) => {
  const version: string = await getLatestVersion();
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  const spellKeys: string[] = ['Q', 'W', 'E', 'R'];
  const spellWithKeys = champion.spells.map((spell, idx) => ({
    ...spell,
    spellKeys: spellKeys[idx],
  }));


  return (
    <article className="relative min-h-screen w-full text-white">
      {/* 배경 영역 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-no-repeat opacity-80 grayscale-[60%]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
        url(${SPLASH_IMG_URL}/${champion.id}_1.jpg)`,
        }}
      ></div>

      <div className="container relative m-auto min-h-screen max-w-[1200px] py-8 pb-20">
        {/* 챔피언 소개 영역 */}
        <div className="flex flex-col gap-10 p-4">
          <h2 className="text-3xl font-bold">
            <p className="text-base font-light opacity-80">{champion.title}</p>
            {champion.name}
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex max-h-[200px] max-w-[200px] items-start justify-center overflow-hidden rounded-lg">
              <Image
                src={`${LOADING_IMG_URL}/${champion.id}_0.jpg`}
                alt={champion.name}
                width={300}
                height={300}
                className="scale-110"
              />
            </div>
            <p>{champion.lore}</p>
          </div>

          {/* 스탯 영역 */}
          <h2 className="text-3xl font-bold">스탯</h2>
          <ul className="flex flex-row justify-center gap-8">
            <li>공격력: {champion.info.attack}</li>
            <li>방어력: {champion.info.defense}</li>
            <li>마법력: {champion.info.magic}</li>
            <li>난이도: {champion.info.difficulty}</li>
          </ul>

          {/* 스킬 영역 */}
          <h2 className="text-3xl font-bold">스킬</h2>
          <div className="flex w-full justify-center md:-ml-2">
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              <li className="flex flex-col items-center justify-center p-3">
                <Image
                  src={passiveImgUrl(version, champion.passive.image.full)}
                  width={50}
                  height={50}
                  alt={champion.passive.name}
                  className="rounded-sm"
                />
                <p className="mt-2 text-center text-sm">
                  {champion.passive.name}
                  <br />({champion.passive.image.group})
                </p>
              </li>

              {spellWithKeys.map((spell) => (
                <li key={spell.id} className="flex flex-col items-center justify-center p-3">
                  <Image
                    src={spellImgUrl(version, spell.image.full)}
                    width={50}
                    height={50}
                    alt={spell.name}
                    className="rounded-sm"
                  />
                  <p className="mt-2 text-center text-sm">
                    {spell.name}
                    <br />({spell.spellKeys})
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ChampionDetailPage;
