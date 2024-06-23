export const Upwork = ({ blackTitle, list1, list2, list3, list4, ognoo }) => {
  return (
    <div className="w-full h-fit p-8 shadow-2xl rounded-xl bg-[#FFFFFF]">
      <div className="w-full h-full flex flex-row gap-x-8 ">
        <div className="flex justify-start items-start ">
          <img src="/picture/Column.png"></img>
        </div>
        <div className="w-[384px] h-full flex flex-col gap-y-4 ">
          <div>
            <h2 className="text-[#111827] text-xl font-semibold">
              {blackTitle}
            </h2>
          </div>
          <div>
            <ul className="list-disc text-[#4B5563] text-sm font-normal flex flex-col gap-y-1 pl-6">
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-start ">
          <p className="text-[#4B5563] text-sm font-normal">{ognoo}</p>
        </div>
      </div>
    </div>
  );
};
