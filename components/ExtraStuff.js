import Image from "next/image"
import { Data } from "./pinkLayoutData/Data"

const ExtraStuff = () => {
  return (
    <>
      <div className="bg-orange-200">
        <section className="mt-36 mb-32 mx-10 md:max-w-3xl md:mx-auto text-center font-circular font-bold">
          <article className="pt-10">
            <h1 className="text-md md:text-xl text-gray-700 tracking-widest uppercase">
              {Data[0].title}
            </h1>
            <h4 className="my-6 text-3xl sm:text-5xl">{Data[0].heading}</h4>
            <p className="my-6 text-xl xl:text-2xl font-normal">
              {Data[0].description}
            </p>
            <div className="aspect-video">
              <Image
                src={Data[0].picture}
                alt={Data[0].heading}
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </article>
          <article className="my-20">
            <h4 className="text-md md:text-xl text-gray-700 uppercase">
              {Data[1].title}
            </h4>
            <h1 className="my-6 text-3xl sm:text-5xl">{Data[1].heading}</h1>
            <p className="my-6 text-xl xl:text-2xl font-normal">
              {Data[1].description}
            </p>
            <div className="aspect-video">
              <Image
                src={Data[1].picture}
                alt={Data[1].heading}
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </article>
          <article className="pb-10">
            <h4 className="text-md md:text-xl text-gray-700 uppercase">
              {Data[2].title}
            </h4>
            <h1 className="my-6 text-3xl sm:text-5xl">{Data[2].heading}</h1>
            <p className="my-6 text-xl xl:text-2xl font-normal">
              {Data[2].description}
            </p>
            <div className="w-full">
              <Image
                src={Data[2].picture}
                alt={Data[2].heading}
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </article>
        </section>
      </div>
      {/* designed for creators section  */}
      <section className="px-10 my-10 md:px-0 md:max-w-xl mx-auto text-center font-circular">
        <article className="text-xl tracking-wide">
          <h1 className="mb-12 text-5xl font-black leading-[64px]">
            Designed for{" "}
            <span className="underline decoration-fuchsia-500 decoration-wavy decoration-4">
              creators
            </span>
            , not for businesses.
          </h1>
          <div className="space-y-6">
            <article>
              <Image src="/pics/one.svg" alt="one" width={47} height={47} />
              <p>
                We {"don't"} call them {`"customers"`} or transactions. They are
                your <span className="block font-bold">supporters.</span>
              </p>
            </article>
            <article>
              <Image src="/pics/two.svg" alt="two" width={47} height={47} />
              <p>
                You get paid instantly to your bank account.
                <span className="block font-bold">No more 30-day delays.</span>
              </p>
            </article>
            <article>
              <Image src="/pics/three.svg" alt="three" width={47} height={47} />
              <p>
                You have <span className="font-bold">100% ownership</span> of
                your supporters. We never email them, and you can export the
                list any time you like.
              </p>
            </article>
            <article>
              <Image src="/pics/four.svg" alt="four" width={47} height={47} />
              <p>
                You get to <span className="font-bold">talk to a human</span>{" "}
                for help, or if you just like some advice to hit the ground
                running.
              </p>
            </article>
          </div>
          <button className="mt-10 py-4 px-10 text-sm md:text-lg lg:text-xl on-button-hover-effect font-circular font-semibold">
            Start my page{" "}
            <span className="text-sm md:text-lg lg:text-xl font-normal">
              — {"It's"} free
            </span>
          </button>
        </article>
        <p className="mt-4 font-circular text-md text-gray-900">
          It’s free, and takes less than a minute.
        </p>
      </section>
    </>
  )
}

export default ExtraStuff
