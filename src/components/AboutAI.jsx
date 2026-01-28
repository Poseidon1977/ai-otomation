import React from 'react';
import { motion } from 'framer-motion';

const AboutAI = () => {
    return (
        <div className="py-24 px-10 max-w-6xl mx-auto relative overflow-hidden">
            {/* Background Neural Network Constellation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 500">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {[...Array(20)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={Math.random() * 800}
                            cy={Math.random() * 500}
                            r="0.5"
                            fill="#00F5FF"
                            animate={{ opacity: [0.1, 0.5, 0.1] }}
                            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                        />
                    ))}
                </svg>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight" translate="no">
                        AI AutomatioN <span className="text-accent-purple" translate="yes">Nedir?</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple" />
                    <p className="text-lg text-white/70 leading-relaxed">
                        <span translate="no">AI AutomatioN</span>, geleneksel iş süreçlerini yapay zeka algoritmaları ve otonom sistemlerle birleştiren yeni nesil bir çalışma disiplinidir.
                        İnsan hatasını minimize eder, 7/24 kesintisiz çalışma imkanı sunar ve karmaşık veri setlerini saniyeler içinde analiz eder.
                    </p>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Sadece bir yazılım değil, işletmenizin dijital beyni olarak görev yapar.
                        Müşteri hizmetlerinden veri girişine, pazarlama stratejilerinden üretim bandına kadar her alanda devrim yaratır.
                    </p>
                </div>

                <div className="relative aspect-square flex items-center justify-center p-4 min-h-[400px]">
                    {/* Floating Data Particles flying into the center */}
                    <div className="absolute inset-0 pointer-events-none overflow-visible">
                        {[...Array(40)].map((_, i) => {
                            const angle = (i / 40) * Math.PI * 2;
                            const distance = 300 + Math.random() * 150;
                            const x = Math.cos(angle) * distance;
                            const y = Math.sin(angle) * distance;
                            const size = 1 + Math.random() * 3;
                            const isPurple = Math.random() > 0.7;
                            const color = isPurple ? '#A855F7' : '#00F5FF';
                            const glow = isPurple ? 'shadow-[0_0_15px_#A855F7]' : 'shadow-[0_0_15px_#00F5FF]';

                            return (
                                <motion.div
                                    key={i}
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        width: `${size}px`,
                                        height: `${size}px`,
                                        backgroundColor: color
                                    }}
                                    className={`absolute rounded-full ${glow}`}
                                    initial={{ x, y, opacity: 0, scale: 0.5 }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: [0, 1, 1, 0],
                                        scale: [0.5, 1.2, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 5,
                                        ease: "circIn"
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Central Glowing Sphere Core */}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Outer Glows */}
                        <div className="absolute inset-0 bg-accent-cyan/20 blur-[60px] rounded-full animate-pulse" />
                        <div className="absolute inset-10 bg-accent-purple/20 blur-[40px] rounded-full animate-pulse delay-700" />

                        {/* Orbiting Interaction Rings */}
                        <motion.div
                            className="absolute w-full h-full border border-accent-cyan/20 rounded-full"
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{
                                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                        <motion.div
                            className="absolute w-[80%] h-[80%] border border-accent-purple/20 rounded-full border-dashed"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Scanning Effect inside the circle */}
                        <div className="absolute inset-4 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute left-0 w-full h-[2px] bg-accent-cyan/40 shadow-[0_0_15px_#00F5FF] z-0"
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        {/* Processor Hub Core (Round) */}
                        <div className="relative z-10 w-32 h-32 bg-dark/90 backdrop-blur-3xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,245,255,0.15)] overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-cyan/20 via-transparent to-transparent opacity-50" />

                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                {/* Centered AI Text */}
                                <span className="text-4xl font-black text-white leading-none drop-shadow-[0_0_15px_rgba(0,245,255,0.6)]" translate="no">AI</span>

                                {/* Status Bars below AI */}
                                <div className="absolute bottom-7 flex gap-1 justify-center h-4 items-end">
                                    {[0, 1, 2, 3].map(i => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-accent-cyan/60 rounded-full"
                                            animate={{ height: [3, 12, 3] }}
                                            transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAI;
