import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Smartphone, User, Scissors } from 'lucide-react';

const services = [
    {
        icon: <Zap size={32} />,
        title: 'Epilare Definitivă Laser',
        description: 'Tehnologie de ultimă generație pentru o piele fină, fără compromisuri.',
    },
    {
        icon: <Sparkles size={32} />,
        title: 'Tratamente Faciale',
        description: 'Soluții personalizate pentru luminozitate, hidratare și reîntinerire.',
    },
    {
        icon: <User size={32} />,
        title: 'Remodelare Corporală',
        description: 'Sculptează-ți silueta cu proceduri non-invazive și eficiente.',
    },
    {
        icon: <Smartphone size={32} />, // Using generic icon for hands/feet if specific one unavailable
        title: 'Manichiură & Pedichiură',
        description: 'Unghii impecabile și un moment de relaxare binemeritat.',
    },
    {
        icon: <Scissors size={32} />,
        title: 'Coafor & Styling',
        description: 'Look-uri moderne adaptate stilului și personalității tale.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-soft-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-gray-900 mb-4">Serviciile Noastre</h2>
                    <div className="w-24 h-1 bg-gold mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center"
                        >
                            <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
