import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Wrench, RefreshCw, ShieldCheck, ChevronRight, Info } from 'lucide-react';

const Service = () => {
    const [expandedIdx, setExpandedIdx] = useState(null);

    const services = [
        {
            title: "Sistem Bakımı",
            desc: "7/24 otonom sistemlerinizin periyodik kontrolü ve optimizasyonu.",
            details: "Donanım sağlığı ve yazılım performansı anlık olarak izlenir. Olası darboğazlar sistem tarafından otomatik olarak tespit edilir ve giderilir.",
            icon: <Settings className="text-blue-500" />
        },
        {
            title: "Teknik Destek",
            desc: "Herhangi bir aksaklıkta anında müdahale ve çözüm üretimi.",
            details: "Global destek ekibimiz ve otonom hata ayıklama botlarımız ile kritik sorunlara 15 dakika içinde müdahale garantisi veriyoruz.",
            icon: <Wrench className="text-blue-500" />
        },
        {
            title: "Model Güncelleme",
            desc: "Yapay zeka modellerinizin en son verilerle güncel tutulması.",
            details: "Piyasadaki yeni veri setleri ve algoritmik iyileştirmeler sisteminize otomatik olarak entegre edilir, model doğruluğu sürekli korunur.",
            icon: <RefreshCw className="text-blue-500" />
        },
        {
            title: "Güvenlik İzleme",
            desc: "Veri sızıntılarına karşı sürekli güvenlik taraması ve koruma.",
            details: "Sıfır güven (Zero Trust) mimarisi ile tüm giriş çıkışlar denetlenir. Tehdit algılama sistemimiz şüpheli aktiviteleri anında bloklar.",
            icon: <ShieldCheck className="text-blue-500" />
        }
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">Servis & Bakım</h2>
                <p className="text-white/50">Süreçlerinizin kesintisiz yürümesi için yanınızdayız.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((item, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                        whileHover={{ scale: 1.01 }}
                        className={`p-8 bg-white/5 border rounded-3xl flex flex-col gap-6 cursor-pointer transition-all ${expandedIdx === idx ? 'border-blue-500/50 bg-white/10' : 'border-white/10'}`}
                    >
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                            </div>
                            <button className="p-3 bg-white/5 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                                {expandedIdx === idx ? <Info size={18} /> : <ChevronRight size={18} />}
                            </button>
                        </div>

                        <AnimatePresence>
                            {expandedIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-sm text-white/60 leading-relaxed italic">
                                            "{item.details}"
                                        </p>
                                        <div className="mt-6 flex gap-4">
                                            <button className="flex-1 py-3 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-colors">
                                                Destek Talebi Aç
                                            </button>
                                            <button className="flex-1 py-3 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors border border-white/5">
                                                Dökümantasyon
                                            </button>
                                        </div>
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

export default Service;
