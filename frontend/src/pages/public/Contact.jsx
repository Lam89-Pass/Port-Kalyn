import { useState } from "react";
import api from "../../api/axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await api.post("/contacts", formData);
      setStatus("Pesan terkirim, Boss!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Gagal kirim pesan.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 inline-block">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-6">Ada ide proyek atau mau nanya-nanya? Langsung aja isi form atau hubungi lewat sosmed.</p>
          <div className="space-y-4">
            <p className="font-medium">📍 Bandung, Indonesia</p>
            <p className="font-medium">📧 kalyn@example.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
          {status && <p className="text-center text-sm font-medium text-blue-600">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
