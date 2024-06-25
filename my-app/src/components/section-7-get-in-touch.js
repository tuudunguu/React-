import { Overview } from "../components/overview";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaMessage } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";

import { LuCopy } from "react-icons/lu";
export const GetInTouch = () => {
  return (
    <div className="w-full h-[560px]  ">
      <div className="w-full h-full flex flex-col  items-center px-8 gap-y-12 ">
        <div className="w-full h-[72px] flex flex-col gap-y-1.5 ">
          <div className="w-full h-[28px] flex flex-col gap-y-4 justify-center items-center">
            <Overview title="Get in touch" />
          </div>
          <div className="w-full h-[28px] flex justify-center items-center">
            <p className="text-[#4B5563] text-sm font-normal text-center">
              What’s next? Feel free to reach out to me if you're looking for{" "}
              <br></br>a developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="w-[360px] h-[100px] flex flex-col gap-y-5 justify-center items-center">
          <div className=" w-full h-full flex flex-row gap-x-4 justify-center items-center ">
            <FaMessage color={"#4B5563"} size={22} />
            <h2 className="text-[#111827] text-3xl font-semi-bold">
              tom@pinecone.mn
            </h2>

            <LuCopy color={"#4B5563"} size={22} />
          </div>
          <div className=" w-full h-full  flex flex-row gap-x-4 justify-center items-center">
            <LiaPhoneVolumeSolid color={"#4B5563"} size={22} />
            <h2 className="text-[#111827] text-3xl font-semi-bold">
              +976 88112233
            </h2>

            <LuCopy color={"#4B5563"} size={22} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 ">
          <p className="text-[#4B5563] text-sm font-normal">
            You may also find me on these platforms!
          </p>
          <div className="flex flex-row items-center justify-center gap-x-1 ">
            <FiGithub color={"#4B5563"} size={18} />
            <RiTwitterLine color={"#4B5563"} size={18} />
            <FiFigma color={"#4B5563"} size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
