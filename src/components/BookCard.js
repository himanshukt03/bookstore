import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookCard = ({ image, title, author, price, description, onViewDetails }) => {
  const truncateDescription = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="card mb-4 shadow-sm" style={{ transform: 'scale(0.95)', width: '100%' }}>
        <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
          <img
            src={image}
            className="card-img-top"
            alt="Book Cover"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted mb-1"><small>Author: {author}</small></p>
          <p className="card-text text-muted mb-3"><small>Price: {price}</small></p>
          <p className="card-text text-muted" style={{ fontSize: '0.875rem' }}>{truncateDescription(description, 170)}</p>
          <div className="d-flex flex-column align-items-center">
            <button
              type="button"
              className="btn btn-success rounded-pill mb-2"
              style={{ backgroundColor: '#28a745', borderColor: '#28a745', padding: '10px 20px', fontSize: '1rem' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="btn btn-link btn-sm p-0"
              style={{ textDecoration: 'none', color: '#007bff' }}
              onClick={onViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
