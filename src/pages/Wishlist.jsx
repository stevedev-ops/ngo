import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        if (item.stock > 0) {
            addToCart(item);
            toast.success(`${item.name} added to cart!`);
        } else {
            toast.error('This item is out of stock');
        }
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-background-dark py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">favorite_border</span>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Wishlist is Empty</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">Save your favorite items here!</p>
                    <Link to="/shop" className="px-6 py-3 bg-primary text-white rounded-lg inline-block hover:bg-primary-dark">
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background-dark py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">My Wishlist</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-surface-dark rounded-lg shadow-md overflow-hidden">
                            <Link to={`/product/${item.product_id}`}>
                                <img src={item.images[0]} alt={item.name} className="w-full h-48 object-cover" loading="lazy" />
                            </Link>
                            <div className="p-4">
                                <Link to={`/product/${item.product_id}`}>
                                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white hover:text-primary">{item.name}</h3>
                                </Link>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                                    {item.stock <= 0 && (
                                        <span className="text-xs font-bold text-red-600">Out of Stock</span>
                                    )}
                                    {item.stock > 0 && item.stock <= 5 && (
                                        <span className="text-xs font-bold text-orange-600">Only {item.stock} left!</span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        disabled={item.stock <= 0}
                                        className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                                        title="Remove from wishlist"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
