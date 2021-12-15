import Image from "next/image"

const Navbar = () => {
  return (
    <>
      <header className="my-8 mx-4 sm:mt-9 md:bg-white font-semibold md:rounded-full md:drop-shadow-lg tracking-wider">
        <div className="px-0 sm:py-4 md:px-8 flex items-center justify-between">
          <nav>
            <ul className="flex items-center justify-center md:space-x-8 font-circular text-xs sm:text-sm md:text-lg font-bold">
              <Image width={30} height={50} src="/image.svg" alt="brand logo" />
              <li className="mx-3 sm:mx-0 on-hover-effect">FAQ</li>
              <li className="on-hover-effect">
                Explore <span className="hidden sm:inline-block">creators</span>
              </li>
            </ul>
          </nav>
          <div className="md:font-semibold font-circular">
            <span className="on-hover-effect mr-1 sm:mr-2 text-xs sm:text-sm md:text-lg font-bold">
              Log in
            </span>
            <button className="on-button-hover-effect px-3 md:px-4 tracking-wide text-xs md:text-lg font-bold">
              Sign up
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
