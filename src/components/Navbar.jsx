import { useState } from "react";
import { menu } from "../Assets";
import { navlinks } from "../constants";
import Btn from "./Btn";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => {
    setNavToggle((prev) => !prev);
  };
  return (
    <nav className=" fixed  w-full flex justify-between items-center min-h-fit h-20 px-9 md:h-36 md:px-14 lg:px-24">
      <span className="font-bold text-black text-2xl md:text-4xl lg:w-3/12">
        Fiber
      </span>
      <img
        src={menu}
        alt="logo"
        onClick={toggle}
        className="cursor-pointer 2xl:hidden"
      />

      <ul
        className={`transition-all ease-in delay-100 ${
          navToggle ? "block right-0" : " -right-full hidden"
        } top-0 sidebar absolute  py-7 pt-10 w-full bg-main text-center text-white 2xl:hidden`}
      >
        <span
          className="absolute top-8 right-12 text-3xl font-bold cursor-pointer"
          onClick={toggle}
        >
          X
        </span>
        {navlinks.map((navlink) => {
          return (
            <li className=" py-5 text-xl md:text-2xl" key={navlink.id}>
              <a href="#" className="hover:text-purple-400">
                {navlink.name}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="hidden 2xl:flex w-9/12 min-h-fit justify-around items-center">
        <div className="links flex justify-around w-5/12 lg:6/12">
          {navlinks.map((navlink) => {
            return navlink.type == "link" ? (
              <li className="text-xl font-medium">
                <a href="#">{navlink.name}</a>
              </li>
            ) : (
              ""
            );
          })}
        </div>
        <div className="btn-links flex w-3/12 justify-around items-center">
          {navlinks.map((navlink) => {
            return navlink.type == "btn" ? (
              <Btn color={navlink.color} name={navlink.name} px={7} />
            ) : (
              ""
            );
          })}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
