import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Header.css';

export default function Header() {
  const { 
    searchQuery, setSearchQuery,
    categoryFilter, setCategoryFilter,
    brandFilter, setBrandFilter
  } = useAppContext();

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
              placeholder="Search by title..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Category</label>
          <div className="select-wrapper">
            <select 
              className="filter-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Shoes">Shoes</option>
              <option value="Apparel">Apparel</option>
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Brand</label>
          <div className="select-wrapper">
            <select 
              className="filter-select"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
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
