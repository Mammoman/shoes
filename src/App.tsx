import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductsLayout from './pages/Products/ProductsLayout';
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
            <Route path="/products/*" element={<ProductsLayout />} />
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
