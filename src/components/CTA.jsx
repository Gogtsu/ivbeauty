import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/10 z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">E timpul să investești în tine.</h2>
                <p className="text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                    Descoperă cele mai avansate tratamente de înfrumusețare într-un cadru exclusivist.
                </p>
                <button className="bg-gold text-white px-10 py-4 hover:bg-gold-dark transition-all duration-300 text-lg font-medium tracking-wide shadow-lg hover:shadow-gold/50">
                    REZERVĂ O PROGRAMARE
                </button>
            </div>
        </section>
    );
};

export default CTA;
