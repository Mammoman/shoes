import { Settings, Package, Heart, CreditCard, LogOut } from 'lucide-react';
import './Profile.css';
import { useAppContext } from '../../context/AppContext';

export default function Profile() {
  const { favorites } = useAppContext();

  return (
    <div className="profile-container">
      <div className="profile-header-card">
        <div className="profile-avatar-large">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
            alt="User profile" 
          />
        </div>
        <div className="profile-info">
          <h2>Jane Doe</h2>
          <p>jane.doe@example.com</p>
          <span className="member-badge">Premium Member</span>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <nav className="profile-nav">
            <a href="#" className="active"><Settings size={18} /> Account Settings</a>
            <a href="#"><Package size={18} /> Orders</a>
            <a href="#"><Heart size={18} /> Saved ({favorites.length})</a>
            <a href="#"><CreditCard size={18} /> Payment Methods</a>
            <a href="#" className="text-danger"><LogOut size={18} /> Log Out</a>
          </nav>
        </div>

        <div className="profile-main">
          <div className="dashboard-card">
            <h3>Recent Orders</h3>
            <div className="order-list">
              <div className="order-item">
                <div className="order-icon"><Package size={24} color="var(--primary-color)"/></div>
                <div className="order-details">
                  <h4>Order #ORD-8932</h4>
                  <p>Nike Air Max Terrascape 90 - Size 10</p>
                </div>
                <div className="order-status text-success">Delivered</div>
              </div>
              <div className="order-item">
                <div className="order-icon"><Package size={24} color="var(--text-muted)"/></div>
                <div className="order-details">
                  <h4>Order #ORD-7105</h4>
                  <p>Adidas QUESTAR FLOW NXT - Size 9.5</p>
                </div>
                <div className="order-status">Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
