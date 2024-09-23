import './NavMenu.scss'

const NavMenu = () => {
  return (
    <div>
      <nav className="nav">
        <a className='nav__link text-gray-300 transition ease-in-out delay-100 hover:text-black' href="#">Main page</a>
        <a className='nav__link text-gray-300 transition ease-in-out delay-100 hover:text-black' href="#">Catalog</a>
        <a className='nav__link text-gray-300 transition ease-in-out delay-100 hover:text-black' href="#">Candles</a>
        <a className='nav__link text-gray-300 transition ease-in-out delay-100 hover:text-black' href="#">Sets</a>
        <a className='nav__link text-gray-300 transition ease-in-out delay-100 hover:text-black' href="#">Contacts</a>
      </nav>
    </div>
  );
};

export default NavMenu;
