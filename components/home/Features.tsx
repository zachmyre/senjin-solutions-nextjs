import { ImStatsBars } from "react-icons/im";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillCloudsFill } from "react-icons/bs";
import { MdSettingsBackupRestore } from "react-icons/md";

export const Features = () => {
  return (
    <div className="flex flex-col mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-16 lg:px-8">
      <h1 className="text-center rounded my-8 text-4xl tracking-tight font-bold text-white md:text-5xl md:mb-5">
        <span className="border-b-4 border-white px-16 pb-2 rounded-full shadow-white shadow-md">Services for you.</span>
      </h1>
      <div className="space-y-6 mt-6 md:mt-12 md:space-y-0 md:grid md:gap-4 md:grid-cols-4">
          <div className="flex flex-row justify-between items-center rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg">
            <ImStatsBars className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-black text-xl font-semibold bg-transparent">IT Consulting & Strategies</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg">
            <FaNetworkWired className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-black text-xl font-semibold bg-transparent">Network and Security Architecture</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg">
            <BsFillCloudsFill className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-black text-xl font-semibold bg-transparent">Cloud & Data Migration</h2>
          </div>
          <div className="flex flex-row justify-between items-center rounded-xl p-5 bg-white shadow-cyan-600 shadow-lg">
            <MdSettingsBackupRestore className="rounded w-12 h-12 text-cyan-400 bg-transparent " />
            <h2 className="text-right text-black text-xl font-semibold bg-transparent">Backup and Recovery Assistance</h2>
          </div>
      </div>
    </div>
  );
};

export default Features;
