import logo from "../../assets/logo.png";
import NavMenu from "./NavMenu";
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <img src={logo} className="logo" alt="Aroma" />
      </div>
      <NavMenu />
      <div className="w-full border-b-2 border-gray-500 mt-7" />
    </div>
  );
};

export default Header;
