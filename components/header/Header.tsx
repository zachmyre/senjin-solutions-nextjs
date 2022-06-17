import { useState } from "react";
import { GiBrainTentacle, GiHamburgerMenu } from "react-icons/gi";
import styles from "../../styles/Home.module.css";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="p-3 bg-gray-900 w-100">
      <div className="flex items-center w-100 justify-center md:w-auto md:justify-between p-1">
        <div className="flex flex-row w-1/3 md:w-auto md:flex-1 ml-4 md:ml-8 space-x-6">
          <GiBrainTentacle className="h-12 w-12 text-cyan-400 text-gradient-to-r from-cyan-400 via-cyan-500 rounded-full to-cyan-600 shadow-cyan-500/50 shadow-lg shadow-cyan-800/80" />
          <ul className="hidden md:flex md:flex-row md:space-x-8 text-white font-medium">
            {routes.map((route, i) => (
              <li
                key={i}
                className="flex items-center justify-center hover:text-cyan-200"
              >
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex justify-end ml-3 md:w-auto md:hidden">
          <GiHamburgerMenu
            className="text-white text-4xl"
            onClick={() => {
              setShowMenu(!showMenu);
              console.log("wow");
            }}
          />
        </div>
        <div className="w-1/3 hidden md:block md:w-auto">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-700 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-2 mb-2"
          >
            Get Started
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="text-white lg:hidden">
          <ul className={styles.fadeIn}>
            {routes.map((route, i) => (
              <a
                key={i}
                className="text-lg font-bold text-gradient-to-r from-cyan-400 via-cyan-500 rounded-full to-cyan-600 shadow-cyan-500/50 shadow-lg shadow-cyan-800/80"
                href={route.path}
              >
                <li className="flex items-center justify-start p-3 border-b-2 border-b-white hover:text-cyan-200">
                  {route.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
