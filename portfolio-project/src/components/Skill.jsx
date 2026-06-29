import React from "react";

const Skill = ({ data }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md xl:p-5 md:p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
      <img
        src={data.icon}
        alt={data.name}
        className="lg:w-12 lg:h-12 md:w-10 md:w-10 shrink-0 rounded-md object-contain"
      />

      <div className="flex flex-col">
        <h3 className="lg:text-base md:text-sm xl:font-semibold md:font-medium text-white">
          {data.name}
        </h3>

        <p className="lg:text-sm md:text-xs text-white/60">
          {data.type}
        </p>
      </div>
    </div>
  );
};

export default Skill;