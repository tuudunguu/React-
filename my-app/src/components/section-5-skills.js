import { Overview } from "../components/overview";
import { Upwork } from "../components/Upwork";
export const Skills = () => {
  return (
    <div className="w-full h-[1140px] px-20 py-24 border-2 border-sky-500">
      <div className="w-full h-full flex flex-col px-48 gap-y-12 ">
        <div className="w-full h-[72px] flex flex-col gap-y-1.5 ">
          <div className="w-full h-[28px] flex justify-center items-center">
            <Overview title="Experince" />
          </div>
          <div className="w-full h-[28px] flex justify-center items-center">
            <p className="text-[#4B5563] text-sm font-normal">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        <div>
          <Upwork
            blackTitle="Sr. Frontend Developer"
            list1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            list2="Ut pretium arcu et massa semper, id fringilla leo semper."
            list3="Sed quis justo ac magna."
            list4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ognoo="Nov 2021 - Present"
          />
        </div>
        <div>
          <Upwork
            blackTitle="Team Lead"
            list1="Sed quis justo ac magna."
            list2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            list3="Sed quis justo ac magna."
            list4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ognoo="Jul 2017 - Oct 2021"
          />
        </div>
        <div>
          <Upwork
            blackTitle="Full Stack Developer"
            list1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ognoo="Dec 2015 - May 2017"
          />
        </div>
      </div>
    </div>
  );
};
