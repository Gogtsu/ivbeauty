import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <img src="/logo.png" alt="iV Aesthetic" className="h-12 mb-6 object-contain mx-auto md:mx-0 filter brightness-0 invert" />
                    <p className="text-gray-400 font-light mb-6">
                        Refined beauty for the modern woman.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-white hover:text-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-white hover:text-gold transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6 tracking-widest">CONTACT</h4>
                    <div className="space-y-4 text-gray-400 font-light text-sm">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <MapPin size={16} />
                            <span>ParkLake Mall, București</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <Phone size={16} />
                            <span>+40 700 000 000</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <Mail size={16} />
                            <span>contact@ivbeauty.ro</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6 tracking-widest">ORE DE DESCHIDERE</h4>
                    <div className="space-y-2 text-gray-400 font-light text-sm">
                        <p>Luni - Vineri: 10:00 - 22:00</p>
                        <p>Sâmbătă: 10:00 - 20:00</p>
                        <p>Duminică: 10:00 - 18:00</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-xs">
                &copy; {new Date().getFullYear()} iV Aesthetic Beauty Salon. Toate drepturile rezervate.
            </div>
        </footer>
    );
};

export default Footer;
