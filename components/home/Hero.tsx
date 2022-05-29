export const Hero = () => {
    return(
        <div className="flex flex-col md:flex-row mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
            <span className="block">Tech Solutions for your</span>
            <span className="block text-cyan-500">business model</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Upgrade your business and workflow through advanced, practical solutions by speaking with our team today.
            We are a group of experts that specialize in solving real world business problems through technology.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Get in Touch</button>
            </div>
          </div>
        </div>
        <div className="sm:text-center lg:text-right flex mt-5">
            <img src='/heroImage.png' className="shrink md:pl-12 md:ml-6 h-full rounded-full" />
        </div>
      </div>
    )
}

export default Hero;