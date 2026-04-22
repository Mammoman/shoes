import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductsLayout from './pages/Products/ProductsLayout';
import ProductGrid from './pages/Products/ProductGrid';
import Availability from './pages/Products/Availability';
import BestSellers from './pages/Products/BestSellers';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductGrid />} />
              <Route path="availability" element={<Availability />} />
              <Route path="best-sellers" element={<BestSellers />} />
            </Route>
            <Route path="/favorites" element={<div className="placeholder">Favorites Page</div>} />
            <Route path="/sources" element={<div className="placeholder">Sources Page</div>} />
            <Route path="/comparison" element={<div className="placeholder">Comparison Page</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
