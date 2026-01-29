import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, HeartPulse, Building2, Truck, ChevronDown, ChevronUp } from 'lucide-react';

const BusinessSectors = () => {
    const [expandedIdx, setExpandedIdx] = useState(null);

    const sectors = [
        {
            name: "E-Ticaret & Perakende",
            icon: <ShoppingCart size={24} />,
            color: "border-accent-cyan",
            details: "Stok yönetiminden müşteri analizine kadar tüm süreçleri otonom hale getirin. Sepet terk oranlarını düşürün ve kişiselleştirilmiş tekliflerle dönüşümleri artırın."
        },
        {
            name: "Sağlık & Biyoteknoloji",
            icon: <HeartPulse size={24} />,
            color: "border-accent-purple",
            details: "Hasta verilerini güvenle işleyin, randevu sistemlerini optimize edin ve yapay zeka destekli teşhis asistanları ile sağlık hizmetlerinde verimliliği zirveye taşıyalım."
        },
        {
            name: "Finans & Bankacılık",
            icon: <Building2 size={24} />,
            color: "border-accent-blue",
            details: "Risk analizlerini milisaniyeler içinde gerçekleştirin. Dolandırıcılık tespiti ve otomatik portföy yönetimi ile finansal süreçlerinizi güvence altına alın."
        },
        {
            name: "Lojistik & Tedarik Zinciri",
            icon: <Truck size={24} />,
            color: "border-accent-cyan",
            details: "Rota optimizasyonu ve otonom depo yönetimi ile maliyetleri düşürün. Teslimat sürelerini yapay zeka ile %40'a varan oranlarda iyileştirin."
        },
    ];

    const toggleExpand = (idx) => {
        setExpandedIdx(expandedIdx === idx ? null : idx);
    };

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Hangi İş Kulvarlarında Kullanılır?</h2>
                    <p className="text-white/50 max-w-xl">Hemen hemen her sektör, AI OtomatioN ile verimliliğini katlayabilir.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sectors.map((sector, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => toggleExpand(idx)}
                        className={`p-8 rounded-3xl border-l-2 ${sector.color} flex flex-col gap-6 group hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden h-fit`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center gap-6 relative z-10 w-full">
                            <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                {sector.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{sector.name}</h3>
                                <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors">Yapay zeka ile optimize edin.</p>
                            </div>
                            <button
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label={expandedIdx === idx ? "Kapat" : "Detayları Gör"}
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
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden relative z-10"
                                >
                                    <p className="text-white/70 leading-relaxed pt-4 border-t border-white/5">
                                        {sector.details}
                                    </p>
                                    <button className="mt-6 px-6 py-2 bg-accent-cyan/20 hover:bg-accent-cyan/40 text-accent-cyan rounded-full text-sm font-bold transition-all border border-accent-cyan/30">
                                        Çözümü İncele
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BusinessSectors;
