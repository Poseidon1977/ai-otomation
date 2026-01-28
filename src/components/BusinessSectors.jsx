import { motion } from 'framer-motion';
import { ShoppingCart, HeartPulse, Building2, Truck } from 'lucide-react';

const BusinessSectors = () => {
    const sectors = [
        { name: "E-Ticaret & Perakende", icon: <ShoppingCart size={24} />, color: "border-accent-cyan" },
        { name: "Sağlık & Biyoteknoloji", icon: <HeartPulse size={24} />, color: "border-accent-purple" },
        { name: "Finans & Bankacılık", icon: <Building2 size={24} />, color: "border-accent-blue" },
        { name: "Lojistik & Tedarik Zinciri", icon: <Truck size={24} />, color: "border-accent-cyan" },
    ];

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
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`p-8 rounded-3xl border-l-2 ${sector.color} flex items-center gap-6 group hover:bg-white/5 transition-all cursor-default relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 relative z-10">
                            {sector.icon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{sector.name}</h3>
                            <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors">Bu sektördeki süreçleri AI ile optimize edin.</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BusinessSectors;
