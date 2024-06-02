import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import BookDetailsModal from '../components/BookDetailsModal';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const books = [
    { image: 'https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg', title: '1984', author: 'George Orwell', price: '₹749', description: 'A dystopian novel set in a totalitarian society where individuality is suppressed and government surveillance is omnipresent. The story follows Winston Smith, a government worker who starts to question the Party\'s authority and embarks on a journey of rebellion and self-discovery.' },
    { image: 'https://m.media-amazon.com/images/I/71X0Wsoa+vL._AC_UF1000,1000_QL80_.jpg', title: 'Fahrenheit 451', author: 'Ray Bradbury', price: '₹674', description: 'In a future society where books are banned and "firemen" burn them, one man questions the status quo and seeks knowledge. Guy Montag, a fireman, starts to see the value in books and becomes a fugitive in his quest to preserve literature.' },
    { image: 'https://m.media-amazon.com/images/I/411WFSFEMJL._AC_UF1000,1000_QL80_.jpg', title: 'Don Quixote', author: 'Miguel de Cervantes', price: '₹974', description: 'An epic novel about a Spanish nobleman who becomes obsessed with the ideals of chivalry and embarks on misadventures as a knight-errant. Accompanied by his loyal squire Sancho Panza, Don Quixote fights for justice and honor, often with comic results.' },
    { image: 'https://cdn.kobo.com/book-images/b1c96137-0ddf-4ee4-8f46-73bdfa9b8621/1200/1200/False/crime-and-punishment-by-fyodor-dostoevsky-1.jpg', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: '₹899', description: 'A psychological thriller following the inner turmoil of a young man, Raskolnikov, who commits a murder and grapples with guilt and morality. As he deals with the consequences of his actions, he encounters a variety of characters who challenge his beliefs and mindset.' },
    { image: 'https://m.media-amazon.com/images/I/41alKvN9GwL._AC_UF1000,1000_QL80_.jpg', title: 'No Longer Human', author: 'Osamu Dazai', price: '₹824', description: 'A semi-autobiographical novel portraying the life of a troubled young man struggling with existential despair and societal expectations. Yozo Oba navigates his feelings of alienation and self-doubt, ultimately seeking a sense of belonging and identity.' },
    { image: 'https://i.pinimg.com/736x/ef/7a/31/ef7a31f122a13d89f61bae525d87eddc.jpg', title: 'Vagabond', author: 'Takehiko Inoue', price: '₹1124', description: 'A manga series inspired by the life of the legendary swordsman Miyamoto Musashi, exploring themes of ambition, mastery, and the path to enlightenment. The story follows Musashi as he hones his skills and confronts his inner demons, striving to become the greatest samurai.' },
  ];

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {books.map((book, index) => (
          <BookCard key={index} {...book} onViewDetails={() => handleShowModal(book)} />
        ))}
      </div>
      <BookDetailsModal show={showModal} onClose={handleCloseModal} book={selectedBook} />
    </div>
  );
};

export default Books;
