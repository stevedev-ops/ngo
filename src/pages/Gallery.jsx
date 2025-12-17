import React, { useState, useEffect } from 'react';
import { fetchGallery } from '../api';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGallery().then(data => {
            setImages(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="w-full">
            <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Gallery of Impact</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        See the smiles, the hard work, and the real change happening on the ground. A picture is worth a thousand words, and each of these tells a story of hope.
                    </p>
                </div>
            </section>

            <section className="px-4 md:px-10 pb-20">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {images.map((img, index) => (
                            <div key={img.id || index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group relative">
                                <img src={img.url} alt={img.caption || `Gallery image ${index + 1}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="py-20 px-4 md:px-10 bg-slate-900 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-6xl text-primary mb-6">format_quote</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                        "The most beautiful thing in the world is to see a person smiling. And knowing you are the reason behind that smile."
                    </h2>
                    <p className="text-xl text-slate-400 font-medium">- Anonymous Volunteer</p>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
