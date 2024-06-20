export const Navbar = () => {
  return (
    
<div className="w-full  h-[68px] border-solid border-2 border-zinc-950 px-20 py-4">
  <div className="w-full  h-full flex flex-row justify-between  border-solid border-2 border-indigo-600 px-9">
   
      <div className="border-solid border-2 border-yellow-700">
        <img src="/picture/Tom.png" alt="Tom" />
      </div>
      <div className="flex flex-row items-center gap-7">
      <div className="flex flex-row items-center space-x-4 border-r-2 pr-6  border-[#BBBBBB] ">
        <h2>About</h2>
        <h2>Work</h2>
        <h2>Testimonials</h2>
        <h2>Contact</h2>
      </div>
      <div className="flex items-center space-x-4  border-solid border-2 border-yellow-700">
        <div>
          <img src="/picture/sun.png" alt="Sun" />
        </div>
        <div className=" flex justify-center items-center w-32 h-7 bg-[#111827] text-[#F9FAFB] rounded-xl"> <h3 className="text-sm/[16px]">Download CV</h3></div>
      </div>
      </div>
    </div>
    <div className="flex-1"></div>
  
</div>

    
    
  );
};
