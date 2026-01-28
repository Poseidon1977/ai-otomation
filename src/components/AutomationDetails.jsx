import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Rocket, Database, Globe, Zap } from 'lucide-react';

const homeFeatures = [
    {
        title: "7/24 Otonom Çalışma",
        desc: "İnsan müdahalesine gerek duymadan süreçlerinizi kesintisiz yönetir.",
        icon: <Activity className="text-blue-400" />
    },
    {
        title: "Veri Güvenliği",
        desc: "En üst düzey şifreleme ile verilerinizi korur ve işler.",
        icon: <Shield className="text-blue-400" />
    },
    {
        title: "Sonsuz Ölçeklenebilirlik",
        desc: "İşiniz büyüdükçe otomasyon kapasiteniz de aynı hızla artar.",
        icon: <Rocket className="text-blue-400" />
    }
];

const stats = [
    { label: "Verimlilik Artışı", value: "%85+" },
    { label: "Hata Payı Düşüşü", value: "%99" },
    { label: "Maliyet Tasarrufu", value: "%40" }
];

const AutomationDetails = () => {
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
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        {homeFeatures.map((f, i) => (
                            <div key={i} className={`p-8 bg-white/5 rounded-[32px] border border-white/5 hover:bg-white/10 transition-colors ${i === 2 ? 'col-span-2' : ''}`}>
                                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                                    {f.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                            </div>
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

                    {[
                        { step: "01", title: "Veri Toplama", icon: <Database /> },
                        { step: "02", title: "Global Analiz", icon: <Globe /> },
                        { step: "03", title: "Hızlı Eylem", icon: <Zap /> }
                    ].map((step, idx) => (
                        <div key={idx} className="relative z-10 space-y-6">
                            <div className="w-20 h-20 bg-dark border border-white/10 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(59,130,246,0.1)] group hover:border-blue-500 transition-colors">
                                <span className="text-blue-500 group-hover:scale-110 transition-transform">{step.icon}</span>
                            </div>
                            <div className="space-y-2">
                                <div className="text-white/20 font-black text-4xl">{step.step}</div>
                                <h4 className="text-xl font-bold">{step.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutomationDetails;
