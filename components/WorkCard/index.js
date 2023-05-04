import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ name, company, description, period }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <p className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        <h1 className="text-3xl">{name ? name : "Heading"}</h1>
        <p className="mt-4 opacity-40 text-xl">
          {period ? period : "##.#### ~ ##.####"}
        </p>
      </p>
      <p className="mt-4 opacity-40 text-xl font-style: italic">
        {company ? company : "company name"}
      </p>
      <p className="mt-4 opacity-40 text-xl">
        {description ? description : "work description"}
      </p>
    </div>
  );
};

export default WorkCard;
