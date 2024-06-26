import Image from "next/image";
import { Navbar } from "../components/section-1-navbar";
import { Hi } from "../components/section-2-hi";
import { Aboutme } from "../components/section-3-about-me";
import { Experience } from "../components/section-5-experience";
import { Skills } from "../components/section-4-skills";
import { Work } from "../components/section-6-work";
import { GetInTouch } from "../components/section-7-get-in-touch";
import { Greetings } from "../components/section-8-greetings";
import { Container } from "../components/container";

export default function Home() {
  return (
    <div className="text-black bg-white text-center">
        <Container><Navbar /></Container>
        <Container ><Hi /></Container>
        <Container background="bg-[#E5E7EB]"><Aboutme /></Container>
       <Container > <Skills /></Container>
        <Container background="bg-[#E5E7EB]"><Experience /></Container>
       <Container > <Work /></Container>
        <Container ><GetInTouch /></Container>
        <Container background="bg-[#E5E7EB]"><Greetings /></Container>
    </div>
   
  );
}
