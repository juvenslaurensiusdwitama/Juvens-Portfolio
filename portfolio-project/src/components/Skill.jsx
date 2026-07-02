const Skill = ({ data }) => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration={800} data-aos-delay={data.delay} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md xl:p-5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]">
      <img
        src={data.icon}
        alt={data.name}
        className="lg:w-12 md:w-10 sm:w-12 w-10 shrink-0 rounded-md object-contain"
      />

      <div className="flex flex-col">
        <h3 className="xl:text-lg xl:font-semibold md:text-base sm:font-medium text-sm text-white">
          {data.name}
        </h3>
        <p className="md:text-sm text-xs text-white/60">
          {data.type}
        </p>
      </div>
    </div>
  );
};

export default Skill;