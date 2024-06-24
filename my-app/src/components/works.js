import { Overview } from "../components/overview";
export const Works = ({ worksBlacktitle, para }) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-6">
      <h2 className="text-[#111827] text-xl font-semibold">
        {worksBlacktitle}
      </h2>
      <p className="text-[#4B5563] text-sm font-normal">{para}</p>
      <div className="w-full h-[100px] flex flex-wrap gap-2 ">
        <Overview title="React" />
        <Overview title="Next.js" />
        <Overview title="Typescript" />
        <Overview title="Nest.js" />
        <Overview title="PostgreSQL" />
        <Overview title="Tailwindcss" />
        <Overview title="Figma" />
        <Overview title="Cypress" />
        <Overview title="Storybook" />
        <Overview title="Git" />
      </div>
      <img src="/picture/exit.png" className="w-6"></img>
    </div>
  );
};
