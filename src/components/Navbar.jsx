import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Servicii', href: '#services' },
        { name: 'Despre Noi', href: '#vibes' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="iV Aesthetic Beauty Salon"
                        className="h-16 w-auto object-contain"
                    />
                    <span
                        className="font-serif text-3xl text-gray-900 tracking-wide"
                        style={{ filter: 'drop-shadow(0 0 1px #fff) drop-shadow(0 0 8px #00ffff)' }}
                    >
                        aesthetic
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm tracking-widest font-medium hover:text-gold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-gray-800' // Keeping dark due to light bg usually, or adjust based on hero
                                }`}
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                    <button className="bg-gold text-white px-6 py-2 rounded-none hover:bg-gold-dark transition-all duration-300 text-sm font-medium tracking-wide">
                        PROGRAMEAZĂ-TE
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-800 text-lg font-medium hover:text-gold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-gold text-white px-8 py-3 mt-4">
                                PROGRAMEAZĂ-TE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
