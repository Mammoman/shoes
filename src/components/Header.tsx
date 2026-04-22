import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">Search</h1>
      </div>
      
      <div className="header-filters">
        <div className="filter-group flex-2">
          <label className="filter-label">Search for product</label>
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Nike Air Max Terrascape 90" 
              className="search-input"
              defaultValue="Nike Air Max Terrascape 90"
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Category</label>
          <div className="select-wrapper">
            <select className="filter-select">
              <option>Shoes</option>
              <option>Apparel</option>
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Brand</label>
          <div className="select-wrapper">
            <select className="filter-select">
              <option>Nike</option>
              <option>Adidas</option>
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Industry</label>
          <div className="select-wrapper">
            <select className="filter-select">
              <option>Fashion</option>
              <option>Sports</option>
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group justify-end">
          <button className="search-btn">
            Go Search
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
