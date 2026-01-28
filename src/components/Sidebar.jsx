import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Cpu, Layers, MessageSquare } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuGroups = [
        {
            title: "Navigation",
            items: [
                { name: "Anasayfa", icon: <Home size={20} />, id: "home" },
                { name: "AI Nedir?", icon: <Info size={20} />, id: "about" },
                { name: "Projeler", icon: <Layers size={20} />, id: "projects" },
            ]
        },
        {
            title: "Solutions",
            items: [
                { name: "Kullanım Alanları", icon: <Cpu size={20} />, id: "use-cases" },
                { name: "İş Kulvarları", icon: <Layers size={20} />, id: "sectors" },
                { name: "İletişim", icon: <MessageSquare size={20} />, id: "contact" },
            ]
        }
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-dark flex flex-col p-6 z-50">
            <div className="mb-10 flex flex-col items-center gap-1" translate="no">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-1 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Micro Data Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-[1.5px] h-[1.5px] bg-blue-400 rounded-full"
                                initial={{
                                    x: Math.cos((i / 12) * Math.PI * 2) * 24,
                                    y: Math.sin((i / 12) * Math.PI * 2) * 24,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 1 + Math.random(),
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeIn"
                                }}
                            />
                        ))}
                    </div>

                    <span className="text-white font-black text-xs uppercase z-10 relative">AI</span>
                </div>
                <h1 className="text-xl font-black text-white tracking-tighter">
                    AutomatioN
                </h1>
            </div>

            <nav className="flex-1 space-y-8">
                {menuGroups.map((group, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest px-2">
                            {group.title}
                        </h2>
                        <ul className="space-y-2">
                            {group.items.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setActiveSection(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 group relative overflow-hidden ${activeSection === item.id
                                            ? 'bg-blue-600/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 transition-opacity ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                            }`} />
                                        <span className={`${activeSection === item.id ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]' : 'text-blue-400/60 group-hover:text-blue-400'
                                            } transition-all`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-medium text-sm z-10">{item.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
