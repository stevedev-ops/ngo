import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const About = () => {
    const { journey, team, stories, settings } = useContent();

    // Filter stories for the About page (non-featured ones, or just use specific logic if needed)
    const aboutStories = stories.filter(s => !s.featured);

    // Settings Default
    const hero = settings.about_hero || {
        title: "Empowering Rural Girls Since 2010",
        subtitle: "We are dedicated to building a sustainable future through education, compassion, and direct action."
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[600px] px-4 py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(6, 78, 59, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwKFTiczEuQ-ehaNvzkO0qYa5Fpt042FUrH6F_iB98KnOqubm8OucgrrJmEhPEQPPkUq2qX_DewL78K7U8g906fSO7biU00UWZyl_qpjje3fnZRKeVC4ryrGdiy8P1pZ1HgqgPW9gSf_ysE_vFNDqrAjCE87dDxzw9ucsOeCTu86MeHbIEaeVHZmZKSwcDO7_6ZldApz_18UOYlWUTKEDY8WEYPdDKdMSIZG1wBFPfAusA6y-LY88IKYxfdXrZ7Z-w6sL7w2hKLTA")' }}>
                <div className="max-w-4xl w-full text-center flex flex-col gap-6 animate-fade-in-up">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                        {hero.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
                        {hero.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <Link to="/donate" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-lg text-base font-bold tracking-wide transition-all transform hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center">
                            Support Our Cause
                        </Link>
                        <Link to="/shop" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white h-12 px-8 rounded-lg text-base font-bold tracking-wide transition-all hover:bg-secondary/20 hover:border-secondary/40 flex items-center justify-center">
                            Shop to Support
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
                <div className="max-w-[960px] flex flex-col gap-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">Our Story</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
                        Founded with a simple mission to help those in need, we have grown from a small local group into a global movement. Our story is written by the thousands of volunteers and donors who believe in the power of collective action. We bridge the gap between resources and necessity, creating pathways for lasting change.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
                <div className="max-w-[1100px] mx-auto">
                    <div className="flex flex-col gap-4 mb-12 text-center md:text-left">
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold">Our Core Values</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-2xl">
                            Driven by a commitment to transparency and impact, these pillars guide every decision we make.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">Integrity</h3>
                                <p className="text-gray-500 dark:text-gray-400">We operate with full transparency in our financials and operations, earning trust through accountability.</p>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark hover:shadow-lg transition-all duration-300 hover:border-secondary/30">
                            <div className="size-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">favorite</span>
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">Compassion</h3>
                                <p className="text-gray-500 dark:text-gray-400">We care deeply for the individuals and communities we serve, putting human dignity first.</p>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">eco</span>
                            </div>
                            <div>
                                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">Sustainability</h3>
                                <p className="text-gray-500 dark:text-gray-400">We build long-term solutions that last for generations, focusing on environmental and social resilience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey */}
            <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Our Journey</h2>
                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-auto md:mr-auto md:w-full space-y-12">
                        {journey.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-0 md:flex md:justify-between md:items-center group">
                                <div className={`absolute -left-[9px] top-0 md:left-1/2 md:-translate-x-1/2 bg-background-light dark:bg-background-dark border-2 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} size-5 rounded-full z-10`}></div>

                                {index % 2 === 0 ? (
                                    <>
                                        <div className="md:w-[45%] md:text-right pr-8">
                                            <span className="text-primary font-bold text-xl block mb-1">{item.year}</span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                                        </div>
                                        <div className="hidden md:block md:w-[45%]"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="hidden md:block md:w-[45%]"></div>
                                        <div className="md:w-[45%] md:text-left pl-8">
                                            <span className="text-secondary font-bold text-xl block mb-1">{item.year}</span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-16 px-4 bg-primary dark:bg-green-900 text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black mb-2 tracking-tight">50K+</span>
                        <span className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest">Meals Served</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black mb-2 tracking-tight">12</span>
                        <span className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest">Schools Built</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black mb-2 tracking-tight">85%</span>
                        <span className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest">Donation Efficiency</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black mb-2 tracking-tight">10K</span>
                        <span className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest">Volunteers</span>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The passionate individuals working behind the scenes to make our mission a reality.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="group relative overflow-hidden rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800">
                                <div className="aspect-square w-full overflow-hidden bg-gray-200">
                                    <img alt={`Portrait of ${member.name}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={member.image} />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-sm text-primary font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Voices of Change */}
            <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Voices of Change</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {aboutStories.map((story) => (
                            <div key={story.id} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm relative border border-gray-100 dark:border-gray-700">
                                <span className="material-symbols-outlined absolute top-6 left-6 text-4xl text-primary/20">format_quote</span>
                                <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6 relative z-10 pt-4">
                                    "{story.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                                        <img src={story.image} alt={story.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{story.name}</p>
                                        <p className="text-xs text-gray-500">{story.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop for Good */}
            <section className="relative py-24 px-4 md:px-10 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0 bg-[#064e3b]">
                    <img alt="Customer holding a sustainable product bag in a bright shop environment" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvdGcxmyXzknxw_MCjBscVt9IIHhIqJfXUUqTLr98a5Aldzk_yyCH86E1_J1G3WrWCj1mU-PDid5CHR5_4p97xT_T6eL-MRGPjt-Y2IMmc2FSE9sDmjOxpFkAdzUjpnhGitTuhaVD47tvZo88qxoQnFUGMLK69uhfIsJ_QFVWAsfRwTC8Jy8pnDiDR3EzwxKj587Lc-cAsatIeeZ3SH1QKUe7fqwxQzDrJZmQfTTKf_lj2zPrDQVLROlxj7_A4F9cpxy4UBl2g9EY" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-6">Shop for Good</h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Every purchase from our store directly funds our mission. Find sustainable goods that look great and do good.
                    </p>
                    <Link to="/shop" className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 rounded-lg text-base font-bold transition-transform hover:scale-105 shadow-lg shadow-secondary/30 flex items-center justify-center inline-flex">
                        Visit the Store
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
