import { useEffect, useState } from "react";
import api from "../../api/axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/skills")
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Skills...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 inline-block">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:scale-105 transition">
            {/* Jika lu simpan icon/logo di DB, bisa pake <img> di sini */}
            <span className="font-bold text-gray-800">{skill.name}</span>
            <span className="text-xs text-blue-500 mt-1">{skill.level || "Intermediate"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
