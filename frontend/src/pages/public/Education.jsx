const Education = () => {
  const edus = [{ school: "University of Technology", major: "Computer Science", year: "2017 - 2021" }];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-16">ACADEMIC PATH</h2>
      <div className="grid gap-8">
        {edus.map((edu) => (
          <div key={edu.school} className="card-luxury p-10 rounded-3xl">
            <h3 className="text-2xl font-bold">{edu.school}</h3>
            <p className="text-primary font-bold text-sm mt-1 uppercase tracking-widest">{edu.major}</p>
            <p className="text-gray-400 text-xs mt-4">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
