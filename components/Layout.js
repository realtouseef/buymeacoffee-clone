import Navbar from "./Navbar"
import Hero from "./Hero"
import ExtraStuff from "./ExtraStuff"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <section className="mx-2 sm:mx-4 xl:max-w-7xl xl:mx-auto ">
        <Navbar />
        <main>{children}</main>
        <Hero />
      </section>
      <ExtraStuff />
      <Footer />
    </>
  )
}

export default Layout
