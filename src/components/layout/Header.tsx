import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 flex w-full items-center justify-center py-4 text-white">
      <Nav />
    </header>
  );
};

export default Header;
