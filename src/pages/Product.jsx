import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../api';
import { useCart } from '../context/CartContext';

const Product = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetchProductById(id).then(data => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div className="flex justify-center py-20"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
    }

    if (!product) return <div className="text-center py-20 text-xl font-bold">Product not found</div>;

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Link to="/shop" className="hover:text-primary hover:underline">Shop</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <Link to="/shop" className="hover:text-primary hover:underline">{product.category}</Link>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="font-medium text-slate-900 dark:text-slate-200">{product.name}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                <div className="flex flex-col gap-4">
                    <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 relative group">
                        <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            Fair Trade
                        </div>
                        <img alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src={product.images[activeImage]} />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`aspect-square overflow-hidden rounded-lg border-2 ${activeImage === idx ? 'border-primary ring-offset-2' : 'border-transparent'} hover:border-slate-300 transition-colors`}>
                                <img alt={`View ${idx + 1}`} className="h-full w-full rounded-md object-cover" src={img} />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Artisan Collection</span>
                            <div className="flex items-center gap-1 text-amber-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`material-symbols-outlined text-[18px] fill-current ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}`}>star</span>
                                ))}
                                <span className="ml-1 text-slate-500 dark:text-slate-400">({product.reviews} reviews)</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-end gap-3">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mb-8 rounded-xl bg-secondary/10 border border-secondary/20 p-4 flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                            <span className="material-symbols-outlined">volunteer_activism</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Impact Purchase</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{product.impact}</p>
                        </div>
                    </div>
                    <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        {product.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10 border-b border-slate-200 dark:border-slate-700 pb-10">
                        <div className="flex h-12 w-32 items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-surface-light dark:bg-surface-dark bg-white dark:bg-gray-800">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="flex h-full w-10 items-center justify-center text-slate-600 hover:text-primary dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <input
                                className="h-full w-full border-none bg-transparent text-center font-medium text-slate-900 dark:text-white focus:ring-0"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="flex h-full w-10 items-center justify-center text-slate-600 hover:text-primary dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            Add to Cart
                        </button>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 open:ring-1 open:ring-primary/20 bg-white dark:bg-gray-800">
                            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900 dark:text-white group-open:text-primary transition-colors">
                                <span>Product Details</span>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="border-t border-slate-100 dark:border-slate-700 p-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Material: {product.material}</li>
                                    <li>Dimensions: {product.dimensions}</li>
                                    <li>Origin: {product.origin}</li>
                                    {product.details && product.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        {product.story && (
                            <details className="group rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800">
                                <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">
                                    <span>The Artisan Story</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="border-t border-slate-100 dark:border-slate-700 p-4">
                                    <div className="flex gap-4 items-start">
                                        <img alt="Artisan" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" src={product.story.image} />
                                        <div>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                                                {product.story.text}
                                            </p>
                                            <p className="text-xs font-bold text-slate-900 dark:text-white">– {product.story.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
