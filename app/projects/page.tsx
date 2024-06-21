import { Brain, Cloud, Gavel, GraduationCap, Keyboard } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import { FunctionComponent } from "react"

// Images
import Textuva from "@/public/textuva.png"
import Typerless from "@/public/typerless.png"
import Breezy from "@/public/breezy.png"

const Projects: FunctionComponent = () => {
    return (
        <main className="flex flex-col h-full mt-16 items-center fade-in">
            {/* Projects Header */}
            <section className="flex flex-col mb-16">
                <section className="flex gap-x-4 justify-center border-b-2 pb-2 border-secondary">
                    <Gavel size={40} weight="bold" className="text-secondary" />
                    <h1 className="max-lg:text-2xl text-4xl font-bold">Projects</h1>
                </section>

                <p className="mt-2 max-w-[400px] text-center">Explore my projects to see the websites and applications I&apos;ve created using React, Next.js, and more. Each showcases my skills in crafting clean, user-friendly designs.</p>
            </section>

            {/* Project List */}
            <section className="flex flex-col items-center justify-center w-2/3 max-lg:w-full gap-y-16">
                {/* Textuva */}
                <section className="flex gap-x-16 justify-between items-center max-lg:flex-col max-lg:gap-y-3 border-b-2 border-tertiary/25 pb-8">
                    {/* Description */}
                    <section className="flex flex-col flex-1 gap-y-4">
                        <section className="flex items-center gap-x-2">
                            <GraduationCap size={25} weight="bold" className="text-secondary" />
                            <h1 className="text-lg font-bold">Textuva</h1>
                        </section>

                        <p className=" opacity-75"><b>Textuva</b> was an ambitious <b>AI-powered learning platform</b> offering <b>personalized courses</b> and <b>interactive quizzes</b>. Although it didn&apos;t launch, the project provided valuable insights into <b>AI integration</b>, <b>user engagement</b>, and <b>innovative educational tools</b>. This experience significantly enhanced my <b>web development</b> and <b>project management skills</b>, preparing me for future challenges.</p>

                        <Link href="https://www.textuva.com" target="_blank" className="bg-tertiary rounded w-fit px-3 py-1 font-bold">Visit</Link>
                    </section>
                    {/* Image */}
                    <Image src={Textuva} alt="Textuva" className="flex flex-1 w-auto rounded-lg" width={400} />
                </section>

                {/* Typerless */}
                <section className="flex gap-x-16 justify-between items-center  max-lg:gap-y-3 border-b-2 border-tertiary/25 pb-8 max-lg:flex-col-reverse">
                    {/* Image */}
                    <Image src={Typerless} alt="Typerless" className="flex flex-1 w-auto rounded-lg" width={200} />

                    {/* Description */}
                    <section className="flex flex-col flex-1 gap-y-4">
                        <section className="flex items-center gap-x-2">
                            <Keyboard size={25} weight="bold" className="text-secondary" />
                            <h1 className="text-lg font-bold">Typerless</h1>
                        </section>

                        <p className=" opacity-75"><b>Typerless</b> was a web application developed in <b>React</b> for practicing typing speed using <b>randomly generated quotes</b>. It provided users with insights into their <b>typing behavior</b> through detailed statistics. Working on Typerless sharpened my skills in <b>JavaScript</b>, <b>React</b>, and <b>frontend development</b>, and deepened my understanding of user engagement and performance tracking.</p>

                        <Link href="https://eben-vranken.github.io/typerless/" target="_blank" className="bg-tertiary rounded w-fit px-3 py-1 font-bold">Visit</Link>
                    </section>
                </section>

                {/* Breezy */}
                <section className="flex gap-x-16 justify-between items-center  max-lg:gap-y-3 border-b-2 border-tertiary/25 pb-8 max-lg:flex-col">

                    {/* Description */}
                    <section className="flex flex-col flex-1 gap-y-4">
                        <section className="flex items-center gap-x-2">
                            <Cloud size={25} weight="bold" className="text-secondary" />
                            <h1 className="text-lg font-bold">Breezy</h1>
                        </section>

                        <p className=" opacity-75"><b>Breezy</b> was a weather application written in <b>TypeScript</b>, allowing users to view local forecast information for any city worldwide. Powered by the <b>OpenWeatherMapAPI</b>, it provided current weather data and forecasts. Breezy strengthened my skills in <b>TypeScript</b>, <b>API integration</b>, and <b>frontend development</b>. This project deepened my understanding of building interactive web applications and handling real-time data.</p>

                        <Link href="https://eben-vranken.github.io/breezy/" target="_blank" className="bg-tertiary rounded w-fit px-3 py-1 font-bold">Visit</Link>
                    </section>

                    {/* Image */}
                    <Image src={Breezy} alt="Breezy" className="flex flex-1 w-auto rounded-lg" width={200} />

                </section>

                {/* UMA */}
                <section className="flex justify-between items-center pb-8 w-1/2 max-lg:w-full">

                    {/* Description */}
                    <section className="flex flex-col flex-1 gap-y-4 w-fit">
                        <section className="flex items-center gap-x-2">
                            <Brain size={25} weight="bold" className="text-secondary" />
                            <h1 className="text-lg font-bold">Universal Migration Agent</h1>
                        </section>

                        <p className=" opacity-75"><b>Universal Migration Agent (UMA)</b> was an <b>LLM-powered agent</b> designed to automate the process of <b>migrating existing codebases</b>. Users could define their migration requirements, and UMA would handle the analysis and transformation of the codebase. This project significantly enhanced my skills in <b>Python</b> and <b>automation</b>, as well as my understanding of leveraging <b>language models</b> for practical applications in software development.</p>

                        <Link href="https://github.com/eben-vranken/universal-migration-agent" target="_blank" className="bg-tertiary rounded w-fit px-3 py-1 font-bold">Visit</Link>
                    </section>
                </section>
            </section>
        </main >
    )
}

export default Projects