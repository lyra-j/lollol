import Link from 'next/link';
import DarkMode from './DarkMode';

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-around">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/champions'}>Champions</Link>
        </li>
        <li>
          <Link href={'/rotation'}>Rotation</Link>
        </li>
        <li>
          <Link href={'/items'}>Items</Link>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
