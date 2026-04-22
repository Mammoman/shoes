import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext, type Product } from '../../context/AppContext';
import { ProductCard, ProductModal, MOCK_PRODUCTS } from '../Products/ProductGrid';
import '../Products/ProductGrid.css'; // Reuse grid styles

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Favorites() {
  const { favorites } = useAppContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const favoriteProducts = MOCK_PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="product-views">
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <section className="product-section">
        <div className="section-header">
          <h2 className="section-title">Your Favorites</h2>
          <p className="card-subtitle" style={{ marginLeft: '16px' }}>
            {favoriteProducts.length} items saved
          </p>
        </div>
        
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
            ))
          ) : (
            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px' }}>
              <Star size={48} color="var(--border-color)" style={{ margin: '0 auto 16px' }} />
              <h3>No favorites yet</h3>
              <p>Explore products and click the star icon to save them here.</p>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}

// Ensure Star is imported if needed for empty state
import { Star } from 'lucide-react';
