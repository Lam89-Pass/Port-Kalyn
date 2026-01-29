import { useEffect, useState } from "react";
import api from "../../api/axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Ambil data 'About' atau ringkasan portofolio
    api.get("/abouts").then((res) => setData(res.data[0]));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Halo, Gue {data?.name || "Loading..."}!</h1>
      <p className="text-xl text-gray-600 max-w-2xl text-center">{data?.bio || "Fullstack Developer yang suka bikin aplikasi bersih dan kencang."}</p>
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Lihat Proyek</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">Kontak Gue</button>
      </div>
    </div>
  );
};

export default Home;
