import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { title: "Smart Retail AI", category: "E-Commerce", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
        { title: "HealthGuard Data", category: "Healthcare", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop" },
        { title: "FinFlow Automator", category: "Finance", image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2670&auto=format&fit=crop" },
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Projelerimiz</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/5] cursor-pointer"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-dark to-transparent">
                            <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">{project.category}</span>
                            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
