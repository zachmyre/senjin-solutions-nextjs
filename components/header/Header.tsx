import { GiBrainTentacle } from "react-icons/gi";

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
  return (
    <nav className="p-3 bg-gray-900">
      <div className="flex items-center justify-between p-1">
        <div className="flex flex-row flex-1 ml-8 space-x-6">
          <GiBrainTentacle className="h-12 w-12 text-cyan-400 text-gradient-to-r from-cyan-400 via-cyan-500 rounded-full to-cyan-600 shadow-cyan-500/50 shadow-lg shadow-cyan-800/80" />
          <ul className="flex flex-row space-x-8 text-white font-medium">
            {routes.map((route, i) => (
              <li key={i} className="flex items-center justify-center hover:text-cyan-200">
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
