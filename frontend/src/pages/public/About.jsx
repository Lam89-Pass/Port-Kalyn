import { useEffect, useState } from 'react';
import api from '../../api/axios';

const About = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        api.get('/abouts').then(res => setAbout(res.data[0]));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 leading-relaxed">
            <h2 className="text-3xl font-bold mb-6">Tentang Gue</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-lg text-gray-700 mb-6">{about?.description || 'Ceritain perjalanan lu di sini...'}</p>
                
                <h3 className="font-bold text-xl mb-4 text-blue-600">Apa yang gue kuasai?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Lu bisa map data Skills di sini nanti */}
                    <div className="p-4 bg-gray-50 rounded-lg text-center font-medium">React 19</div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center font-medium">Laravel 12</div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center font-medium">Tailwind 4</div>
                    <div className="p-4 bg-gray-50 rounded-lg text-center font-medium">MySQL</div>
                </div>
            </div>
        </div>
    );
};

export default About;