import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import interior from '../images/interior.png';

const Atmosphere = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={interior}
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 text-center text-white px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-serif italic leading-relaxed"
                >
                    "Un spațiu creat pentru echilibru, <br /> frumusețe și încredere."
                </motion.p>
            </div>
        </section>
    );
};

export default Atmosphere;
