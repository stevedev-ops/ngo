import React from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark dark:text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/20">
                                <span className="material-symbols-outlined text-sm">local_library</span>
                                Education Fund
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                Empower Her Future.<br /><span className="text-primary">Change the World.</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                                Millions of girls in rural areas are denied their right to education. Your contribution funds scholarships, books, and safe learning environments for girls who need it most.
                            </p>
                        </div>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group">
                            <img alt="Girls studying in a classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Girls reading books in a rural school setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeNpgQ1Z-gZk5SLrWR-scqmjnywuWx-1KRnrSG-RIgARm8zqgSfGY1A9KWvuq7T1_Q-7BuVdcUqz_-OSmaPS8WQT4l3GAz0wyHqlpi_tejkH1uQCzNm59MF2ecybxjoIWyMTSchwkdYu9P3WQ3bnk88dTL1lcfAMdXhHzIsqc1tHJatVvauur28mZ8TcNh-OdnK6k-cfTkXmUo4iuldRV6_cZBYlF83XAnvzj0082bixaRBHr2bDptJtCMtEMEni3wbcMpFErDS1E" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                                <p className="text-white font-medium text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary">location_on</span>
                                    <span data-location="Uttar Pradesh, India">Uttar Pradesh, India</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                                <div className="text-primary mb-2">
                                    <span className="material-symbols-outlined text-4xl">auto_stories</span>
                                </div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white">5k+</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Books Distributed</div>
                            </div>
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-secondary/30 transition-colors">
                                <div className="text-secondary mb-2">
                                    <span className="material-symbols-outlined text-4xl">school</span>
                                </div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white">120</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Classrooms Built</div>
                            </div>
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm col-span-2 md:col-span-1 hover:border-primary/30 transition-colors">
                                <div className="text-primary mb-2">
                                    <span className="material-symbols-outlined text-4xl">face_4</span>
                                </div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white">2.5k</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Girls Enrolled</div>
                            </div>
                        </div>
                        <div className="bg-primary/5 dark:bg-surface-dark border-l-4 border-primary p-6 rounded-r-xl">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                                <div>
                                    <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-4">
                                        "Because of the scholarship, I can finally attend secondary school. I want to become a doctor and help my village."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-secondary/20">
                                            <img className="w-full h-full object-cover" data-alt="Portrait of Ananya, a student beneficiary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWqvTnD_mrAEH03PPTWfWK01IWkobFixIW0dCqrqfy_nAMOqnYWiU1iQq7kGaoiak3DBtN56LHGdLmap_JdNnOgKBGxEMW8xBDyq4vrHWYksNOIIw6hp3j-RDzUroYGNSLeORaMOGaF2RtbxI-qgq8RIdg9a6W2vPgG16XkPWqr3Vy3ju9Tu81290unRHJ88o5c8nJWi1GSZoX88P1dovtHGxJQAQqB2phNLUUJETgM1l_Y_hSygtKdCGNk2T76foq2J4ua30e4_4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Ananya R.</p>
                                            <p className="text-xs text-secondary-dark dark:text-secondary font-medium">Grade 10 Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24">
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl shadow-green-900/10 dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden">
                                <div className="flex border-b border-slate-200 dark:border-slate-700">
                                    <button className="flex-1 py-4 text-center font-bold text-sm tracking-wide border-b-2 border-primary text-primary dark:text-white bg-primary/5 dark:bg-slate-800/50">
                                        Give Once
                                    </button>
                                    <button className="flex-1 py-4 text-center font-bold text-sm tracking-wide border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-secondary hover:border-secondary hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                                        Monthly <span className="text-xs font-normal text-secondary-dark bg-secondary/10 px-1.5 py-0.5 rounded-full ml-1">Impact x12</span>
                                    </button>
                                </div>
                                <div className="p-6 md:p-8 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select Amount</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            <label className="cursor-pointer">
                                                <input className="peer sr-only" name="amount" type="radio" value="25" />
                                                <div className="h-12 flex items-center justify-center rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-transparent text-slate-600 dark:text-slate-300 font-bold peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:border-primary/50">
                                                    $25
                                                </div>
                                            </label>
                                            <label className="cursor-pointer">
                                                <input defaultChecked className="peer sr-only" name="amount" type="radio" value="50" />
                                                <div className="h-12 flex items-center justify-center rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-transparent text-slate-600 dark:text-slate-300 font-bold peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:border-primary/50">
                                                    $50
                                                </div>
                                            </label>
                                            <label className="cursor-pointer">
                                                <input className="peer sr-only" name="amount" type="radio" value="100" />
                                                <div className="h-12 flex items-center justify-center rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-transparent text-slate-600 dark:text-slate-300 font-bold peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all hover:border-primary/50">
                                                    $100
                                                </div>
                                            </label>
                                        </div>
                                        <div className="mt-3 relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                            <input className="w-full pl-7 pr-4 py-2.5 rounded-lg border-slate-200 dark:border-slate-600 bg-transparent focus:border-primary focus:ring-1 focus:ring-primary dark:text-white placeholder:text-slate-400 text-sm font-medium transition-colors" placeholder="Other Amount" type="number" />
                                        </div>
                                    </div>
                                    <div className="bg-secondary/10 rounded-lg p-4 flex gap-3 items-start animate-fade-in border border-secondary/20">
                                        <span className="material-symbols-outlined text-secondary mt-0.5">verified</span>
                                        <p className="text-sm text-slate-700 dark:text-slate-200 leading-normal">
                                            <span className="font-bold text-secondary-dark dark:text-secondary">$50</span> provides textbooks and stationery for 5 girls for a whole semester.
                                        </p>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">First Name</label>
                                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white" type="text" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Last Name</label>
                                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white" type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Email Address</label>
                                            <input className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white" type="email" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Card Details</label>
                                            <div className="relative">
                                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 pl-10 pr-3 py-2 text-sm focus:border-primary focus:ring-primary dark:text-white font-mono" placeholder="0000 0000 0000 0000" type="text" />
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">credit_card</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                                        Donate $50
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <div className="flex flex-col items-center gap-3 pt-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                                            Secure 256-bit SSL Encrypted payment
                                        </div>
                                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                                            <svg className="h-6 w-auto" fill="currentColor" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#1A1F71"></path>
                                                <path d="M35 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H35C36.1 23 37 22.1 37 21V3C37 1.9 36.1 1 35 1Z" fill="#1A1F71"></path>
                                                <path d="M12.5 14H16.8" stroke="white" strokeWidth="2"></path>
                                                <path d="M21 14H25.3" stroke="white" strokeWidth="2"></path>
                                                <path d="M5 8H33" stroke="white" strokeWidth="2"></path>
                                            </svg>
                                            <svg className="h-6 w-auto" fill="currentColor" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#EB001B"></path>
                                                <path d="M19 19.5C23.1 19.5 26.5 16.1 26.5 12C26.5 7.9 23.1 4.5 19 4.5C14.9 4.5 11.5 7.9 11.5 12C11.5 16.1 14.9 19.5 19 19.5Z" fill="#FF5F00"></path>
                                                <path d="M23.5 12C23.5 15.5 21.1 18.4 18 19.3C18.7 19.4 19.3 19.5 20 19.5C24.1 19.5 27.5 16.1 27.5 12C27.5 7.9 24.1 4.5 20 4.5C19.3 4.5 18.7 4.6 18 4.7C21.1 5.6 23.5 8.5 23.5 12Z" fill="#EB001B"></path>
                                                <path d="M10.5 12C10.5 7.9 13.9 4.5 18 4.5C16.8 4.5 15.7 4.8 14.7 5.3C12.8 6.3 11.5 8.3 11.5 10.6C11.5 10.9 11.5 11.1 11.6 11.4C11.6 11.6 11.7 11.8 11.7 12C11.7 12.2 11.6 12.4 11.6 12.6C11.5 12.9 11.5 13.1 11.5 13.4C11.5 15.7 12.8 17.7 14.7 18.7C15.7 19.2 16.8 19.5 18 19.5C13.9 19.5 10.5 16.1 10.5 12Z" fill="#F79E1B"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800 p-4 border-t border-slate-200 dark:border-slate-700">
                                    <Link className="flex items-center justify-between group" to="/shop">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-primary ring-1 ring-slate-100 dark:ring-slate-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <span className="material-symbols-outlined">shopping_bag</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Buy Handmade Crafts</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Proceeds support girl's education.</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
