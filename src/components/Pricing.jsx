import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const Pricing = () => {
    const [selectedIdx, setSelectedIdx] = useState(1); // Default to Professional
    const [expandedIdx, setExpandedIdx] = useState(null);

    const plans = [
        {
            name: "Başlangıç",
            price: "4.900",
            features: ["Temel AI Analizi", "Haftalık Raporlama", "E-posta Desteği", "Süreç Optimizasyonu"],
            extra: "Küçük ölçekli işletmeler için ideal başlangıç paketi. Veri güvenliği ve temel otomasyon araçlarını içerir."
        },
        {
            name: "Profesyonel",
            price: "12.500",
            features: ["Gelişmiş AI Modelleri", "Günlük Analiz", "7/24 Öncelikli Destek", "Tam Otomasyon Entegrasyonu", "Özel Dashboard"],
            popular: true,
            extra: "Büyüyen ekipler için tasarlandı. Sınırsız otomasyon molekülü ve gerçek zamanlı tahminleme algoritmaları ile donatıldı."
        },
        {
            name: "Kurumsal",
            price: "Teklif Alın",
            features: ["Sınırsız Kapasite", "Özel AI Eğitimi", "Yerinde Kurulum & Destek", "API Erişimi", "Gelişmiş Güvenlik"],
            extra: "Global ölçekteki operasyonlar için terzi işi çözümler. Size özel eğitilmiş LLM modelleri ve şirket içi altyapı desteği."
        }
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">Ücretlendirme</h2>
                <p className="text-white/50">İhtiyacınıza uygun planı seçin.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        onClick={() => setSelectedIdx(idx)}
                        whileHover={{ y: -5 }}
                        className={`p-10 rounded-[40px] border transition-all cursor-pointer relative flex flex-col ${selectedIdx === idx
                                ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_40px_rgba(59,130,246,0.2)]'
                                : 'border-white/10 bg-white/5 hover:border-white/20'
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
                                <Sparkles size={12} className="text-white" />
                                <span className="text-white text-[10px] font-black uppercase tracking-widest">En Popüler</span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black">{plan.price}</span>
                                {plan.price !== "Teklif Alın" && <span className="text-white/40 text-sm">₺ / Ay</span>}
                            </div>
                        </div>

                        <ul className="space-y-4 flex-1 mb-10">
                            {plan.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                    <Check size={16} className={`transition-colors ${selectedIdx === idx ? 'text-blue-400' : 'text-white/20'}`} /> {f}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto space-y-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedIdx(expandedIdx === idx ? null : idx);
                                }}
                                className="w-full py-2 flex items-center justify-center gap-2 text-xs text-white/40 hover:text-white transition-colors"
                            >
                                {expandedIdx === idx ? "Daha Az Gör" : "Detayları Göster"}
                                {expandedIdx === idx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>

                            <AnimatePresence>
                                {expandedIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-xs text-white/50 leading-relaxed py-4 border-t border-white/5">
                                            {plan.extra}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 ${selectedIdx === idx
                                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                                    : 'bg-white/5 hover:bg-white/10 text-white/60'
                                }`}>
                                {selectedIdx === idx ? 'Plan Seçildi' : 'Bu Planı Seç'}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
