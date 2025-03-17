import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="max-w-custom container m-auto grid justify-items-center">
      <article className="flex flex-col items-center justify-center gap-8">
        <div className="text-3xl font-bold text-yellow-400">
          <h2>404 - 페이지를 찾을 수 없습니다.</h2>
          <p className="mt-4 text-xl">요청하신 페이지가 존재하지 않거나 경로가 잘못되었습니다.</p>
        </div>
        <div>
          <Link href={'/'}>
            <button className="rounded-md border border-violet-300 px-3 py-2 font-semibold">Go Home</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default NotFound;
