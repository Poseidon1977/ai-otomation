import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Rocket, Database, Globe, Zap, Plus, Minus } from 'lucide-react';

const homeFeatures = [
    {
        title: "7/24 Otonom Çalışma",
        desc: "İnsan müdahalesine gerek duymadan süreçlerinizi kesintisiz yönetir.",
        details: "Gece gündüz fark etmeksizin, önceden tanımlanmış parametreler ışığında kararlar alır ve uygular. Siz uyurken bile işiniz tıkır tıkır işlemeye devam eder.",
        icon: <Activity className="text-blue-400" />
    },
    {
        title: "Veri Güvenliği",
        desc: "En üst düzey şifreleme ile verilerinizi korur ve işler.",
        details: "Veri sızıntılarını önleyen proaktif savunma sistemleri ile donatılmıştır. Tüm veri trafiği end-to-end şifreleme ile güvence altına alınır.",
        icon: <Shield className="text-blue-400" />
    },
    {
        title: "Sonsuz Ölçeklenebilirlik",
        desc: "İşiniz büyüdükçe otomasyon kapasiteniz de aynı hızla artar.",
        details: "Altyapımız bulut tabanlıdır ve talebe göre anlık kapasite artışı yapabilir. Tek bir bot'tan binlerce bot'a saniyeler içinde geçiş yapabilirsiniz.",
        icon: <Rocket className="text-blue-400" />
    }
];

const stats = [
    { label: "Verimlilik Artışı", value: "%85+" },
    { label: "Hata Payı Düşüşü", value: "%99" },
    { label: "Maliyet Tasarrufu", value: "%40" }
];

const AutomationDetails = () => {
    const [expandedFeature, setExpandedFeature] = useState(null);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { step: "01", title: "Veri Toplama", icon: <Database />, detail: "Tüm kaynaklardan verileri ham olarak çeker ve temizler." },
        { step: "02", title: "Global Analiz", icon: <Globe />, detail: "Dünya genelindeki trendlerle kıyaslayarak stratejik içgörü üretir." },
        { step: "03", title: "Hızlı Eylem", icon: <Zap />, detail: "Analiz sonuçlarını anında uygulamaya koyarak sonuç alır." }
    ];

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto space-y-32">
            {/* Automation Logic Section */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Akıllı İş Akışları</h3>
                        <h2 className="text-5xl font-bold leading-tight">Otomasyonun <br /> <span className="text-gradient">Yeni Standartları</span></h2>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Yapay zeka sadece kararları değil, uygulama süreçlerini de devralıyor.
                        Karmaşık iş akışlarınızı otonom moleküllere ayırarak, her bir görevi
                        milisaniyeler içinde tamamlıyoruz.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-3xl font-black text-white">{stat.value}</div>
                                <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        {homeFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                layout
                                onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                                className={`p-8 bg-white/5 rounded-[32px] border border-white/5 hover:bg-white/10 transition-colors cursor-pointer ${i === 2 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                                        {f.icon}
                                    </div>
                                    <button className="p-2 rounded-full bg-white/5">
                                        {expandedFeature === i ? <Minus size={16} /> : <Plus size={16} />}
                                    </button>
                                </div>
                                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed mb-2">{f.desc}</p>

                                <AnimatePresence>
                                    {expandedFeature === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white/70 text-sm pt-4 border-t border-white/10 mt-4 leading-relaxed italic">
                                                {f.details}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Narrative Section */}
            <div className="text-center space-y-16">
                <div className="max-w-2xl mx-auto space-y-4">
                    <h2 className="text-4xl font-bold">Nasıl Çalışıyoruz?</h2>
                    <p className="text-white/50 leading-relaxed">Veriyi bilgiye, bilgiyi eyleme dönüştüren teknolojik ekosistemimizle işinizi geleceğe taşıyoruz.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2 hidden md:block" />

                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`relative z-10 space-y-6 cursor-pointer group transition-all ${activeStep === idx ? 'scale-110' : 'opacity-50 hover:opacity-80'}`}
                        >
                            <div className={`w-20 h-20 bg-dark border rounded-full flex items-center justify-center mx-auto transition-all shadow-[0_0_30px_rgba(59,130,246,0.1)] ${activeStep === idx ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-white/10 group-hover:border-blue-500/50'}`}>
                                <span className={`transition-transform ${activeStep === idx ? 'text-blue-400 scale-125' : 'text-blue-500/50 group-hover:text-blue-500'}`}>{step.icon}</span>
                            </div>
                            <div className="space-y-2">
                                <div className={`font-black text-4xl transition-colors ${activeStep === idx ? 'text-blue-500' : 'text-white/10'}`}>{step.step}</div>
                                <h4 className={`text-xl font-bold transition-colors ${activeStep === idx ? 'text-white' : 'text-white/40'}`}>{step.title}</h4>
                                <AnimatePresence>
                                    {activeStep === idx && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-white/40 text-xs max-w-[200px] mx-auto"
                                        >
                                            {step.detail}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutomationDetails;
