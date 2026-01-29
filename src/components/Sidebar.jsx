import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Cpu, Layers, MessageSquare } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuItems = [
        { name: "Anasayfa", icon: <Home size={20} />, id: "home" },
        { name: "Ücretler", icon: <Layers size={20} />, id: "pricing" },
        { name: "Servis & Bakım", icon: <Cpu size={20} />, id: "service" },
        { name: "AI Nedir?", icon: <Info size={20} />, id: "about" },
        { name: "İletişim", icon: <MessageSquare size={20} />, id: "contact" },
    ];

    return (
        <>
            {/* Desktop Sidebar (Left) - Hidden on mobile/tablet */}
            <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-64 bg-dark flex-col p-6 z-50 border-r border-white/5">
                <div className="mb-10 flex flex-col items-center gap-1" translate="no">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] mb-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-[1.5px] h-[1.5px] bg-blue-400 rounded-full"
                                    initial={{ x: Math.cos((i / 12) * Math.PI * 2) * 24, y: Math.sin((i / 12) * Math.PI * 2) * 24, opacity: 0 }}
                                    animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                                    transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() * 2, ease: "easeIn" }}
                                />
                            ))}
                        </div>
                        <span className="text-white font-black text-xs uppercase z-10 relative">AI</span>
                    </div>
                    <h1 className="text-xl font-black text-white tracking-tighter">AutomatioN</h1>
                </div>

                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 group relative overflow-hidden ${activeSection === item.id
                                ? 'bg-blue-600/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 transition-opacity ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                            <span className={`${activeSection === item.id ? 'text-blue-400' : 'text-blue-400/60 group-hover:text-blue-400'} transition-all`}>
                                {item.icon}
                            </span>
                            <span className="font-medium text-sm z-10">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Mobile Bottom Navigation (App Style) - Visible on small/medium screens */}
            <nav className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-md h-20 bg-dark/90 backdrop-blur-3xl border border-white/10 rounded-[32px] flex items-center justify-around px-2 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pb-safe">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className="relative flex flex-col items-center justify-center gap-1 group"
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute -top-3 w-8 h-1 bg-blue-500 rounded-full shadow-[0_0_15px_#2563EB]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`transition-all duration-300 ${activeSection === item.id ? 'text-blue-500 scale-110' : 'text-white/40'}`}>
                            {item.icon}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-tighter transition-all duration-300 ${activeSection === item.id ? 'text-blue-500 opacity-100' : 'text-white/20 opacity-0'}`}>
                            {item.name}
                        </span>
                    </button>
                ))}
            </nav>
        </>
    );
};

export default Sidebar;
