// import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-violet-950 text-white py-4 z-50 flex items-center justify-center">
      <Link href={'/'}>{/* <Image /> */}</Link>
      <Nav />
    </header>
  );
};

export default Header;
