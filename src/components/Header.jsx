import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 md:px-10 py-3 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="size-8 text-secondary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-primary">Educate a Rural Girl</h2>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-9">
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/about">Our Story</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/about">Our Values</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/about">Team</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/about">Impact</Link>
                        <Link className="text-sm font-medium hover:text-secondary transition-colors" to="/shop">Shop</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg h-10 px-3 w-64">
                        <span className="material-symbols-outlined text-gray-400">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-gray-900 dark:text-white placeholder-gray-400" placeholder="Search" />
                    </div>
                    <Link to="/donate" className="hidden md:flex bg-primary hover:bg-primary/90 text-white h-10 px-4 rounded-lg text-sm font-bold items-center justify-center transition-colors shadow-md shadow-primary/20">
                        Donate Now
                    </Link>
                    <button className="hidden md:flex bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white h-10 px-4 rounded-lg text-sm font-bold items-center justify-center transition-colors gap-2 group">
                        <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-secondary/80">shopping_cart</span>
                        <span>Cart</span>
                    </button>
                    <button className="lg:hidden text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
