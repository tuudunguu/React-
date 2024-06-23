import { Overview } from "../components/overview";
export const Work = () => {
  return (
    <div className="w-full h-[1440px] px-20 py-24 border-2 border-sky-500">
      <div className="w-full h-full flex flex-col px-16 gap-y-12 border-2 border-sky-500">
        <div className="w-full h-[72px] flex flex-col gap-y-1.5 ">
          <div className="w-full h-[28px] flex justify-center items-center">
            <Overview title="Work" />
          </div>
          <div className="w-full h-[28px] flex justify-center items-center">
            <p className="text-[#4B5563] text-sm font-normal">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        <div className="w-full h-[480px] border-2 border-sky-500 flex flex-row ">
          <div className="w-full h-full flex grow-1 border-2 border-sky-500 p-12">
            <img></img>
          </div>
          <div className="w-full h-full flex grow-1 border-2 border-sky-500 p-12"></div>
        </div>
        <div className="w-full h-[480px] border-2 border-sky-500 "></div>
        <div className="w-full h-[480px] border-2 border-sky-500 "></div>
      </div>
    </div>
  );
};
