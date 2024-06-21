import { Barbell, Brain, Hand, Hourglass, PersonArmsSpread, Trophy } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
    return (
        <main className="flex flex-col items-center h-full mt-16 fade-in">
            <section className="w-full flex justify-center items-center gap-x-4 pb-2">
                <Trophy size={50} weight="bold" className="text-secondary" />
                <h1 className="max-lg:text-4xl text-6xl font-bold">ABOUT ME</h1>
            </section>
            {/* Introduction */}
            <section className="flex border border-white/50">
                <section className="flex-1">
                    <section className="max-lg:py-10 py-20 px-4 border-b border-white/50 flex flex-col gap-y-2">
                        <section className="flex items-center gap-x-2">
                            <Hand size={20} weight="bold" className="rotate-45 text-tertiary" />
                            <h1 className="font-bold">Introduction</h1>
                        </section>
                        <p>I&apos;m <b className="text-tertiary">Eben Vranken</b>, a 21-year-old dedicated front-end developer with a passion  for crafting <b>clean</b> and <b>intuitive</b> user interfaces.</p>
                    </section>

                    <section className="max-lg:py-10 py-20 px-4 border-b border-white/50 flex flex-col gap-y-2">
                        <section className="flex items-center gap-x-2">
                            <Hourglass size={20} weight="bold" className="text-tertiary" />
                            <h1 className="font-bold">Background</h1>
                        </section>
                        <p>I have been programming since I was 14, but it was only during my time studying Computer Science in high school that I discovered my <b className="text-tertiary">passion for web development</b> and felt a deep connection to it. Since then, I have been dedicated to creating websites and refining my skills in <b>front-end development</b>.</p>
                    </section>

                    <section className="max-lg:py-10 py-20 px-4 border-b border-white/50 flex flex-col gap-y-2">
                        <section className="flex items-center gap-x-2">
                            <Barbell size={20} weight="bold" className="text-tertiary" />
                            <h1 className="font-bold">Skills</h1>
                        </section>
                        <p>My journey started with HTML, CSS, and JavaScript. I soon adopted React as my first framework, but <b className="text-tertiary">Next.js</b> became my forte. I excel in creating dynamic, fast web apps with it. Alongside, I&apos;ve used Bootstrap, but I prefer <b className="text-tertiary">Tailwind CSS</b> for its utility-first approach. It enhances my workflow, letting me focus on intuitive UI design.</p>
                    </section>

                    <section className="max-lg:py-10 py-20 px-4 border-b border-white/50 flex flex-col gap-y-2">
                        <section className="flex items-center gap-x-2">
                            <Brain size={20} weight="bold" className="text-tertiary" />
                            <h1 className="font-bold">Artificial Intelligence</h1>
                        </section>
                        <p>
                            Since <b>LLMs</b> became publicly available, my fascination with artificial intelligence has grown immensely. I am passionate about exploring their diverse applications and see them as offering endless opportunities for businesses to optimize workflows. With <b className="text-tertiary">hands-on experience</b>, I excel in harnessing LLMs to create impactful solutions, streamlining processes and fostering innovation.
                        </p>
                    </section>

                    <section className="max-lg:py-10 py-20 px-4 border-b flex flex-col gap-y-2">
                        <section className="flex items-center gap-x-2">
                            <PersonArmsSpread size={20} weight="bold" className="text-tertiary" />
                            <h1 className="font-bold">Hobbies</h1>
                        </section>
                        <p>
                            Outside of work, I immerse myself in enriching hobbies. Music is a deep passion—I play multiple instruments and explore diverse genres. I also collect rare records that resonate with me. In gaming, I combine technical skills with storytelling to create immersive experiences. These activities fuel my creativity, offering balance and fresh perspectives.
                        </p>
                    </section>
                </section>

                <section className="flex-grow-[2] border-l border-white/50 max-lg:hidden">

                </section>
            </section>
        </main>
    )
}

export default About