'use client';
import { useRouter } from 'next/navigation';
import React, { startTransition } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  const { refresh, push } = useRouter();
  return (
    <section>
      <article className="flex flex-col items-center justify-center gap-8">
        <div className="text-3xl font-bold text-yellow-400">
          <h2>아이템 목록을 불러올 수 없습니다!</h2>
          <p className="mt-4">{error.message}</p>
        </div>
        <div className="flex gap-4 font-semibold">
          <button
            onClick={() =>
              startTransition(() => {
                refresh();
                reset();
              })
            }
            className="rounded-md border border-yellow-300 px-3 py-2"
          >
            Try again!
          </button>
          <button onClick={() => push('/')} className="rounded-md border border-violet-300 px-2 py-1.5">
            Go Home
          </button>
        </div>
      </article>
    </section>
  );
};
export default Error;
