const Experience = () => {
  const experiences = [
    { role: "Senior Developer", company: "Tech Global", year: "2023 - Present" },
    { role: "Fullstack Dev", company: "StartupX", year: "2021 - 2023" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-16">WORK HISTORY</h2>
      <div className="space-y-12 border-l border-white/10 pl-8 relative">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-bg-main shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.year}</span>
            <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
            <p className="text-gray-500 font-medium">{exp.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
