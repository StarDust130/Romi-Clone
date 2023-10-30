import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ellipsis from "../assets/p.png";
import Button from "./Button";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <div
        id="nav"
        className="w-full bg-transparent   h-16 text-white m-0 p-2 flex justify-between items-center shadow-inner border-b border-gray-500"
      >
        <div className="flex justify-start">
          <div className="flex justify-start">
            <Link to="/">
              <div className="flex items-center">
                <img className="h-20" src={logo} alt="logo" />
                <span
                  className="font-bold text-2xl"
                  style={{ fontFamily: "Lobster, cursive" }}
                  
                >
                  Romi Finance
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-12 text-gray-400 font-semibold">
          <NavLink
            to="/"
            className="hover:text-white"
            activeClassName="active-link"
          >
            Home
          </NavLink>

          <NavLink
            className="hover:text-white "
            to="/dashboard"
            activeClassName="active-link"
          >
            Dashboard
          </NavLink>
          <NavLink className="hover:text-white " to="/">
            NFT
          </NavLink>
          <NavLink className="hover:text-white " to="/earn">
            Earn
          </NavLink>
          <Link className="hover:text-white " to="/">
            Buy
          </Link>
          <Link className="hover:text-white " to="/">
            Referals
          </Link>
          <Link className="hover:text-white " to="/">
            EcoSysytem
          </Link>
          <Link className="hover:text-white " to="/">
            About
          </Link>
        </div>
        <div className="flex justify-end gap-5 mr-2 ">
          <Button value="Trade" />
          {/*  Connect Wallet Button */}
          <button className="bg-transparent transition duration-300 ease-in-out transform hover:scale-105  border border-gray-500 p-1 rounded flex items-center space-x-2 hover:bg-opacity-70">
            <img
              src="https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg"
              alt="wallet"
              className="w-6 h-6"
            />
            <span className="text-white font-semibold">Connect Wallet</span>
          </button>

          <button className="bg-transparent transition duration-300 ease-in-out transform hover:scale-105 border  border-gray-500   text-white py-1 px-3 rounded-md flex items-center space-x-2 hover:shadow-md ">
            <img
              src="https://img.icons8.com/external-dygo-kerismaker/48/external-Etherum-cryprocurrency-dygo-kerismaker.png"
              alt="Etherum"
              className="w-6 h-6  "
            />
            <img src={ellipsis} alt="ellipsis" className="w-4 h-4  " />
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
