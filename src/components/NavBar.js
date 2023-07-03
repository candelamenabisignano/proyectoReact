import React from "react";
import CartWidget from "./CartWidget";
import cart from "../assets/CartWidget.png";

const NavBar = ({ logo }) => {
  return (
    <div>
      <header className=" bg-pink-100">
        <nav className="flex justify-between pt-[43px]">
          <a href="../src/app.js"><img src={logo} alt="delicake-logo" className="h-[105px] -mt-[37px]" /></a>
          <ul className="flex gap-10 pr-10">
            <li>
              <a href="../src/app.js" className="text-white text-[17px] hover:text-[19px] hover:ease-out duration-300">inicio</a>
            </li>
            <li>
              <a href="../src/app.js" className="text-white text-[17px] hover:text-[19px] hover:ease-out duration-300">tienda</a>
            </li>
            <CartWidget widget={cart} />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
