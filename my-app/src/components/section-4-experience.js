import { Overview } from "./overview";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const Experience = () => {
  return (
    <div className="w-full h-[560px] px-20 py-24 border-2 border-sky-500">
      <div className="w-full h-full flex flex-col px-8 gap-y-2">
        <div className="w-full h-[72px] flex flex-col items-center gap-y-4 ">
          <div>
            <Overview title="Skills" />
          </div>
          <div>
            <p className="text-[#4B5563] text-sm font-normal">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col gap-y-12 ">
          <div className="flex flex-wrap gap-[82px]">
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal ">Javascript</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <SiTypescript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Typescript</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <FaReact color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">React</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Next.js</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Node.js</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Express.js</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Nest.js</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Socket.io</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">PostgreSQL</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">MongoDB</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Sass/Scss</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Tailwindcss</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Figma</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Cypress</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Storybook</p>
            </div>
            <div className="flex flex-col gap-y-[8px] items-center">
              <IoLogoJavascript color={"#4B5563"} size={75} />
              <p className="text-[#4B5563] text-sm font-normal">Git</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
