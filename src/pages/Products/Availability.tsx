
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis,
  LineChart, Line, Legend, Cell
} from 'recharts';
import { Minus, Plus, Calendar } from 'lucide-react';
import './Availability.css';

const bubbleData = [
  { x: 100, y: 200, z: 200, name: 'Amazon', fill: '#6EE7B7' },
  { x: 120, y: 100, z: 260, name: 'Ebay', fill: '#93C5FD' },
  { x: 170, y: 300, z: 400, name: 'Amazon', fill: '#86EFAC' },
  { x: 140, y: 250, z: 280, name: 'Rakuten', fill: '#FCA5A5' },
  { x: 150, y: 400, z: 500, name: 'Shopzilla', fill: '#A78BFA' },
];

const lineData = [
  { name: 'Jan', 'Your company': 1000, 'Company #1': 2400, 'Company #2': 2400 },
  { name: 'Feb', 'Your company': 1200, 'Company #1': 1398, 'Company #2': 2210 },
  { name: 'Mar', 'Your company': 2000, 'Company #1': 1800, 'Company #2': 2290 },
  { name: 'Apr', 'Your company': 1800, 'Company #1': 2908, 'Company #2': 2000 },
  { name: 'May', 'Your company': 2890, 'Company #1': 2800, 'Company #2': 2181 },
  { name: 'Jun', 'Your company': 2390, 'Company #1': 3800, 'Company #2': 2500 },
  { name: 'Jul', 'Your company': 3490, 'Company #1': 3300, 'Company #2': 2100 },
  { name: 'Aug', 'Your company': 3200, 'Company #1': 2800, 'Company #2': 1900 },
  { name: 'Sep', 'Your company': 4000, 'Company #1': 3000, 'Company #2': 2000 },
  { name: 'Oct', 'Your company': 3800, 'Company #1': 2500, 'Company #2': 2100 },
  { name: 'Nov', 'Your company': 4300, 'Company #1': 2000, 'Company #2': 2400 },
  { name: 'Dec', 'Your company': 4800, 'Company #1': 1500, 'Company #2': 2500 },
];

const sellersList = [
  { name: 'Ebay', status: 'Out of stock' },
  { name: 'Rakuten', status: 'Out of stock' },
  { name: 'Amazon', status: 'Out of stock' },
  { name: 'Best buy', status: 'Out of stock', icon: 'BB' },
  { name: 'Overstock', status: 'Out of stock' },
];

const highlyAvailable = [
  { name: 'Ebay', stock: 'Rakuten' },
  { name: 'Rakuten', stock: 'Ebay' },
  { name: 'Amazon', stock: 'Rakuten', icon1: 'AW', icon2: 'RK' },
  { name: 'Best buy', stock: 'Amazon' },
  { name: 'Overstock', stock: 'Best buy' },
];

export default function Availability() {
  return (
    <div className="availability-grid">
      {/* Top Left: Bubble Chart */}
      <div className="dashboard-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon">👤</div>
            <h3 className="card-title">Available sellers</h3>
          </div>
          <div className="card-actions">
            <span className="action-text">More Details</span>
            <button className="icon-btn"><Minus size={16} /></button>
            <button className="icon-btn"><Plus size={16} /></button>
          </div>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis type="number" dataKey="x" hide />
              <YAxis type="number" dataKey="y" hide />
              <ZAxis type="number" dataKey="z" range={[500, 5000]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Sellers" data={bubbleData} fill="#8884d8">
                {bubbleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Right: Line Chart */}
      <div className="dashboard-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon">📈</div>
            <h3 className="card-title">Out-of-stock data</h3>
          </div>
          <div className="card-actions">
            <span className="action-text">2022</span>
            <button className="icon-btn"><Calendar size={16} /></button>
          </div>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="Your company" stroke="#6EE7B7" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="Company #1" stroke="#93C5FD" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="Company #2" stroke="#FCA5A5" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Left: Sellers List Table */}
      <div className="dashboard-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon">📋</div>
            <div>
              <h3 className="card-title">Available sellers list</h3>
              <p className="card-subtitle">List of available sellers who are authorized but do not have stock</p>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Product Availability</th>
              </tr>
            </thead>
            <tbody>
              {sellersList.map((item, i) => (
                <tr key={i} className={i === 1 ? 'highlight-row' : ''}>
                  <td>
                    <span className={i === 3 ? 'text-primary font-semibold' : ''}>{item.name}</span>
                    {item.icon && <span className="inline-badge ml-2">{item.icon}</span>}
                  </td>
                  <td className="text-success font-medium">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Right: Highly Available Table */}
      <div className="dashboard-card">
        <div className="card-header">
          <div className="card-title-group">
            <div className="card-icon">⚡</div>
            <div>
              <h3 className="card-title">Highly available / Out of stock</h3>
              <p className="card-subtitle">List of available sellers who are authorized but do not have stock. Historical data on products that are highly available and out of stock most of the time</p>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Out of Stock</th>
              </tr>
            </thead>
            <tbody>
              {highlyAvailable.map((item, i) => (
                <tr key={i} className={i === 1 ? 'highlight-row' : ''}>
                  <td>
                    <span className={i === 2 ? 'text-primary font-semibold' : ''}>{item.name}</span>
                    {item.icon1 && <span className="inline-badge ml-2">{item.icon1}</span>}
                  </td>
                  <td>
                    <span className={i === 2 ? 'text-primary font-semibold' : ''}>{item.stock}</span>
                    {item.icon2 && <span className="inline-badge ml-2 bg-red">{item.icon2}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
