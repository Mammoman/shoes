import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext, type Product } from '../../context/AppContext';
import './ProductGrid.css';

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, brand: 'Adidas', title: 'X_PLR SHOES', rating: 4.3, reviews: 1832, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#ffd700', colors: ['#ffd700', '#000000', '#ffffff'], price: 120 },
  { id: 2, brand: 'Adidas', title: 'QUESTAR FLOW NXT', rating: 3.8, reviews: 453, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#e0e0e0', colors: ['#e0e0e0', '#ff5722', '#3f51b5'], price: 90 },
  { id: 3, brand: 'Nike', title: 'Air Force 1', rating: 4.8, reviews: 3200, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#ffffff', colors: ['#ffffff', '#000000', '#ff0000'], price: 110 },
  { id: 4, brand: 'Nike', title: 'Nike Air Max Dawn', rating: 5.0, reviews: 4532, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#000000', colors: ['#000000', '#808080', '#0000ff'], price: 140 },
  { id: 5, brand: 'Nike', title: 'Nike Air Max Terrascape 90', rating: 5.0, reviews: 4532, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#20c997', colors: ['#20c997', '#ffc107', '#673ab7'], price: 150 },
  { id: 6, brand: 'Nike', title: 'Nike React Vision', rating: 4.6, reviews: 1205, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#e2e8f0', colors: ['#e2e8f0', '#009688', '#e91e63'], price: 135 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ProductGrid() {
  const { searchQuery, categoryFilter, brandFilter } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesBrand = brandFilter === 'All' || product.brand === brandFilter;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const recentProducts = filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2));
  const otherProducts = filteredProducts.slice(Math.ceil(filteredProducts.length / 2));

  return (
    <div className="product-views">
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <section className="product-section">
        <div className="section-header">
          <h2 className="section-title">
            {searchQuery || categoryFilter !== 'All' || brandFilter !== 'All' ? 'Search Results' : 'Recent viewed'}
          </h2>
        </div>
        
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {recentProducts.length > 0 ? (
            recentProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </motion.div>
      </section>

      {otherProducts.length > 0 && (
        <section className="product-section" style={{ marginTop: '48px' }}>
          <div className="section-header">
            <h2 className="section-title">More Products</h2>
          </div>
          
          <motion.div 
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {otherProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
}

export function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  const { favorites, toggleFavorite } = useAppContext();
  const isFavorite = favorites.includes(product.id);

  return (
    <motion.div className="product-card" variants={itemVariants} onClick={onClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      
      <div className="product-details">
        <div className="product-top">
          <span className="product-brand">{product.brand}</span>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product.id);
            }}
          >
            <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        <h3 className="product-title">{product.title}</h3>
        
        <div className="product-rating-row">
          <span className="rating-badge">{product.rating.toFixed(1)}</span>
          <span className="review-count">({product.reviews} review)</span>
        </div>
        
        <div className="product-meta">
          <div className="meta-item">
            <span className="meta-label">Category:</span> {product.category}
          </div>
          <div className="meta-item">
            <span className="meta-label">Brand:</span> {product.brand}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || product.color);

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}><X size={24} /></button>
        
        <div className="modal-body">
          <div className="modal-image-col" style={{ backgroundColor: selectedColor + '20' }}>
            <img src={product.image} alt={product.title} className="modal-image" />
          </div>
          <div className="modal-info-col">
            <span className="modal-brand">{product.brand}</span>
            <h2 className="modal-title">{product.title}</h2>
            <div className="modal-price">${product.price}</div>
            
            <div className="color-selection">
              <span className="color-label">Select Color:</span>
              <div className="color-options">
                {product.colors?.map((c, i) => (
                  <button 
                    key={i} 
                    className={`color-btn ${selectedColor === c ? 'active' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
