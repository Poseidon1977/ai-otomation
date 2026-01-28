import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px]" />

            <div className="relative z-10 text-center space-y-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 text-accent-cyan text-sm font-medium mb-4 tracking-[0.2em] uppercase"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Geleceğin Otomasyon Dünyası</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight"
                >
                    Yapay Zeka ile <br />
                    <span className="text-gradient">İşinizi Özgürleştirin</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-white/60 max-w-2xl mx-auto"
                >
                    <span translate="no">AI AutomatioN</span>, işletmenizin tekrarlayan süreçlerini son model yapay zeka teknolojileriyle optimize eder.
                    Hız, verimlilik ve kusursuz otomasyon için buradayız.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-4 justify-center pt-6"
                >
                    <button className="px-8 py-4 bg-white text-dark rounded-2xl font-bold hover:bg-white/90 transition-all">
                        Hemen Başlayın
                    </button>
                    <button className="px-8 py-4 glass border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all">
                        Projeleri İncele
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
