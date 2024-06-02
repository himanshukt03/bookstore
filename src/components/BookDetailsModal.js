import React from 'react';
import './BookDetailsModal.css';

const BookDetailsModal = ({ show, onClose, book }) => {
  if (!book) return null;

  return (
    <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}>
            &times;
          </button>
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src={book.image}
                alt="Book Cover"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 p-4 d-flex flex-column">
              <div className="book-details">
                <h3 className="modal-title">{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Price:</strong> {book.price}</p>
                <p>{book.description}</p>
              </div>
              <div className="modal-footer mt-auto">
                <button
                  type="button"
                  className="btn btn-primary add-to-cart"
                  onClick={onClose}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;