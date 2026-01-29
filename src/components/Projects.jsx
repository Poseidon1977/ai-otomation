import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

const Projects = () => {
    const [expandedIdx, setExpandedIdx] = useState(null);

    const projects = [
        {
            title: "Smart Retail AI",
            category: "E-Commerce",
            desc: "Fiziksel mağazalarda müşteri trafiğini ve sepet hareketlerini analiz eden otonom görüntü işleme sistemi.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        },
        {
            title: "HealthGuard Data",
            category: "Healthcare",
            desc: "Hastane kayıtlarını analiz ederek erken teşhis önerileri sunan ve personel iş yükünü optimize eden yapay zeka beyni.",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop"
        },
        {
            title: "FinFlow Automator",
            category: "Finance",
            desc: "Borsaları ve ekonomik trendleri 7/24 takip ederek otomatik arbitraj ve risk raporlaması yapan finansal bot.",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2670&auto=format&fit=crop"
        },
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Projelerimiz</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                        className="group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/6] cursor-pointer flex flex-col justify-end"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${expandedIdx === idx ? 'opacity-30 blur-sm scale-110' : 'opacity-50 group-hover:opacity-100'}`}
                        />

                        <div className="absolute top-4 right-4 z-20">
                            <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white/70">
                                {expandedIdx === idx ? <Info size={16} className="text-accent-cyan" /> : <ExternalLink size={16} />}
                            </div>
                        </div>

                        <div className="relative z-10 p-8 pt-20 bg-gradient-to-t from-dark via-dark/80 to-transparent w-full">
                            <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">{project.category}</span>
                            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

                            <AnimatePresence>
                                {expandedIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm text-white/60 mt-4 leading-relaxed border-t border-white/10 pt-4">
                                            {project.desc}
                                        </p>
                                        <button className="mt-6 w-full py-3 bg-accent-cyan/20 hover:bg-accent-cyan text-white text-xs font-bold rounded-xl transition-all border border-accent-cyan/40">
                                            Projeyi İncele
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
