import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Atmosphere from './components/Atmosphere';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    // Smooth scrolling for anchor links
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="font-sans antialiased bg-soft-white text-gray-800 selection:bg-gold selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Atmosphere />
            <Reviews />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
