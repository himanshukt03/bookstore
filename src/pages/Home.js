import React, { useState } from 'react';
import BookCarousel from '../components/BookCarousel';
import BookCard from '../components/BookCard';
import BookDetailsModal from '../components/BookDetailsModal';

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleViewDetails = (book) => {
    setSelectedBook(book);
    setModalShow(true);
  };

  const books = [
    {
      image: 'https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '₹799',
      description: 'A portrait of the Jazz Age in all of its decadence and excess. The Great Gatsby captures the essence of an era and the human condition.'
    },
    {
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-04/18/12/asset/9b612bd500e6/sub-buzz-4418-1650285323-8.jpg',
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      price: '₹949',
      description: 'An autobiography detailing American writer and poet Maya Angelou\'s formative years. It explores themes of identity, racism, and literacy.'
    },
    {
      image: 'https://cdn.pastemagazine.com/www/articles/2019/12/06/dunebbc19final.jpg',
      title: 'Dune',
      author: 'Frank Herbert',
      price: '₹699',
      description: 'A science fiction masterpiece about politics, religion, and power. Follow Paul Atreides as he navigates the complexities of the desert planet Arrakis.'
    },
  ];

  return (
    <div>
      <BookCarousel />
      <div className="container mt-5">
        <div className="row">
          {books.map((book, index) => (
            <BookCard
              key={index}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
              description={book.description}
              onViewDetails={() => handleViewDetails(book)}
            />
          ))}
        </div>
      </div>
      <BookDetailsModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        book={selectedBook}
      />
    </div>
  );
};

export default Home;
