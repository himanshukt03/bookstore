import React from 'react';
import './BookDetailsModal.css'; 

const BookDetailsModal = ({ show, onClose, book }) => {
  if (!book) return null;

  return (
    <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ overflow: 'auto' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="row no-gutters">
            <div className="col-md-6" style={{ padding: '20px' }}>
              <img
                src={book.image}
                alt="Book Cover"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
            <div className="col-md-6" style={{ padding: '20px' }}>
              <div className="modal-header">
                <h5 className="modal-title">{book.title}</h5>
                <button type="button" className="close" aria-label="Close" onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Price:</strong> {book.price}</p>
                <p>{book.description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                <button type="button" className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;
