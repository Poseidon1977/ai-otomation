import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-12 px-10 border-t border-white/10 text-center">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gradient" translate="no">AI AutomatioN</h2>
                <p className="text-sm text-white/40 max-w-md mx-auto">
                    İşinizi yapay zeka ile geleceğe hazırlıyoruz.
                    Türkiye'nin lider AI otomasyon çözüm merkezi.
                </p>
                <div className="pt-8 text-xs text-white/20">
                    © {new Date().getFullYear()} <span translate="no">AI AutomatioN</span>. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
