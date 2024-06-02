import React from 'react';
import BookCard from './BookCard';

const BookList = () => (
  <div className="row">
    <div className="col-md-4">
      <BookCard
        image="book1.jpg"
        title="Book 1"
        author="Author 1"
        price="$10.99"
        description="Description of Book 1"
      />
    </div>
    <div className="col-md-4">
      <BookCard
        image="book2.jpg"
        title="Book 2"
        author="Author 2"
        price="$12.99"
        description="Description of Book 2"
      />
    </div>
    <div className="col-md-4">
      <BookCard
        image="book3.jpg"
        title="Book 3"
        author="Author 3"
        price="$9.99"
        description="Description of Book 3"
      />
    </div>
  </div>
);

export default BookList;
