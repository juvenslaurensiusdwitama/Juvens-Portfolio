import React from "react";

const Skill = ({ data }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
      <img
        src={data.icon}
        alt={data.name}
        className="w-12 h-12 shrink-0 rounded-md object-contain"
      />

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">
          {data.name}
        </h3>

        <p className="text-sm text-white/60">
          {data.type}
        </p>
      </div>
    </div>
  );
};

export default Skill;