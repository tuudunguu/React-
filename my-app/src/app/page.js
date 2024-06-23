import Image from "next/image";
import { Navbar } from "../components/section-1-navbar";
import { Hi } from "../components/section-2-hi";
import { Aboutme } from "../components/section-3-about-me";
import { Experience } from "../components/section-4-experience";
import { Skills } from "../components/section-5-skills";
import { Work } from "../components/section-6-work";
// import { GetInTouch } from "../components/section-7-get-in-touch";
// import { Greetings } from "../components/section-8-greetings";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px]  flex flex-col items-center bg-stone-50">
        <Navbar />
        <Hi />
        <Aboutme />
        <Experience />
        <Skills />
        <Work />
        {/* <GetInTouch />
      <Greetings /> */}
      </div>
    </div>
  );
}
