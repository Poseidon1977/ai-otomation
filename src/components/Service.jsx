import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, RefreshCw, ShieldCheck } from 'lucide-react';

const Service = () => {
    const services = [
        {
            title: "Sistem Bakımı",
            desc: "7/24 otonom sistemlerinizin periyodik kontrolü ve optimizasyonu.",
            icon: <Settings className="text-blue-500" />
        },
        {
            title: "Teknik Destek",
            desc: "Herhangi bir aksaklıkta anında müdahale ve çözüm üretimi.",
            icon: <Wrench className="text-blue-500" />
        },
        {
            title: "Model Güncelleme",
            desc: "Yapay zeka modellerinizin en son verilerle güncel tutulması.",
            icon: <RefreshCw className="text-blue-500" />
        },
        {
            title: "Güvenlik İzleme",
            desc: "Veri sızıntılarına karşı sürekli güvenlik taraması ve koruma.",
            icon: <ShieldCheck className="text-blue-500" />
        }
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">Servis & Bakım</h2>
                <p className="text-white/50">Süreçlerinizin kesintis_iz yürümesi için yanınızdayız.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="p-8 bg-white/5 border border-white/10 rounded-3xl flex gap-6"
                    >
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                            {item.icon}
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Service;
