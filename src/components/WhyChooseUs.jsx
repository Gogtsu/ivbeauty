import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
    'Tehnologie modernă',
    'Specialiști certificați',
    'Rezultate vizibile',
    'Locație premium',
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-champagne/20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-6">De ce iV Aesthetic?</h3>
                    <p className="text-gray-600 mb-8 font-light leading-relaxed">
                        Ne mândri cu o abordare holistică asupra frumuseții. Fiecare detaliu al experienței tale a fost gândit cu grijă pentru a oferi confort absolut și rezultate care depășesc așteptările.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 text-gray-800">
                                <CheckCircle2 className="text-gold" size={20} />
                                <span className="font-medium tracking-wide">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-8 shadow-lg border-l-4 border-gold italic text-gray-600 font-serif text-lg leading-loose">
                    "Fiecare vizită este gândită ca un moment de echilibru și încredere, într-un ambient elegant, luminos și relaxant."
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
