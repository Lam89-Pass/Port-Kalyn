import { useEffect, useState } from 'react';
import api from '../../api/axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/projects')
            .then(res => {
                setProjects(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) return <div className="p-10 text-center">Loading Projects...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 inline-block">My Creative Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition">
                        <img src={project.image || 'https://via.placeholder.com/400x250'} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech_stack?.map((tech, index) => (
                                    <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href={project.link_demo} target="_blank" className="text-blue-600 font-semibold text-sm">Live Demo →</a>
                                <a href={project.link_github} target="_blank" className="text-gray-500 hover:text-black">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;