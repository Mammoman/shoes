import './BestSellers.css';

const bestSellersData = [
  { rank: 1, company: 'Amazon', products: 4568, rating: 5.0, ratingDiff: '+0.1', discountSales: 342 },
  { rank: 2, company: 'eBay', products: 4215, rating: 5.0, ratingDiff: '+0.2', discountSales: 339 },
  { rank: 3, company: 'Rakuten', products: 4193, rating: 5.0, ratingDiff: '+0.1', discountSales: 334 },
  { rank: 4, company: 'Shopzilla', products: 3897, rating: 4.9, ratingDiff: '-0.1', discountSales: 309, diffType: 'danger' },
  { rank: 5, company: 'Best Buy', products: 3768, rating: 4.9, ratingDiff: '-0.1', discountSales: 305, diffType: 'danger' },
  { rank: 6, company: 'Overstock', products: 3714, rating: 4.9, ratingDiff: '-0.1', discountSales: 295, diffType: 'danger' },
  { rank: 7, company: 'Walmart', products: 2956, rating: 4.8, ratingDiff: '+1.5', discountSales: 286 },
  { rank: 8, company: 'Etsy', products: 2654, rating: 4.8, ratingDiff: '+0.6', discountSales: 279 },
  { rank: 9, company: 'Zappos', products: 2763, rating: 4.8, ratingDiff: '+1.0', discountSales: 204 },
  { rank: 10, company: 'Wayfair', products: 2481, rating: 4.7, ratingDiff: '-0.2', discountSales: 209, diffType: 'danger' },
];

export default function BestSellers() {
  return (
    <div className="bestsellers-container">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon">📣</div>
          <div>
            <h3 className="card-title">Sellers list</h3>
            <p className="card-subtitle">List of the best sellers of the selected product</p>
          </div>
        </div>
      </div>
      
      <div className="table-container">
        <table className="bestsellers-table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="text-center">Numbers of products</th>
              <th className="text-center">Rating</th>
              <th className="text-right">Number of products sold at higher discounts</th>
            </tr>
          </thead>
          <tbody>
            {bestSellersData.map((item, index) => (
              <tr key={index} className={index % 2 !== 0 ? 'highlight-row' : ''}>
                <td>
                  <span className="rank">{item.rank}.</span> {item.company}
                </td>
                <td className="text-center">{item.products}</td>
                <td className="text-center rating-cell">
                  <span>{item.rating.toFixed(1)}</span>
                  <span className={`rating-diff ${item.diffType === 'danger' ? 'danger' : 'success'}`}>
                    {item.ratingDiff}
                  </span>
                </td>
                <td className="text-right">{item.discountSales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="see-more-container">
        <button className="see-more-btn">See more</button>
      </div>
    </div>
  );
}
