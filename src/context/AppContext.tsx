import React, { createContext, useContext, useState } from 'react';

export interface Product {
  id: number;
  brand: string;
  title: string;
  rating: number;
  reviews: number;
  category: string;
  industry: string;
  image: string;
  color: string;
  colors?: string[];
  price?: number;
}

interface AppContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  categoryFilter: string;
  setCategoryFilter: (cat: string) => void;
  brandFilter: string;
  setBrandFilter: (brand: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <AppContext.Provider value={{ 
      searchQuery, setSearchQuery, 
      favorites, toggleFavorite,
      categoryFilter, setCategoryFilter,
      brandFilter, setBrandFilter,
      isSidebarOpen, toggleSidebar: () => setIsSidebarOpen(prev => !prev)
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
