import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Package, Box, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';

const tabs = [
  { path: '/products', label: 'Product', icon: Package, exact: true },
  { path: '/products/availability', label: 'Availability', icon: Box },
  { path: '/products/best-sellers', label: 'Best sellers', icon: Trophy },
];

export default function ProductsLayout() {
  const location = useLocation();

  return (
    <div className="products-layout">
      <div className="tabs-container">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.exact 
            ? location.pathname === tab.path 
            : location.pathname.startsWith(tab.path);

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={`tab-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="active-tab" 
                  className="active-tab-indicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </NavLink>
          );
        })}
      </div>
      
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
}
