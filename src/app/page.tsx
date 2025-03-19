import { NAVI } from '@/constants/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-custom container m-auto grid justify-items-center">
      <article className="flex flex-col gap-10 p-4">
        <div>
          <h2 className="font-pretendard text-4xl font-bold">LoLLoL</h2>
          <p className="mt-4 text-gray-400">Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
        </div>

        <div>
          <ul className="mt-10 flex flex-col items-center justify-center gap-10 lg:flex-row">
            <li>
              <Link href={NAVI.HOME.URL} className="flex flex-col items-center justify-center gap-2">
                <Image
                  src="/images/league-of-legends-1.jpg"
                  alt="챔피언 목록으로 가는 이미지"
                  width={400}
                  height={300}
                />
                <p className="p-4">챔피언 목록 보기</p>
              </Link>
            </li>

            <li>
              <Link href={NAVI.ROTATION.URL}>
                <Image
                  src="/images/league-of-legends-2.jpg"
                  alt="금주 로테이션 목록으로 가는 이미지"
                  width={400}
                  height={300}
                />
                <p className="p-4">금주 로테이션 확인</p>
              </Link>
            </li>

            <li>
              <Link href={NAVI.ITEMS.URL}>
                <Image
                  src="/images/league-of-legends-3.jpg"
                  alt="아이템 목록으로 가는 이미지"
                  width={400}
                  height={300}
                />
                <p className="p-4">아이템 목록 보기</p>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
