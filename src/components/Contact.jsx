import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset to idle after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="py-24 px-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h2 className="text-5xl font-bold tracking-tight">Bizimle <span className="text-gradient">İletişime Geçin</span></h2>
                    <p className="text-white/50 text-xl leading-relaxed">
                        AI AutomatioN çözümleri hakkında daha fazla bilgi almak veya işbirliği yapmak için formu doldurun.
                    </p>

                    <div className="space-y-6 pt-8">
                        <div className="flex items-center gap-4 text-white/70">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Mail className="text-accent-cyan" />
                            </div>
                            <span>poseidon.uo@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/70">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Phone className="text-accent-purple" />
                            </div>
                            <span>+90 555 123 45 67</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/70">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                                <MapPin className="text-accent-blue" />
                            </div>
                            <span>ODESSA / UKRAINE</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-12 rounded-[40px] backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-2">Ad Soyad</label>
                            <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors"
                                placeholder="Adınız"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-2">E-posta</label>
                            <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors"
                                placeholder="Email adresiniz"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-2">Mesaj</label>
                            <textarea
                                required
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors resize-none"
                                placeholder="Nasıl yardımcı olabiliriz?"
                            ></textarea>
                        </div>

                        <button
                            disabled={status !== 'idle'}
                            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                                ? 'bg-green-500'
                                : 'bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90 active:scale-[0.98]'
                                } disabled:opacity-70 disabled:cursor-not-allowed mt-4`}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.div key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        Gönder <Send size={20} />
                                    </motion.div>
                                )}
                                {status === 'sending' && (
                                    <motion.div key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        Gönderiliyor...
                                    </motion.div>
                                )}
                                {status === 'success' && (
                                    <motion.div key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        Mesajınız Alındı! <CheckCircle2 size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
