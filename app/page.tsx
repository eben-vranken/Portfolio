"use client"

import { Coffee } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";

const darkTheme = typeof window !== "undefined" ? localStorage.getItem("dark-theme") : null || true


console.log(darkTheme)


export default function Home() {

  const pathname = usePathname()

  console.log(pathname)

  return (
    <main className="flex max-lg:mt-10 max-lg:w-auto fade-in">
      {/* Hero */}
      <section className="flex w-full justify-around items-center max-lg:flex-col gap-x-24 max-lg:gap-y-5">
        {/* Hero Left */}
        <section className="xl:w-[500px] w-[400px] aspect-square border max-lg:w-72">

        </section>


        {/* Hero Right */}
        <section className="flex justify-center">
          {/* Card Wrapper */}
          <section className="flex flex-col max-lg:w-full gap-y-2 bg-white/10 rounded-lg p-5 relative">
            {/* Glass bg */}
            <section className="absolute bg-white/0 inset-0 blur-lg cursor-pointer hover:bg-white/5 transition-colors ">

            </section>

            {/* Card elements */}
            <section className="flex items-center gap-x-2 max-w-full border-b-2 border-dashed pb-2">
              <Coffee size={25} weight="bold" className="text-secondary drop-shadow" />
              <h1 className="font-bold text-xl">Eben Vranken</h1>
            </section>

            <section className="p-2 flex flex-col gap-y-2 w-full">
              <p>Crafting visually stunning, responsive, and user-centric websites.</p>

              <p>
                Let&apos;s bring your ideas to life with clean and efficient code.
              </p>

              <p>
                Explore my portfolio to see the work I&apos;ve done and the skills I bring to the table.
              </p>
            </section>


            <Link href={"/about"} className="bg-primary font-bold flex w-fit p-2 rounded cursor-pointer z-10 relative">
              <section className="absolute bg-white/20 inset-0 blur-lg cursor-pointer hover:bg-white/40 transition-colors z-10">

              </section>
              About me
            </Link>
          </section>
        </section>
      </section>
    </main >
  );
}
