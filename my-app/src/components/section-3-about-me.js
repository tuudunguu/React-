import { Overview } from "../components/overview";
export const Aboutme = () => {
  return (
    <div className="w-full h-fit px-4 py-16 bg-[#E5E7EB] lg:w-full lg:h-[826px]  lg:bg-[#E5E7EB]">
      <div className="w-full h-[100%] flex flex-col   gap-y-6 lg:w-full lg:h-[100%] lg:flex lg:flex-col  lg:px-8 lg:gap-y-12">
        <div className="w-full h-[28px] flex justify-center items-center">
          <Overview title="About me" />
        </div>

        <div className=" w-full h-full flex flex-col  gap-y-12 items-center lg:w-full lg:h-[100%] lg:flex lg:flex-row lg:justify-between">
          <div className=" w-full  flex justify-center items-center   lg:w-[584px] lg:h-[100%] lg:flex lg:flex-row  lg:pb-[80px] lg:pr-[144px]">
            <div className="w-[320px] h-[380px] flex justify-center relative lg:w-full lg:h-[100%]  lg:relative ">
              <img
                src="/picture/Background.png "
                className="w-[320px] h-[360px] bottom-0 absolute   lg:w-[400px] lg:absolute lg:left-0 lg:bottom-0"
              ></img>
              <img
                src="/picture/Pic.png "
                className="w-[280px] h-[360px] absolute  lg:w-[440px] lg:h-[520px] lg:absolute lg:right-0"
              ></img>
            </div>
          </div>
          <div className=" w-full h-fit flex flex-col gap-y-6 lg:w-[584px] lg:h-[100%] lg:flex lg:flex-col lg:gap-y-6">
            <div>
              <h1 className="text-black text-3xl font-bold ">
                Curious about me? Here you have it:
              </h1>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[#4B5563] text-sm font-normal">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="text-[#4B5563] text-sm font-normal">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="text-[#4B5563] text-sm font-normal">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="text-[#4B5563] text-sm font-normal">
                Finally, some quick bits about me.
              </p>
              <ul className="list-disc flex flex-wrap  text-[#4B5563] text-sm font-normal  p-4">
                <li className="mr-16">B.E. in Computer Engineering</li>
                <li className="mr-16">Avid learner</li>
                <li className="w-full mt-2">Full time freelancer</li>
              </ul>

              <p className="text-[#4B5563] text-sm font-normal">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
