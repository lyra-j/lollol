import Link from 'next/link';
import DarkMode from './DarkMode';
import { NAVI } from '@/constants/navigation';

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-around">
        <li>
          <Link href={NAVI.HOME.URL}>{NAVI.HOME.LABLE}</Link>
        </li>
        <li>
          <Link href={NAVI.CAHMPIONS.URL}>{NAVI.CAHMPIONS.LABLE}</Link>
        </li>
        <li>
          <Link href={NAVI.ROTATION.URL}>{NAVI.ROTATION.LABLE}</Link>
        </li>
        <li>
          <Link href={NAVI.ITEMS.URL}>{NAVI.ITEMS.LABLE}</Link>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
