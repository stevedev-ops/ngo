import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full">
            <section className="relative w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
                        <div className="absolute inset-0 z-0">
                            <img alt="A diverse group of volunteers working together outdoors helping children" className="h-full w-full object-cover opacity-60" data-alt="A diverse group of volunteers working together outdoors helping children" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhU7Qa5X8bQZAmozj6UOUyhfUtLh0QeRPPzX07Aohu3yhFZMHNT9_eikiL5-idRDYF3vNhzKyHkcbW9ZfEAdBMG81GzeRwgqZfIXkVc3avQvMPq-qTN0z9HHhlWSGXHpBkxe80Vd5YaYimu8V129mTLWFzOBBOowEWGYAkRwNX4LOrMdXlSt1JnLUmsqNPMGAnbu7zGecP1Pubw41J6TqErGnvGT7ZgqXQNvaMcbQhTTys-CzjT_TdiocTr8HkezE5aFvg21HpSt0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10 flex min-h-[500px] flex-col justify-end px-6 py-12 md:px-12 lg:px-16">
                            <div className="max-w-2xl">
                                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                                    Empowering Girls,<br className="hidden md:block" /> Transforming Futures
                                </h1>
                                <p className="mb-8 text-lg font-medium text-neutral-200 md:text-xl">
                                    Join us in making a sustainable difference today. Your support provides education, resources, and hope for rural girls.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/donate" className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg">
                                        Donate Now
                                    </Link>
                                    <Link to="/shop" className="flex h-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 text-base font-bold text-white shadow-md transition-all hover:bg-white/20">
                                        Shop Merch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">Lives Impacted</p>
                                <span className="material-symbols-outlined text-secondary">favorite</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-bold text-neutral-900 dark:text-white">500+</p>
                                <p className="text-sm font-medium text-primary-dark dark:text-green-400">+12% this month</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">Schools Supported</p>
                                <span className="material-symbols-outlined text-secondary">school</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-bold text-neutral-900 dark:text-white">120</p>
                                <p className="text-sm font-medium text-primary-dark dark:text-green-400">+5% this year</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">Volunteers Active</p>
                                <span className="material-symbols-outlined text-secondary">diversity_3</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-bold text-neutral-900 dark:text-white">50+</p>
                                <p className="text-sm font-medium text-primary-dark dark:text-green-400">+8% active now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                        <div className="flex flex-1 flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                                    Our Vision for a Better Future
                                </h2>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                                    We believe in education as the key to empowerment. Every contribution goes directly to providing educational materials, scholarships, and mentorship programs for girls in rural areas.
                                </p>
                            </div>
                            <Link to="/about" className="w-fit rounded-lg bg-primary/10 px-6 py-3 text-base font-bold text-primary-dark dark:text-primary transition-colors hover:bg-primary/20">
                                Read Our Full Story
                            </Link>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-4">
                                <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-5 shadow-sm transition-shadow hover:shadow-md">
                                    <span className="material-symbols-outlined text-3xl text-secondary">eco</span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-bold text-neutral-900 dark:text-white">Sustainable</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Long-term growth.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-5 shadow-sm transition-shadow hover:shadow-md">
                                    <span className="material-symbols-outlined text-3xl text-secondary">groups</span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-bold text-neutral-900 dark:text-white">Community</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">People-first approach.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-5 shadow-sm transition-shadow hover:shadow-md">
                                    <span className="material-symbols-outlined text-3xl text-secondary">public</span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-bold text-neutral-900 dark:text-white">Global</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Connecting efforts worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 shadow-xl">
                                <img alt="Two volunteers planting a tree sapling in soil" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" data-alt="Two volunteers planting a tree sapling in soil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpSG3vKSIDcEwfSFpSBP2QaHklhtBl6LYnkOLWS-nUIRHqLmii_s5Vyh5AASo99AAQJYLp35ohbrFVX3_ShuQNGHtMQ9QpHAsUyiF5UYCl1QAHalU3n37uJjtFhhv4rsT9ASGxA7G8z7alBAs826C2dh7SupPrTXcFNYwyuTnLyDyzUkUz3KVuLiVNtX-5Oun817rOyk-nagI0GZClaMqCTk5zWUR0O0mHplA8Es3N5wkHv5MX8ip2JmBk3Ts2FTi7aitq6y-ChXA" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-16 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                            How You Can Help
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                            Your involvement creates ripples of change. Choose the path that suits you best and help us empower the next generation of rural leaders.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700 transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Make a Donation</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-1">
                                Every dollar contributes directly to school supplies, scholarships, and infrastructure for rural schools.
                            </p>
                            <Link to="/donate" className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
                                Donate Now
                            </Link>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700 transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                                <span className="material-symbols-outlined text-4xl">diversity_1</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Become a Volunteer</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-1">
                                Join our global network of mentors and field workers. Share your skills to make a tangible difference.
                            </p>
                            <a href="#" className="w-full rounded-lg border-2 border-secondary px-6 py-3 text-sm font-bold text-secondary dark:text-purple-400 shadow-sm transition-colors hover:bg-secondary hover:text-white">
                                Join the Team
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700 transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="h-16 w-16 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6 text-neutral-700 dark:text-neutral-300">
                                <span className="material-symbols-outlined text-4xl">storefront</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Shop for Impact</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-1">
                                Purchase sustainable merchandise. 100% of profits fund our education initiatives worldwide.
                            </p>
                            <Link to="/shop" className="w-full rounded-lg bg-neutral-900 dark:bg-neutral-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-600">
                                Browse Store
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full pt-12 pb-8 bg-white dark:bg-neutral-800/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                        Shop for a Cause
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        100% of the proceeds from our store go directly to our active projects. Wear your support proudly.
                    </p>
                </div>
            </section>
            <section className="w-full pb-16 bg-white dark:bg-neutral-800/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-background-light dark:bg-neutral-900 transition-all hover:shadow-lg">
                            <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                <img alt="White cotton t-shirt on hanger" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="White cotton t-shirt on hanger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cc7JzKPW66YsToun5n0a_T_kyo9zDV40eGPgYMNI1UvVoWHB6YguzMr7TmB9-hrGaaD-4AEG1fSLZlWjRND0VPGMCf0bAox-04huVfr3XKM0eG7kbFUrNBp_dGZbiQNW5TJttRsBHdJ-CQeHT9cfHnf978mvoIiGJEvzyl72sfB2wVG42AUwobK5nOgePyrZ8WFgkpNHySOp-l-UEt4Tbe1pjKBlBFvA0B9NncGVpCeLbMRQieib68XFQO9shEsRZPn8fdsRu_o" />
                                <div className="absolute right-3 top-3 rounded-full bg-secondary text-white px-2 py-1 text-xs font-bold shadow-sm">
                                    Best Seller
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Supporter Tee</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Organic Cotton</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary-dark dark:text-green-400">$25.00</span>
                                    <button className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary-dark">
                                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-background-light dark:bg-neutral-900 transition-all hover:shadow-lg">
                            <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                <img alt="Canvas tote bag hanging on wall" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Canvas tote bag hanging on wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYNWjI8C0UsigbIaJmlCqpf-51JNfViF3xUz_UwPKDNHeBsjfwMrMx8QDh8dbZKanZFwgtdBsGWw3KwzkFuSbavnTknKBncRsVKN9VnEdy7WbeZR1vtE07QvbOi-Xp5znd7L9Zt-NOcpnnA0ALDUA1fmncJ6rhSjBtdN3viJJw4ce3-h9y4KIwupyVPaUc3m7SMgk7qM4kdf_yxGjy60lB1BT01Lf6By7KD_WSBKsZkzTEatRTML0uk0B-ioFOZZsNj7AA-dnyaRU" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Eco Tote Bag</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Recycled Materials</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary-dark dark:text-green-400">$18.00</span>
                                    <button className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary-dark">
                                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-background-light dark:bg-neutral-900 transition-all hover:shadow-lg">
                            <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                <img alt="Reusable metal water bottle" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Reusable metal water bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpOPEpjll1_hPZvfm6S3_guMf4zD4uWedF4wMqcXVqNBIFKisD9TcKKhMLfLamuRJp7MV7dPz3ZVQPEON6fMpNkOgOlDpUPssFfkFqTofYrA61sgc4qL_flM-oaF2XZ_DjtSMztuo9Lc5S111yfQY0_HWxvbhCoeNs-UlBbIK46f4INaZyF5fj-qTfaKMMI1gulMJRpQfEd_j3-W4tEwQdA0A1u8LfWmwXKs8N5y5KXEWoBv-sflNXTzfahbi27F0UGG6u5WZSEg" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Life Bottle</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Stainless Steel</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary-dark dark:text-green-400">$30.00</span>
                                    <button className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary-dark">
                                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-background-light dark:bg-neutral-900 transition-all hover:shadow-lg">
                            <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                <img alt="Handmade beaded bracelet" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Handmade beaded bracelet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8SF0ZE2XEjiiUEpArNEbKKF737UBOP-75_VoW-Np6eabWMacO6x-PYGve4ThXwPkletSXylL5bLqLZXrCev8nqDBn5lcKj45HzB_c0dbLllfjPt4kGOwkE-wvCwobaiP0z5NvQBQG_oLrTZxm_KdKyKCqe_06q3phzm2dOdM8AqQXarxZSXv_ovvD1KyHw52AbGhCAr86dXPTLqd5Qhm5LI_jDtrRQ5-ifJacvR4rgly-KCZmft6hF0ScEnMIxE47vvLF9WXXyA" />
                                <div className="absolute right-3 top-3 rounded-full bg-secondary text-white px-2 py-1 text-xs font-bold shadow-sm">
                                    Handmade
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Hope Bracelet</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Artisan Crafted</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary-dark dark:text-green-400">$12.00</span>
                                    <button className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary-dark">
                                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark dark:text-primary hover:underline">
                            View All Products <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-10 text-center text-3xl font-bold text-neutral-900 dark:text-white">Stories of Change</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-100 dark:border-neutral-700">
                            <div className="flex items-center gap-4">
                                <img alt="Portrait of a smiling man" className="h-12 w-12 rounded-full object-cover" data-alt="Portrait of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlXFh0IymZmXpXIty_9EXE17p5nYSYjxy9wLt9fI-sziNc1ff7N8NhlqD-n12WUdCYhfpoBxf-DWaRcLAywRpglhCjzjgljXVhiIPMSHU0y8o0DCQksQWSWAiDW5ZIqehW7_7akGmeVz5R-mExHMf1tyEeyv1HnSx1Q_YaAFlyppQjd5ss7YaB-Wof67SrKNmdkRGs1eUdnKBjY47gBxkIhgmfCV2WJPpJ8CgeIBeK-IihdKnC8Fj5E9Vs_sDhVsjYX4n2U5zzr20" />
                                <div>
                                    <p className="font-bold text-neutral-900 dark:text-white">James M.</p>
                                    <p className="text-xs text-primary font-medium">Monthly Donor</p>
                                </div>
                            </div>
                            <p className="italic text-neutral-600 dark:text-neutral-300">
                                "Seeing the direct updates from the field makes me feel truly connected. Knowing exactly where my donation goes is why I've supported this NGO for 3 years."
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-100 dark:border-neutral-700">
                            <div className="flex items-center gap-4">
                                <img alt="Portrait of a smiling woman" className="h-12 w-12 rounded-full object-cover" data-alt="Portrait of a smiling woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmlTSo0Is3iJzJThjbYB8qhWU_Rc_bu627pbMmsBRoix29h6N5amuns32RtOfteeetH2XTbb80-E-uZhFwIPlezilN4WU8qTwha9fLAXx8e8sesCUYIB_pOX-bqGVOdwxdVZw40JaXnYG6S4JJY7QSF3ijStC1BgOnUqy2SIE1BogERJgaUllUMS3HsydO9qXG_RXytKtARng2ftG_bpN-gG7GtT_amtZd3PghQUIN24fudwwdd4_UrFZP64aSp59ioubBytyQWmY" />
                                <div>
                                    <p className="font-bold text-neutral-900 dark:text-white">Sarah L.</p>
                                    <p className="text-xs text-primary font-medium">Community Leader</p>
                                </div>
                            </div>
                            <p className="italic text-neutral-600 dark:text-neutral-300">
                                "The new school supplies completely transformed our village. Girls can attend school regularly now. Thank you."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
