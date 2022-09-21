import GradientButton from "../shared/GradientButton";

export const LandingPageHero = () => {
  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed h-screen"
      style={{ backgroundImage: `url('header.png')` }}
    >
      <div className="h-full">
        <div className="w-screen bg-gray-900 opacity-75 container rounded-b-lg px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center space text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              Senjin&nbsp;
              <span className="bg-clip-text bg-gradient-to-r text-primary">
                Solutions
              </span>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-primary no-underline hover:text-secondary hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://www.facebook.com/senjinsolutions"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container pt-24 px-12 mx-auto md:pt-36 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left">
              <span className="text-primary">Technical Solutions</span>
              {"\u00A0"} to upgrade your business.
            </h1>
            <p className="leading-normal text-primary text-base md:text-2xl mb-8 text-center md:text-left">
              Providing solutions to fill the gaps with your business's needs.
              Taking business logic and workflows to the next level.
            </p>

            <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-primary py-2 font-bold mb-2"
                  htmlFor="emailaddress"
                >
                  Signup for our exclusive deals.
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="emailaddress"
                  type="text"
                  placeholder="you@somewhere.com"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <GradientButton title="Sign Up" />
              </div>
            </form>
          </div>
          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              className="mx-auto rounded-full w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="heroimage.jpg"
            />
          </div>

          <div className="w-full text-primary pt-16 pb-6 text-sm text-center md:text-left fade-in">
            Powered by{"\u00A0"}
            <a className="text-gray-500 no-underline hover:no-underline">
              Senjin Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
