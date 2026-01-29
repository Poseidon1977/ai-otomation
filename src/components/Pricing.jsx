import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Başlangıç",
            price: "4.900",
            features: ["Temel AI Analizi", "Haftalık Raporlama", "E-posta Desteği", "Süreç Optimizasyonu"]
        },
        {
            name: "Profesyonel",
            price: "12.500",
            features: ["Gelişmiş AI Modelleri", "Günlük Analiz", "7/24 Öncelikli Destek", "Tam Otomasyon Entegrasyonu", "Özel Dashboard"],
            popular: true
        },
        {
            name: "Kurumsal",
            price: "Teklif Alın",
            features: ["Sınırsız Kapasite", "Özel AI Eğitimi", "Yerinde Kurulum & Destek", "API Erişimi", "Gelişmiş Güvenlik"]
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
                        whileHover={{ y: -10 }}
                        className={`p-10 rounded-[40px] border ${plan.popular ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}
                    >
                        {plan.popular && <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">En Popüler</span>}
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-8">
                            <span className="text-4xl font-black">{plan.price}</span>
                            {plan.price !== "Teklif Alın" && <span className="text-white/40 ml-2">₺ / Ay</span>}
                        </div>
                        <ul className="space-y-4 flex-1 mb-10">
                            {plan.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                    <Check size={16} className="text-blue-500" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/5 hover:bg-white/10'}`}>
                            Seç Bakalım
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
