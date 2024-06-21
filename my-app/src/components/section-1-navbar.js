export const Navbar = () => {
  return (
    <div className="w-full  h-[68px]  px-20 py-4">
      <div className="w-full  h-full flex flex-row justify-between   px-9">
        <div className="">
          <img src="/picture/Tom.png" alt="Tom" />
        </div>
        <div className="flex flex-row items-center gap-7">
          <div className="flex flex-row items-center space-x-4  pr-6   ">
            <h2 className="text-[#4B5563] text-sm font-normal">About</h2>
            <h2 className="text-[#4B5563] text-sm font-normal">Work</h2>
            <h2 className="text-[#4B5563] text-sm font-normal">Testimonials</h2>
            <h2 className="text-[#4B5563] text-sm font-normal">Contact</h2>
          </div>
          <div className="flex items-center space-x-4  ">
            <div>
              <img src="/picture/sun.png" alt="Sun" />
            </div>
            <div className=" flex justify-center items-center w-32 h-7 bg-[#111827] text-[#F9FAFB] rounded-xl">
              {" "}
              <h3 className="text-sm/[16px]">Download CV</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
