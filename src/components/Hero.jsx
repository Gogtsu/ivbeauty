import React from 'react';
import { motion } from 'framer-motion';
import hero from '../images/hero.jpg';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-nude/10">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent z-10" />
                <img
                    src={hero}
                    alt="Luxury Beauty Model"
                    className="w-full h-full object-cover object-center opacity-90"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-left"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="block text-gold-dark tracking-[0.2em] font-medium mb-4 text-sm"
                    >
                        EXPERIENȚĂ PREMIUM
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                        Frumusețe <span className="italic text-gold">avansată</span>.<br />
                        Răsfăț complet.
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed">
                        Tratamente estetice, laser și beauty într-un singur loc, unde tehnologia întâlnește eleganța.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gold transition-colors duration-300 tracking-wider text-sm shadow-lg hover:shadow-xl">
                            PROGRAMEAZĂ-TE
                        </button>
                        <button className="border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300 tracking-wider text-sm">
                            VEZI SERVICIILE
                        </button>
                    </div>
                </motion.div>

                {/* Optional decorative element on the right if needed, or keeping it clean to show off the image */}
                <div className="hidden md:block"></div>
            </div>
        </section>
    );
};

export default Hero;
