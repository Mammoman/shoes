import { NavLink } from 'react-router-dom';
import { PackageSearch, Star, Network, SplitSquareHorizontal } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/products', label: 'Products', icon: PackageSearch },
  { path: '/favorites', label: 'Favorites', icon: Star },
  { path: '/sources', label: 'Sources', icon: Network },
  { path: '/comparison', label: 'Comparison', icon: SplitSquareHorizontal },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon"></div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="nav-icon-wrapper">
                <Icon size={20} />
              </div>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/profile" className="user-profile" style={{ textDecoration: 'none' }}>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80" 
            alt="User profile" 
            className="user-avatar"
          />
          <div className="user-dots">•••</div>
        </NavLink>
      </div>
    </aside>
  );
}
