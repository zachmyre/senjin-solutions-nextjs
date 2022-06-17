import { ImStatsBars } from "react-icons/im";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdSettingsBackupRestore } from "react-icons/md";

export const Features = () => {
  return (
    <div className="flex flex-col mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-16 lg:px-8">
      <div className="space-y-6 mt-6 md:mt-12 md:space-y-0 md:grid md:gap-12 md:grid-cols-4">
        <div className="flex flex-col justify-between items-center space-y-10 rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg hover:bg-gray-200 hover:cursor-pointer">
          <div className="p-8 rounded-full bg-black  shadow-xl shadow-cyan-500/75 border-0">
            <ImStatsBars className="w-12 h-12 text-cyan-400 bg-transparent" />
          </div>
          <h2 className="w-4/5 text-center text-black text-xl font-semibold bg-transparent">
            IT Consulting & Strategies
          </h2>
        </div>
        <div className="flex flex-col justify-between items-center space-y-6 rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg hover:bg-gray-200 hover:cursor-pointer">
          <div className="p-8 rounded-full bg-black  shadow-xl shadow-cyan-500/75 border-0">
            <FaNetworkWired className="w-12 h-12 text-white bg-transparent" />
          </div>
          <h2 className="w-4/5 text-center text-black text-xl font-semibold bg-transparent">
            Network & Security Architecture
          </h2>
        </div>
        <div className="flex flex-col justify-between items-center space-y-6 rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg hover:bg-gray-200 hover:cursor-pointer">
          <div className="p-8 rounded-full bg-black  shadow-xl shadow-cyan-500/75 border-0">
            <BsFillCloudsFill className="w-12 h-12 text-cyan-400 bg-transparent" />
          </div>
          <h2 className="w-4/5 text-center text-black text-xl font-semibold bg-transparent">
            Cloud & Data Migration
          </h2>
        </div>
        <div className="flex flex-col justify-between items-center space-y-6 rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg hover:bg-gray-200 hover:cursor-pointer">
          <div className="p-8 rounded-full bg-black  shadow-xl shadow-cyan-500/75 border-0">
            <MdSettingsBackupRestore className="w-12 h-12 text-white bg-transparent" />
          </div>
          <h2 className="w-4/5 text-center text-black text-xl font-semibold bg-transparent">
            Backup & Recovery Assistance
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
