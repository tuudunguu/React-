import { Overview } from "../components/overview";
import { Works } from "../components/works";
export const Work = () => {
  return (
    <div className="w-full h-[1848px] px-20 py-24 ">
      <div className="w-full h-full flex flex-col px-16 gap-y-12">
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
        <div className="w-full h-[480px]  flex flex-row shadow-2xl rounded-xl">
          <div className="w-full h-full flex grow-1  p-12 bg-[#F3F4F6] rounded-l-xl">
            <img src="/picture/Ub.cab.png"></img>
          </div>
          <div className="w-full h-full flex grow-1  p-12">
            <Works
              worksBlacktitle="UBCab"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            />
          </div>
        </div>
        <div className="w-full h-[480px]  flex flex-row-reverse shadow-2xl rounded-xl">
          <div className="w-full h-full flex grow-1  p-12 bg-[#F3F4F6] rounded-r-xl">
            <img src="/picture/mentor.hub.png"></img>
          </div>
          <div className="w-full h-full flex grow-1  p-12">
            <Works
              worksBlacktitle="Mentorhub"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            />
          </div>
        </div>
        <div className="w-full h-[480px]  flex flex-row shadow-2xl rounded-xl">
          <div className="w-full h-full flex grow-1  p-12 bg-[#F3F4F6] rounded-l-xl">
            <img src="/picture/Itoim.png"></img>
          </div>
          <div className="w-full h-full flex grow-1  p-12">
            <Works
              worksBlacktitle="iToim"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
