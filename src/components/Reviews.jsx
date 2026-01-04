import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: 'Andreea M.',
        text: 'O experiență absolut minunată! Atmosfera este relaxantă, iar rezultatele procedurilor laser sunt vizibile chiar după primele ședințe.',
    },
    {
        name: 'Elena D.',
        text: 'Profesionalism și eleganță. M-am simțit răsfățată din momentul în care am intrat. Recomand cu drag tratamentele faciale.',
    },
    {
        name: 'Ioana S.',
        text: 'Locația din ParkLake este superbă. Personalul este extrem de amabil și bine pregătit. Cu siguranță voi reveni!',
    },
];

const Reviews = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-serif text-gray-900 mb-16">Ce spun clienții noștri</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-soft-white p-8 rounded-none shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex space-x-1 text-gold mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 font-light">"{review.text}"</p>
                            <p className="font-serif font-bold text-gray-900">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
