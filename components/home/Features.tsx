import { ImStatsBars } from "react-icons/im";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdSettingsBackupRestore } from "react-icons/md";

export const Features = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <h1 className="text-center rounded text-3xl tracking-tight font-bold text-gray-100">
        <span className="block">Services for you.</span>
      </h1>
      <div className="space-y-4 mt-4">
          <div className="flex flex-row justify-between items-center rounded-xl p-5 shadow-gray-600 shadow-lg border-2 border-gray-600 hover:bg-white">
            <ImStatsBars className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-white text-xl font-semibold bg-transparent hover:text-black">IT Consulting Strategies</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 shadow-gray-600 shadow-lg border-2 border-gray-600 hover:bg-white">
            <FaNetworkWired className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-white text-xl font-semibold bg-transparent hover:text-black">Network and Security Architecture</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 shadow-gray-600 shadow-lg border-2 border-gray-600 hover:bg-white">
            <BsFillCloudsFill className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-white text-xl font-semibold bg-transparent hover:text-black">Cloud & Data Migration</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 shadow-gray-600 shadow-lg border-2 border-gray-600 hover:bg-white">
            <MdSettingsBackupRestore className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-white text-xl font-semibold bg-transparent hover:text-black">Backup and Recovery Assistance</h2>
          </div>
      </div>
    </div>
  );
};

export default Features;
