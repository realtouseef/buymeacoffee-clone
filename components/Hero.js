import { useEffect } from "react"
import Image from "next/image"

const Hero = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-tab-target]")
    const tabContents = document.querySelectorAll("[data-tab-content]")

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("active")
        })
        tabs.forEach((tab) => {
          tab.classList.remove("active")
        })
        tab.classList.add("active")
        target.classList.add("active")
      })
    })
  })
  return (
    <>
      <style jsx>
        {`
          [data-tab-content] {
            display: none;
          }

          .active[data-tab-content] {
            display: block;
          }

          .tab-parent::-webkit-scrollbar {
            width: 0.5em;
            height: 0.5em;
          }
          .tab.active {
            background-color: rgb(209, 213, 219);
          }
        `}
      </style>
      {/* hero section uptil the "start my page button" */}
      <section className="max-w-lg lg:max-w-3xl mx-auto mt-12 md:mt-28 text-center">
        <article>
          <h1 className="font-circular text-4xl sm:text-7xl text-slate-900 font-bold leading-normal md:leading-[1.2]">
            A supporter is worth a thousand followers.
          </h1>
          <p className="font-circular md:max-w-2xl md:mx-auto my-6 text-lg md:text-2xl text-gray-600 leading-normal">
            Accept donations. Start a membership. Sell anything you like. It’s
            easier than you think.
          </p>
        </article>
        <form className="font-circular">
          <label className="relative">
            <span className="absolute -top-[4.5px] lg:-top-[13px] left-5 lg:left-7 text-xl lg:text-3xl tracking-wider font-semibold">
              {" "}
              buymeacoffee.com/
            </span>
            <input
              className="lg:w-[700px] w-full pl-[220px] lg:pl-[327px] py-3 lg:py-6 border-2 text-xl lg:text-3xl border-gray-200 rounded-full shadow-sm outline-none"
              type="text"
              placeholder="yourname"
            />
            <button className="lg:absolute lg:-top-[38px] lg:right-4 w-full lg:w-[25%] my-3 py-4 md:text-xl on-button-hover-effect font-bold">
              Start my page
            </button>
          </label>

          <p className="mt-4 text-xl text-gray-500">
            It’s free, and takes less than a minute.
          </p>
        </form>
      </section>

      {/* creators section  */}
      <section className="tab-parent px-10 mt-32 font-circular font-semibold overflow-x-scroll lg:overflow-x-hidden whitespace-nowrap">
        <ul className="tabs flex items-center justify-center text-sm md:text-lg space-x-4">
          <li
            data-tab-target="#video-creators"
            className="active tab on-hover-effect hover:bg-gray-300"
          >
            Video creators
          </li>
          <li
            data-tab-target="#artists"
            className="tab on-hover-effect hover:bg-gray-300"
          >
            Artists
          </li>
          <li
            data-tab-target="#writers"
            className="tab on-hover-effect hover:bg-gray-300"
          >
            Writers
          </li>
        </ul>
      </section>

      {/* content for the creators section */}
      <section className="my-10 font-circular">
        <div
          className="active max-w-7xl mx-auto"
          id="video-creators"
          data-tab-content
        >
          {/* tab number 1 starts here  */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-10">
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/videocreator-1.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>PriorAttire</strong> is creating YouTube videos on
                historical fashions, dressmaking etc.
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 251 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/videocreator-2.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>HandyMumLin</strong> is Sewing video maker
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 254 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/videocreator-3.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>Kevin Wilson</strong> is telling stories over a cup of
                chai
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 411 Supporters</p>
              </div>
            </article>
          </div>
        </div>
        {/* tab number 2 starts here  */}
        <div id="artists" data-tab-content>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-10">
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/videocreator-3.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>PriorAttire</strong> is creating YouTube videos on
                historical fashions, dressmaking etc.
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 251 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/artists-2.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>HandyMumLin</strong> is Sewing video maker
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 254 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/artists-1.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>PriorAttire</strong> is creating YouTube videos on
                historical fashions, dressmaking etc.
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 251 Supporters</p>
              </div>
            </article>
          </div>
        </div>
        {/* tab number 3 starts here  */}

        <div id="writers" data-tab-content>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-10">
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/artists-2.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>PriorAttire</strong> is creating YouTube videos on
                historical fashions, dressmaking etc.
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 251 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/artists-1.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>HandyMumLin</strong> is Sewing video maker
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 254 Supporters</p>
              </div>
            </article>
            <article className="max-w-[210px]">
              <Image
                src="/pics/heroSection/artists-2.jpg"
                alt="video creator"
                width={200}
                height={200}
                objectFit="cover"
              />
              <p>
                <strong>PriorAttire</strong> is creating YouTube videos on
                historical fashions, dressmaking etc.
              </p>
              <div className="mr-8 mt-2 flex items-center">
                <Image
                  src="/pics/heart.svg"
                  alt="heart icon"
                  width={15}
                  height={14}
                />
                <p className="ml-2"> 251 Supporters</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
