import { CiLocationOn } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";

export const Hi = () => {
  return (
    <div className="w-full h-[556px] px-20 py-24 border-2 border-sky-500">
      <div className="w-full h-[100%]   px-8 gap-x-12 flex flex-row items-center">
        <div className="flex flex-col gap-y-12  h-[100%] flex-1 ">
          <div className="w-full h-[176px] flex flex-col gap-y-2">
            <h1 className="text-[#111827] text-6xl font-bold  ">
              Hi, I’m Tom 👋
            </h1>
            <p className="text-[#4B5563] text-sm font-normal">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="w-full h-[56px] flex flex-col items-center  ">
            <div className="w-full h-[100%] flex flex-row items-start ">
              <CiLocationOn color={"#4B5563"} size={20} />
              <p className="text-[#4B5563] text-sm font-normal ">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="w-full h-[100%] flex flex-row items-center justify-start">
              <BsDot color={"green"} size={15} />
              <p className="text-[#4B5563] text-sm font-normal">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="w-full h-[36px]">
            <div className="flex flex-row items-center justify-start gap-x-1 ">
              <FiGithub color={"#4B5563"} size={18} />
              <RiTwitterLine color={"#4B5563"} size={18} />
              <FiFigma color={"#4B5563"} size={18} />
            </div>
          </div>
        </div>
        <div className=" h-[100%] w-[568px]  pl-[248px]">
          <div className="w-full h-[100%]  relative ">
            <img
              src="/picture/Background.png "
              className="absolute right-0 bottom-0"
            ></img>
            <img src="/picture/Pic.png " className="absolute"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
