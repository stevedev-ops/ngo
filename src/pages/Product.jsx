import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Link to="/shop" className="hover:text-primary hover:underline">Shop</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <Link to="/shop" className="hover:text-primary hover:underline">Handmade Crafts</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">Handwoven Sisal Basket</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                <div className="flex flex-col gap-4">
                    <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 relative group">
                        <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            Fair Trade
                        </div>
                        <img alt="Handwoven Sisal Basket" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of handwoven basket with intricate patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp8gmLa04K7UznCndoqeK3dK0J56_HKGrtYLaMD8Re7Auefol4sn-1evzQ5GWog6xRj4FVkD5VY5wDuQqRH2ENqiArfzyDLMQgQJkOHI2Wt_nk86LzhzPvA-ozCgqJYTTuMqq_zsovksLD20TarB7Qvc3Ij20yVswQ3-aiQ1eJYF_BdHuDog2u9q87sD8Tp6mXtHymn90sb2bQmpQKhROQd-KLBBfsElLxAk6n0uEQocAf-meztgDIq65LXgdz2TDSo54RPk32f1U" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <button className="aspect-square overflow-hidden rounded-lg border-2 border-primary p-0.5 ring-offset-2 ring-offset-white dark:ring-offset-background-dark">
                            <img alt="View 1" className="h-full w-full rounded-md object-cover" data-alt="Main view of natural sisal basket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY3T2kVH6m-QMOesXUrbOISgenYku6fG2cBICKgs3_j-jhn4YYItZ8As2nnH8nm6tMVii5TfOFxzQ9N1vAORnLVVk5SPimSco1CCFZbYpgxLQ4NcoL0a1Ri7F3kQ4FCNRdZI7H206PKGFXY42JCybCtU7w0cRedB-QVVsVlgIKvVhN5ew9IIQxh_9-obWB0JNnIi0E7RGKg_K9Rw1T-mbzD-SYCcZCPknRvs42_EXYREHzqz-YvR8Na4BrkQKwgnDeYrXDoc7Xpeg" />
                        </button>
                        <button className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                            <img alt="View 2" className="h-full w-full rounded-md object-cover" data-alt="Basket sitting on a wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzExPPVpAnTST0XeGkK2DarmStotqJKN5dgg5g5JMmSWycbqzJDf7pwHcLd8hZpL2WCMpSJDu-OEL1wp9USvAhIJp64zbqlzhs0gUuHnv9qGm0NaMeE9sZA9x68r5AdGBMJjgN-ZiLfB-twjVq8XHGNQxCFqwjiA5VY2bL5i46iCCH4EfWzHlvIo4OfsSKI-1_3GoljFOZr1do_WhIeDxLPPxs9cgSIWmrf4IEXadUZZxCZ34K1cX3-K5hAhVIWmIhnLtW8OsOKc" />
                        </button>
                        <button className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                            <img alt="View 3" className="h-full w-full rounded-md object-cover" data-alt="Detail shot of weaving texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZo8D2lgipfBEQzmP9dvXEyAlpFVboJ-Cks2KSAXsx8oUXMKaFygBNgxwRqqO4lSuNq39RuTE0Eeq3v_KMIo3AXbZ8_YlF4NUSX5SbpBm-Njov-jyR22cfLTdBZaF0Qyp1qdFswq1hHXi0l0eDzrnmLYVQOJymfq30I_WOgAzVi7xLEuuFrEewZ80nGcAl-hyLSG1j_BtL2J1Htvsbb8mH42QzwrTRmbPsONyVY63K4NRR0Ocud9VYQHZ20nAFTYFN7G-28_JMxyw" />
                        </button>
                        <button className="aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                            <span className="material-symbols-outlined text-3xl text-slate-400">play_circle</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Artisan Collection</span>
                            <div className="flex items-center gap-1 text-amber-400 text-sm">
                                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[18px] fill-current">star_half</span>
                                <span className="ml-1 text-slate-500 dark:text-slate-400">(48 reviews)</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                            Handwoven Sisal Basket - Natural
                        </h1>
                        <div className="flex items-end gap-3">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">$45.00</span>
                            <span className="mb-1 text-lg text-slate-400 line-through">$55.00</span>
                        </div>
                    </div>
                    <div className="mb-8 rounded-xl bg-secondary/10 border border-secondary/20 p-4 flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                            <span className="material-symbols-outlined">volunteer_activism</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Impact Purchase</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300">100% of profits from this item go directly to the <span className="font-semibold text-secondary">Kenyan Women's Weaver Cooperative</span>, funding education and healthcare.</p>
                        </div>
                    </div>
                    <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        Crafted with care and tradition, this versatile basket brings natural warmth to any room. Use it for storage, as a planter cover, or simply as a piece of art. Each purchase empowers the artisan who created it.
                    </p>
                    <div className="mb-8 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Color: Natural</label>
                            <div className="flex gap-3">
                                <button className="h-10 w-10 rounded-full border-2 border-primary bg-[#e8e4d9] ring-2 ring-white dark:ring-background-dark ring-offset-2 shadow-sm"></button>
                                <button className="h-10 w-10 rounded-full border-2 border-transparent hover:border-slate-300 bg-[#3d342b] ring-offset-2 shadow-sm"></button>
                                <button className="h-10 w-10 rounded-full border-2 border-transparent hover:border-slate-300 bg-[#8c3a3a] ring-offset-2 shadow-sm"></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10 border-b border-slate-200 dark:border-slate-700 pb-10">
                        <div className="flex h-12 w-32 items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-surface-light dark:bg-surface-dark bg-white dark:bg-gray-800">
                            <button className="flex h-full w-10 items-center justify-center text-slate-600 hover:text-primary dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <input className="h-full w-full border-none bg-transparent text-center font-medium text-slate-900 dark:text-white focus:ring-0" type="number" defaultValue="1" />
                            <button className="flex h-full w-10 items-center justify-center text-slate-600 hover:text-primary dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>
                        <Link to="/checkout" className="flex-1 h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            Add to Cart
                        </Link>
                        <button className="h-12 w-12 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 text-slate-400 hover:text-red-500 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors bg-white dark:bg-gray-800">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <details className="group rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 open:ring-1 open:ring-primary/20 bg-white dark:bg-gray-800">
                            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900 dark:text-white group-open:text-primary transition-colors">
                                <span>Product Details & Dimensions</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="border-t border-slate-100 dark:border-slate-700 p-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Material: 100% natural sisal fiber</li>
                                    <li>Dimensions: 12" H x 14" W (approx)</li>
                                    <li>Dye: Organic vegetable dyes</li>
                                    <li>Origin: Handmade in Machakos, Kenya</li>
                                </ul>
                            </div>
                        </details>
                        <details className="group rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800">
                            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">
                                <span>The Artisan Story</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="border-t border-slate-100 dark:border-slate-700 p-4">
                                <div className="flex gap-4 items-start">
                                    <img alt="Artisan" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" data-alt="Portrait of smiling artisan woman weaving" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZbM9c7e-F0wNGB_r3sW1ukvj9xx0DHLEt599wE-ShuZw8ZoS_I0CI4MrRvZy4rkj7DEGZ3LDXK5--IrHo1dC3c8mDYA3505mtQKcX3EZq4_SJ9JWDu64cs2Ms88z4g4NQynynDnXb0DjtAFBlFwO5IqVw-H-pMraTRbkTEAnOl-LSrKZP-2B7ovVXyKJj0v3RJk-it6jHD_4abIkogQdr77bTPhKdiUneZ3c_1iFRE9DBPlQl2DEsQX0q4d7WCuD5jgLIC4o3KY" />
                                    <div>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                            "Weaving has allowed me to send my two daughters to secondary school. Every basket carries a piece of my hope for their future."
                                        </p>
                                        <p className="text-xs font-bold text-slate-900 dark:text-white">– Sarah, Lead Weaver</p>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="group rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800">
                            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">
                                <span>Shipping & Returns</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="border-t border-slate-100 dark:border-slate-700 p-4 text-sm text-slate-600 dark:text-slate-300">
                                <p>Free carbon-neutral shipping on orders over $75. Returns accepted within 30 days. Because this is a handmade item, slight variations in size and color are expected and celebrated.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <section className="mt-24">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Complete the Look & Support More</h2>
                        <p className="text-slate-500 dark:text-slate-400">Other handmade items that empower communities.</p>
                    </div>
                    <Link className="text-primary font-medium hover:text-primary-dark flex items-center gap-1 group" to="/shop">
                        View all products
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Related products */}
                    <Link className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800" to="/shop">
                        <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                            <img alt="Jewelry" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Elegant gold necklace on bust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoUHBqrhGWAbJsD9e1pqtew15yRYV22Pd1oCUG6mC4BKU35u-SfPxPgvbzoIPMl02M0XQ04fJJyzsbd2L5i46iCCH4EfWzHlvIo4OfsSKI-1_3GoljFOZr1do_WhIeDxLPPxs9cgSIWmrf4IEXadUZZxCZ34K1cX3-K5hAhVIWmIhnLtW8OsOKc" />
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-1.5 rounded-full text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-[20px] block">favorite</span>
                            </div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Brass Pendant Necklace</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Made by artisans in India</p>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-bold text-slate-900 dark:text-white">$32.00</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">Fair Trade</span>
                            </div>
                        </div>
                    </Link>
                    {/* Add more related products as needed */}
                </div>
            </section>
        </div>
    );
};

export default Product;
