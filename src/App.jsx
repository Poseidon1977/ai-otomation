import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AboutAI from './components/AboutAI';
import AutomationDetails from './components/AutomationDetails';
import UseCases from './components/UseCases';
import BusinessSectors from './components/BusinessSectors';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
            case 'about':
                return (
                    <>
                        <Hero />
                        <AboutAI />
                        <AutomationDetails />
                    </>
                );
            case 'use-cases':
                return <UseCases />;
            case 'sectors':
                return <BusinessSectors />;
            case 'projects':
                return <Projects />;
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
        <div className="flex flex-col xl:flex-row bg-dark text-white min-h-screen selection:bg-accent-cyan/30 overflow-hidden">
            {/* Navigation Component (Sidebar on Desktop, Bottom Bar on App/Mobile) */}
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* Main Content Area */}
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
