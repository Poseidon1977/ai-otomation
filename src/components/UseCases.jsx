import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, BarChart3, Users } from 'lucide-react';

const UseCases = () => {
    const cases = [
        {
            title: "Veri Analizi & Raporlama",
            desc: "Milyonlarca satır veriyi saniyeler içinde analiz eder ve stratejik raporlar sunar.",
            icon: <BarChart3 className="text-accent-cyan" size={24} />,
            color: "border-accent-cyan"
        },
        {
            title: "Müşteri Deneyimi",
            desc: "AI destekli chatbotlar ve kişiselleştirilmiş önerilerle müşteri memnuniyetini artırır.",
            icon: <Users className="text-accent-purple" size={24} />,
            color: "border-accent-purple"
        },
        {
            title: "Süreç Optimizasyonu",
            desc: "Tekrarlayan görevleri %100 doğrulukla ve inanılmaz bir hızla tamamlar.",
            icon: <Zap className="text-accent-blue" size={24} />,
            color: "border-accent-blue"
        },
        {
            title: "Otonom Karar Verme",
            desc: "Önceden tanımlanmış kurallarla en doğru kararları anlık olarak verir.",
            icon: <CheckCircle2 className="text-accent-cyan" size={24} />,
            color: "border-accent-cyan"
        }
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">Ne İçin Kullanılır?</h2>
                <p className="text-white/50">AI OtomatioN'un sınırsız potansiyelini keşfedin.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {cases.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`p-8 rounded-3xl border-l-2 ${item.color} flex items-center gap-6 group hover:bg-white/5 transition-all cursor-default relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 relative z-10">
                            {item.icon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UseCases;
