import { ReactNode } from 'react';

const GridUi = ({ children }: { children: ReactNode }) => {
  return <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{children}</ul>;
};

export default GridUi;
