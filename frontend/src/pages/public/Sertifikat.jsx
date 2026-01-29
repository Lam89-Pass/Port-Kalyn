// src/pages/public/Sertifikat.jsx
import { useEffect, useState } from "react";
import api from "../../api/axios";

const Sertifikat = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    api.get("/cert-v").then((res) => setCerts(res.data)); // Path unik
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-black mb-10 text-gray-900">ACHIEVEMENTS</h2>
      <div className="space-y-4">
        {certs.map((cert) => (
          <div key={cert.id} className="p-6 bg-white border border-gray-100 rounded-2xl flex justify-between items-center group hover:bg-blue-600 transition-all duration-300">
            <div>
              <h4 className="font-bold text-gray-800 group-hover:text-white transition">{cert.name}</h4>
              <p className="text-xs text-gray-400 group-hover:text-blue-100 transition">
                {cert.issuer} • {cert.year}
              </p>
            </div>
            <div className="text-blue-600 group-hover:text-white">🏅</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sertifikat;
