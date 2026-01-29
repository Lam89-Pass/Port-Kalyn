import { useEffect, useState } from "react";
import api from "../../api/axios";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    api.get("/education").then((res) => setEducations(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-blue-600 inline-block">Education History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educations.map((edu) => (
          <div key={edu.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition">
            <span className="text-blue-600 font-bold">{edu.year}</span>
            <h3 className="text-xl font-bold mt-2">{edu.institution}</h3>
            <p className="text-gray-600 italic">{edu.major}</p>
            <p className="mt-2 text-sm text-gray-500">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
