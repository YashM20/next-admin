import { CardsStats } from "@/components/cards/StatsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  flex-1 bg-[var(--primary-foreground)] dark">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      {/* <CardsStats /> */}
      {/* </div> */}

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}



      {/* <div className="flex items-center justify-center w-full flex-row space-x-4 bg-slate-500">
        <div className="grid grid-cols-4 gap-4 dark">
          {
            ["--background", "--foreground", "--card", "--card-foreground", "--popover", "--popover-foreground", "--primary", "--primary-foreground", "--secondary", "--secondary-foreground", "--muted", "--muted-foreground", "--accent", "--accent-foreground", "--destructive", "--destructive-foreground", "--border", "--input", "--ring"].map((color) => (

              <div key={color} className="flex items-center justify-center w-20 h-20 ">
                <div className="w-10 h-10 rounded-full dark" style={{ backgroundColor: `hsl(var(${color}))` }}></div>
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {
            ["--background", "--foreground", "--card", "--card-foreground", "--popover", "--popover-foreground", "--primary", "--primary-foreground", "--secondary", "--secondary-foreground", "--muted", "--muted-foreground", "--accent", "--accent-foreground", "--destructive", "--destructive-foreground", "--border", "--input", "--ring"].map((color) => (

              <div key={color} className="flex items-center justify-center w-20 h-20 ">
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: `hsl(var(${color}))` }}></div>
              </div>
            ))
          }
        </div>
      </div> */}

      <section className=" w-full lg:pb-40 h-screen sm:h-screen relative z-[1] bg-[#000] pb-4 overflow-scroll" id="home">
        <div className=" absolute w-full z-[-2] h-screen md:h-screen overflow-hidden ">
          <Image
            src="https://centralci.azureedge.net/livcast-asset/Assets/frontend/bg_livcast.webp"
            alt="square line"
            width={1920}
            height={1080}
            priority
            loading="eager"
            className="w-full h-fit sm:h-fit "
          />
          {/* <Image
            src={"https://d3gga64bj3439.cloudfront.net/Assets/frontend/mobile_event_image.webp"}
            alt="square line"
            width={800}
            height={500}
            loading='lazy'
            className="w-full lg:hidden h-fit eventbg"
          /> */}
        </div>
        {/* <Navbar /> */}
        <div className="md:w-auto flex flex-col lg:flex-row lg:justify-between items-center lg:px-14 md:px-14 xx:px-5 sm:px-[10%] pt-[25px]">
          <div className="lg:flex-row justify-between items-center sm:h-screen">
            <div className="section_1 lg:w-11/12">
              <div className=" md:w-auto maintext1 lg:h-fit sm:h-full lg:text-6xl sm:text-[40px] xx:text-[40px] font-fontpop sm:font-semibold sm:w-[304px]  sm:leading-[44.8px] xx:leading-[44.8px] lg:leading-[78.3px] lg:w-[607px]">
                Redefining <span>Livestreaming</span>
              </div>
              <h5 className="heading md:w-auto mt-5 lg:w-[593px] lg:h-fit text-[16px] font-medium lg:leading-[23.68px] font-fontpop">
                LivCast revolutionizes streaming with AI-driven customization, superior audio-visual enhancements, and groundbreaking Virtual Live Events, erasing geographical limits for immersive experiences. Experience the future of livestreaming now.
              </h5>
              <div className="flex gap-5 xx:gap-1 mt-10">
                <button
                  type="button"
                  className="flex items-center px-6 rounded-full font-semibold text-cp_buttonblack btn1 whitespace-nowrap font-fontpop"
                // onClick={handlelink}
                >
                  Go Live
                </button>
                <button
                  type="button"
                  className="flex items-center p-1 gap-2 rounded-full font-semibold btn2 text-cp_buttonwhite whitespace-nowrap font-fontpop"
                >
                  {/* <Image
                    src={icons.playbutton}
                    alt="substract"
                    width={0}
                    height={0}
                  /> */}
                  <a href="https://youtu.be/XSszKzplJ18">
                    <span className="sm:mr-8 md:mr-3 lg:mr-2 xx:mr-0">
                      How it works?
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* <div className="w-full md:pt-6 sm:pt-6 xx:pt-6 xx:items-center xx:ml-auto xx:mr-auto md:w-auto">
              <Image
                src={"https://d3gga64bj3439.cloudfront.net/Assets/frontend/livcast-working.svg"}
                alt="livcastimg"
                className="w-[312px] md:w-[466px] lg:w-[466px] l"
                width={0}
                height={0}
              />
            </div> */}
        </div>
      </section>

    </main>
  );
}
