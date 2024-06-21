import { Overview } from "../components/overview";
export const Aboutme = () => {
  return (
    <div className="w-full h-[826px] px-20 py-24 border-2 border-sky-500">
      <div className="w-full h-[100%] flex flex-col border-2 border-sky-500 px-8 gap-y-2">
        <div className="w-full h-[28px] flex justify-center items-center">
          <Overview title="About me" />
        </div>

        <div className=" w-full h-[100%] flex flex-row justify-between border-2 border-sky-500">
          <div className=" w-[584px] h-[100%] flex flex-row border-2 border-sky-500 pb-[38px] pr-[248px]">
            <div className="w-full h-[100%]  relative ">
              <img
                src="/picture/Background.png "
                className="absolute left-0 bottom-0"
              ></img>
              <img src="/picture/Pic.png " className="absolute right-0"></img>
            </div>
          </div>
          <div className=" w-[584px] h-[100%] flex flex-row border-2 border-sky-500"></div>
        </div>
      </div>
    </div>
  );
};
