export const GradientButton = ({ title, ...props }: any) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-700 shadow-lg shadow-cyan-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {title}
    </button>
  );
};

export default GradientButton;
