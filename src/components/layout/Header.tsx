import Nav from './Nav';

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-primary text-white py-4 z-50 flex items-center justify-center">
      <Nav />
    </header>
  );
};

export default Header;
