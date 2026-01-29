import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AboutAI from './components/AboutAI';
import AutomationDetails from './components/AutomationDetails';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return (
                    <>
                        <Hero />
                        <AboutAI />
                        <AutomationDetails />
                    </>
                );
            case 'pricing':
                return <Pricing />;
            case 'service':
                return <Service />;
            case 'about':
                return <AboutAI />;
            case 'contact':
                return <Contact />;
            default:
                return (
                    <>
                        <Hero />
                        <AboutAI />
                        <AutomationDetails />
                    </>
                );
        }
    };

    return (
        <div className="flex flex-col xl:flex-row bg-dark text-white min-h-screen selection:bg-accent-cyan/30">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1 flex flex-col items-center xl:ml-64 pb-32 xl:pb-0">
                <div className="w-full">
                    {renderContent()}
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default App;
