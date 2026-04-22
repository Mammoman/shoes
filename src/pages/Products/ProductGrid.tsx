import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductGrid.css';

const MOCK_PRODUCTS = [
  { id: 1, brand: 'Adidas', title: 'X_PLR SHOES', rating: 4.3, reviews: 1832, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#ffd700' },
  { id: 2, brand: 'Adidas', title: 'QUESTAR FLOW NXT', rating: 3.8, reviews: 453, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#e0e0e0' },
  { id: 3, brand: 'Nike', title: 'Air Force 1', rating: 4.8, reviews: 3200, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#ffffff' },
  { id: 4, brand: 'Nike', title: 'Nike Air Max Dawn', rating: 5.0, reviews: 4532, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#000000' },
  { id: 5, brand: 'Nike', title: 'Nike Air Max Terrascape 90', rating: 5.0, reviews: 4532, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#20c997' },
  { id: 6, brand: 'Nike', title: 'Nike React Vision', rating: 4.6, reviews: 1205, category: 'Shoes', industry: 'Fashion', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', color: '#e2e8f0' },
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
  const recentProducts = MOCK_PRODUCTS.slice(0, 3);
  const favoriteProducts = MOCK_PRODUCTS.slice(3, 6);

  return (
    <div className="product-views">
      <section className="product-section">
        <div className="section-header">
          <h2 className="section-title">Recent viewed</h2>
          <div className="section-nav">
            <button className="nav-btn">{'<'}</button>
            <button className="nav-btn">{'>'}</button>
          </div>
        </div>
        
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {recentProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </motion.div>
      </section>

      <section className="product-section" style={{ marginTop: '48px' }}>
        <div className="section-header">
          <h2 className="section-title">Favorites products</h2>
          <div className="section-nav">
            <button className="nav-btn">{'<'}</button>
            <button className="nav-btn">{'>'}</button>
          </div>
        </div>
        
        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {favoriteProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </motion.div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div className="product-card" variants={itemVariants}>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      
      <div className="product-details">
        <div className="product-top">
          <span className="product-brand">{product.brand}</span>
          <button className="favorite-btn">
            <Star size={16} />
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
          <div className="meta-item">
            <span className="meta-label">Industry:</span> {product.industry}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
