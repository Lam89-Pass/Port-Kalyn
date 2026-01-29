import { useEffect, useState } from "react";
import api from "../../api/axios";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api.get("/experiences").then((res) => setExperiences(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-blue-600 inline-block">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <span className="text-sm font-semibold text-blue-600">{exp.duration}</span>
              <h3 className="text-xl font-bold mt-1">{exp.position}</h3>
              <h4 className="text-gray-600 font-medium">{exp.company}</h4>
              <p className="mt-3 text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
