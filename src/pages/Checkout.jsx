import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30">
            <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col border-r border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark order-2 lg:order-1">
                <header className="px-6 py-6 lg:px-12 lg:pt-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white">
                        <div className="size-8 text-primary">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight text-primary-dark dark:text-primary">
                            Educate a Rural Girl</h2>
                    </Link>
                </header>
                <div className="px-6 lg:px-12 py-2">
                    <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
                        <Link className="text-primary hover:text-primary-dark transition-colors" to="/shop">Cart</Link>
                        <span className="text-slate-400 material-symbols-outlined text-sm">chevron_right</span>
                        <Link className="text-primary hover:text-primary-dark transition-colors" to="#">Information</Link>
                        <span className="text-slate-400 material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-bold">Shipping</span>
                        <span className="text-slate-400 material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-500 dark:text-slate-400">Payment</span>
                    </nav>
                </div>
                <div className="flex-1 px-6 lg:px-12 py-6 max-w-2xl mx-auto lg:mx-0 w-full">
                    <section className="mb-10">
                        <div className="flex justify-between items-baseline mb-4">
                            <h2 className="text-xl font-bold tracking-tight">Contact Information</h2>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                Already have an account? <Link className="text-primary hover:underline" to="#">Log in</Link>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <label className="block">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email address</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow placeholder:text-slate-400" placeholder="user@example.com" type="email" />
                            </label>
                            <div className="flex items-center gap-2">
                                <input className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary dark:bg-surface-dark dark:border-border-dark" id="newsletter" type="checkbox" />
                                <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="newsletter">Email me with news and offers</label>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-xl font-bold tracking-tight mb-4">Shipping Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="block">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">First name</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="text" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Last name</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="text" />
                            </label>
                            <label className="block md:col-span-2">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Address</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" placeholder="123 Ocean Drive" type="text" />
                            </label>
                            <label className="block md:col-span-2">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Apartment, suite, etc. (optional)</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="text" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">City</span>
                                <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="text" />
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Country</span>
                                    <select className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow">
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>UK</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Postal Code</span>
                                    <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" type="text" />
                                </label>
                            </div>
                        </div>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-xl font-bold tracking-tight mb-4">Payment Method</h2>
                        <p className="text-sm text-slate-500 mb-4">All transactions are secure and encrypted.</p>
                        <div className="border border-border-light dark:border-border-dark rounded-lg overflow-hidden">
                            <div className="p-4 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <input defaultChecked className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-surface-dark dark:border-border-dark" id="cc" name="payment" type="radio" />
                                        <label className="font-medium" htmlFor="cc">Credit Card</label>
                                    </div>
                                    <div className="flex gap-2 text-slate-400">
                                        <span className="material-symbols-outlined">credit_card</span>
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                                    <label className="block md:col-span-2">
                                        <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Card number" type="text" />
                                    </label>
                                    <label className="block">
                                        <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Expiration (MM / YY)" type="text" />
                                    </label>
                                    <label className="block">
                                        <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Security code" type="text" />
                                    </label>
                                    <label className="block md:col-span-2">
                                        <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Name on card" type="text" />
                                    </label>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-[#152327]">
                                <div className="flex items-center gap-3">
                                    <input className="w-5 h-5 text-primary border-gray-300 focus:ring-primary dark:bg-surface-dark dark:border-border-dark" id="pp" name="payment" type="radio" />
                                    <label className="font-medium flex items-center gap-2" htmlFor="pp">
                                        PayPal
                                        <span className="material-symbols-outlined text-blue-600">account_balance_wallet</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mt-8">
                        <Link className="flex items-center gap-1 text-primary font-medium hover:underline" to="/shop">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Return to cart
                        </Link>
                        <button className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all">
                            Pay Now
                        </button>
                    </div>
                    <div className="mt-12 pt-6 border-t border-border-light dark:border-border-dark flex gap-6 text-xs text-slate-400">
                        <Link className="hover:text-slate-600 dark:hover:text-slate-300" to="#">Refund Policy</Link>
                        <Link className="hover:text-slate-600 dark:hover:text-slate-300" to="#">Shipping Policy</Link>
                        <Link className="hover:text-slate-600 dark:hover:text-slate-300" to="#">Privacy Policy</Link>
                        <Link className="hover:text-slate-600 dark:hover:text-slate-300" to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[42%] xl:w-[40%] bg-surface-light dark:bg-surface-dark border-l border-border-light dark:border-border-dark order-1 lg:order-2">
                <div className="sticky top-0 h-full max-h-screen overflow-y-auto sidebar-scroll p-6 lg:p-12 bg-slate-50 dark:bg-surface-dark/50 lg:bg-transparent">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <div className="relative size-16 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark overflow-hidden">
                                <img alt="Product" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp8gmLa04K7UznCndoqeK3dK0J56_HKGrtYLaMD8Re7Auefol4sn-1evzQ5GWog6xRj4FVkD5VY5wDuQqRH2ENqiArfzyDLMQgQJkOHI2Wt_nk86LzhzPvA-ozCgqJYTTuMqq_zsovksLD20TarB7Qvc3Ij20yVswQ3-aiQ1eJYF_BdHuDog2u9q87sD8Tp6mXtHymn90sb2bQmpQKhROQd-KLBBfsElLxAk6n0uEQocAf-meztgDIq65LXgdz2TDSo54RPk32f1U" />
                                <span className="absolute -top-2 -right-2 size-5 rounded-full bg-slate-500 text-white text-xs font-bold flex items-center justify-center">1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 dark:text-white">Handwoven Sisal Basket</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Color: Natural</p>
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white">$45.00</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="relative size-16 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark overflow-hidden">
                                <img alt="Product" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtDf-HUFd_lHqiE4ZewjpKzIW7Ynzzq9BFgqAlI6QQPCjVVAZKGcXcphFHoiE8BhAiBFaKvvzEozR3F4b5oZhF9R-CylcVnqM3i2oS5UA1lA2FAqZ8iqPI3Isw8fiKtCM2Lv4SlDe7V1OvoKX6PNR9hib5DaYCMIXtQLb3G8119Kin3ogHal2bynrxsNmiqcOtghukq8MA7l6P4ZEyvWOp-c1G9GLpyeA6DnLmJYD_JncctUbylcOpoDBcYfqoV_A2GOpzHeRJjVk" />
                                <span className="absolute -top-2 -right-2 size-5 rounded-full bg-slate-500 text-white text-xs font-bold flex items-center justify-center">2</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 dark:text-white">Shea Butter Soap Set</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Scent: Lavender</p>
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white">$36.00</span>
                        </div>
                    </div>
                    <div className="border-t border-border-light dark:border-border-dark my-6 pt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                            <span className="font-bold text-slate-900 dark:text-white">$81.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                            <span className="text-sm font-medium text-slate-500">Calculated at next step</span>
                        </div>
                    </div>
                    <div className="border-t border-border-light dark:border-border-dark pt-6">
                        <div className="flex justify-between items-baseline">
                            <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs text-slate-400">USD</span>
                                <span className="text-2xl font-black text-slate-900 dark:text-white">$81.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3">
                        <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                        <p className="text-xs text-slate-700 dark:text-slate-300">
                            <span className="font-bold text-primary-dark dark:text-primary">Thank you!</span> your purchase will provide 3 days of meals for a student.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
