import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className="w-full">
            <section className="relative">
                <div className="w-full flex flex-col gap-6 bg-cover bg-center bg-no-repeat min-h-[360px] items-center justify-center p-8"
                    style={{ backgroundImage: 'linear-gradient(rgba(20, 83, 45, 0.7) 0%, rgba(20, 83, 45, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8V2Y0FPs9AQ-wkvMriEOsh6jc1DXkcceSvB6Wz6g69DuoqeYJw7xON0WZHUeb6oNHo2eEdoYAVqDMx3iiPTQlL1bmoy9F5YVRZT0EFKcJsPo-tUcOh9B4Fp-oN1SBBOPJg_29FKD-ugLND0FouT-wDlv8zZP6ijpQod34V5qn23wcEFap1b_mXCPxQvwBx9bog4wCxMl1ve70i9aJCQFEOnZJeACnolaHTrxzbpalfOd8bcZBtqj7eVDz0GzaKWJ-HNd_15WdCA0")' }}>
                    <div className="flex flex-col gap-3 text-center max-w-[700px] animate-fade-in-up">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                            Shop with Purpose
                        </h1>
                        <h2 className="text-gray-100 text-base md:text-lg font-normal leading-relaxed drop-shadow-sm max-w-[500px] mx-auto">
                            Every purchase supports our mission. 100% of proceeds go directly to the field.
                        </h2>
                    </div>
                </div>
            </section>
            <div className="flex-grow layout-container w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-4 text-gray-900 dark:text-white">
                                Categories</h2>
                            <ul className="space-y-3">
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">All Products</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Handmade Crafts</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Sustainable Apparel</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Education Kits</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Virtual Gifts</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-4 text-gray-900 dark:text-white">
                                Price Range</h2>
                            <div className="flex items-center gap-4">
                                <input className="w-full rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 py-2 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none dark:bg-gray-800 dark:text-white" placeholder="Min" type="number" />
                                <span className="text-text-muted-light dark:text-gray-400">-</span>
                                <input className="w-full rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 py-2 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none dark:bg-gray-800 dark:text-white" placeholder="Max" type="number" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-4 text-gray-900 dark:text-white">
                                Impact Goal</h2>
                            <ul className="space-y-3">
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Supports Education</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Eco-Friendly</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-background-dark dark:border-gray-600" type="checkbox" />
                                        <span className="text-sm font-medium group-hover:text-primary transition-colors text-gray-700 dark:text-gray-300">Women Empowerment</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main className="flex-1 flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                            <label className="flex w-full md:max-w-md items-center gap-2 rounded-lg bg-background-light dark:bg-background-dark px-3 py-2 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all bg-gray-50 dark:bg-gray-900">
                                <span className="material-symbols-outlined text-text-muted-light dark:text-gray-400">search</span>
                                <input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-text-muted-light dark:placeholder:text-gray-500 text-text-main-light dark:text-white" placeholder="Search for crafts, apparel, and more..." />
                            </label>
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <span className="text-sm font-medium whitespace-nowrap text-text-muted-light dark:text-gray-400 hidden md:block">Sort by:</span>
                                <div className="relative w-full md:w-48">
                                    <select className="w-full appearance-none rounded-lg bg-background-light dark:bg-background-dark border-none py-2 pl-3 pr-10 text-sm font-medium focus:ring-1 focus:ring-primary cursor-pointer text-text-main-light dark:text-white bg-gray-50 dark:bg-gray-900">
                                        <option>Relevance</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrivals</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted-light text-lg">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link to="/product" className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800">
                                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.8] group-hover:saturate-100" data-alt="Handwoven basket with intricate colorful patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcGOfwzn2lLP0O9xpdkKhevvV2An0zVzIRbgX6LKTTOeK0uG8wRpHM1BB-67hO4FKMol1T1xc8U8kOqiHubqQgf_2AB3IFl0qXw_QhZExBC2ANi-621sEA397h59bmwj9UuRvbQQYcZzCB7HwL5nUVmP-_AbdMVxe0LeWMdABazFl6vCUsukazKJC3EpWEKS47BCB6_RvI2ptJPOMzNy1ljfO_m9DFF2fqrWZK2pQ5X5YzvC_hIsYatsMWgNJvuK6yagorNsVhkKk" alt="Artisan Woven Basket" />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-text-main-light dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px] text-primary">volunteer_activism</span>
                                            Fair Trade
                                        </span>
                                    </div>
                                    <button className="absolute bottom-4 right-4 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col gap-2 flex-grow">
                                    <h3 className="text-base font-bold text-text-main-light dark:text-white line-clamp-1">Artisan Woven Basket</h3>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-1 text-gray-500">Provides income for 3 artisans</p>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <span className="text-lg font-bold text-secondary">$45.00</span>
                                        <div className="flex gap-1 text-yellow-400">
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current text-gray-300">star</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Other products (static for now) */}
                            <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800">
                                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.8] group-hover:saturate-100" data-alt="Canvas tote bag with minimalist leaf print" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPS-rXHURKypGuV60zLR1IW1715_lVDf9ZaJC-y5JBy8kTXkWv_0WNW4_QY03-DTbwj8QZqMoGvDNEhVlXMHh2Fl1u0soYKa2-Ilo_RCk1vgaTcW9hNEabaF3FOaD0X7r8pt5uOy3o3CLG4sCJMzPT2ncYsVhnhqOHZ-XN7VrFackHO0ODaP9DOZ1Uuv9Q3qOEdkQrajpNGo7DH78J2FkHrs0ydGyWNRjC0aB8eCqczEBN56wif0HawNawePq_SHoCpS3Cricf188" alt="Organic Tote Bag" />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-text-main-light dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px] text-primary">eco</span>
                                            Eco-Friendly
                                        </span>
                                    </div>
                                    <button className="absolute bottom-4 right-4 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col gap-2 flex-grow">
                                    <h3 className="text-base font-bold text-text-main-light dark:text-white line-clamp-1">Organic Cotton Totebag</h3>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-1 text-gray-500">Saves 500g of plastic waste</p>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <span className="text-lg font-bold text-secondary">$25.00</span>
                                        <div className="flex gap-1 text-yellow-400">
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ... more products from legacy HTML could be added here ... */}
                        </div>
                        <div className="flex justify-center pt-8">
                            <nav className="flex gap-2">
                                <button className="h-10 w-10 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark text-text-muted-light dark:text-gray-400 transition-colors bg-white dark:bg-gray-800">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold">1</button>
                                <button className="h-10 w-10 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark text-text-main-light dark:text-white transition-colors bg-white dark:bg-gray-800">2</button>
                                <button className="h-10 w-10 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark text-text-main-light dark:text-white transition-colors bg-white dark:bg-gray-800">3</button>
                                <button className="h-10 w-10 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark hover:bg-background-light dark:hover:bg-background-dark text-text-muted-light dark:text-gray-400 transition-colors bg-white dark:bg-gray-800">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;
