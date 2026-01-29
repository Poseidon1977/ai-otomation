import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, BarChart3, Users, ChevronDown, ChevronUp } from 'lucide-react';

const UseCases = () => {
    const [expandedIdx, setExpandedIdx] = useState(null);

    const cases = [
        {
            title: "Veri Analizi & Raporlama",
            desc: "Milyonlarca satır veriyi saniyeler içinde analiz eder ve stratejik raporlar sunar.",
            details: "Büyük veri setlerini (Big Data) işleyerek pazar trendlerini, rakip analizlerini ve finansal tahminleri en yüksek doğrulukla raporlar. Manuel hata riskini sıfıra indirir.",
            icon: <BarChart3 className="text-accent-cyan" size={24} />,
            color: "border-accent-cyan"
        },
        {
            title: "Müşteri Deneyimi",
            desc: "AI destekli chatbotlar ve kişiselleştirilmiş önerilerle müşteri memnuniyetini artırır.",
            details: "Doğal Dil İşleme (NLP) teknolojisi ile müşterilerinizle insan gibi konuşan asistanlar kurarız. 7/24 kesintisiz destek ve anlık çözüm sunar.",
            icon: <Users className="text-accent-purple" size={24} />,
            color: "border-accent-purple"
        },
        {
            title: "Süreç Optimizasyonu",
            desc: "Tekrarlayan görevleri %100 doğrulukla ve inanılmaz bir hızla tamamlar.",
            details: "Form doldurma, veri girişi, otomatik faturalandırma ve onay süreçlerini otonom hale getirir. Ekibinizin yaratıcı işlere odaklanmasını sağlar.",
            icon: <Zap className="text-accent-blue" size={24} />,
            color: "border-accent-blue"
        },
        {
            title: "Otonom Karar Verme",
            desc: "Önceden tanımlanmış kurallarla en doğru kararları anlık olarak verir.",
            details: "Bulanık mantık ve makine öğrenmesi algoritmaları ile karmaşık senaryolarda en karlı ve hızlı kararı sizin yerinize verir, operasyonel hızı artırır.",
            icon: <CheckCircle2 className="text-accent-cyan" size={24} />,
            color: "border-accent-cyan"
        }
    ];

    const toggleExpand = (idx) => {
        setExpandedIdx(expandedIdx === idx ? null : idx);
    };

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
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        onClick={() => toggleExpand(idx)}
                        className={`p-8 rounded-3xl border-l-2 ${item.color} flex flex-col gap-6 group hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden h-fit`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center gap-6 relative z-10 w-full">
                            <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                            <button
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                {expandedIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        <AnimatePresence>
                            {expandedIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden relative z-10"
                                >
                                    <div className="pt-4 border-t border-white/5 mt-2">
                                        <p className="text-white/70 leading-relaxed mb-6 italic">
                                            "{item.details}"
                                        </p>
                                        <button className="px-8 py-3 bg-white text-dark font-black rounded-2xl hover:bg-accent-cyan hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-white/5">
                                            Bunu Uygula
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UseCases;
