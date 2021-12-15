const Footer = () => {
  return (
    <>
      {/* <footer className="max-w-5xl lg:max-w-6xl mx-4 lg:mx-auto px-4 py-10 flex-it flex-col lg:flex-row justify-between font-circular">
        <ul className="flex-it flex-wrap lg:flex-nowrap space-y-4 space-x-4 font-semibold">
          <li>About</li>
          <li>Help Center</li>
          <li>Apps</li>
          <li>Resources</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
        <div className="flex-it flex-col-reverse lg:flex-row mt-4 lg:mt-0">
          <p className="mr-4 mt-4 lg:mt-0 text-gray-600">© Buy me a Coffee</p>
          <ul className="flex-it space-x-4">
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </footer> */}
      <footer className="max-w-4xl md:max-w-6xl mx-4 lg:mx-auto py-10 flex flex-col xl:flex-row items-center justify-between space-y-5 md:space-y-0 font-circular">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <ul className="md:mr-4 flex items-center justify-center font-bold space-x-4">
            <li>About</li>
            <li>Help Center</li>
            <li>Apps</li>
          </ul>
          <ul className="mt-4 md:mt-0 flex items-center justify-center font-bold space-x-4">
            <li>Resources</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center">
          <p className="mr-4 text-gray-600">© Buy me a Coffee</p>
          <ul className="mt-4 xl:mt-0 mb-4 xl:mb-0 flex items-center space-x-4">
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
