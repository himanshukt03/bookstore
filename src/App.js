import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetailsModal from './components/BookDetailsModal';
import BookCard from './components/BookCard'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const books = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahhInJJuqYc_lIrZtd_1o2ZgD8XMCombGQQ&s', title: 'Jojo\'s Bizarre Adventure Part 7', author: 'Hirohiko Araki', price: '₹799', description: 'Follow the epic journey of Johnny Joestar and Gyro Zeppeli as they race across America in search of the legendary corpse parts.' },
    { image: 'https://cdn.kobo.com/book-images/7e2aa417-4954-4814-bc97-d3b289b7d658/1200/1200/False/vinland-saga-7-3.jpg', title: 'Vinland Saga', author: 'Makoto Yukimura', price: '₹899', description: 'Set in the Viking Age, this historical manga follows the story of Thorfinn, a young warrior seeking revenge against the man who killed his father.' },
    { image: 'https://rukminim2.flixcart.com/image/850/1000/l5jxt3k0/book/i/a/p/cosmos-original-imagg6u2kze264xu.jpeg?q=20&crop=false', title: 'Cosmos', author: 'Carl Sagan', price: '₹599', description: 'Delve into the wonders of the universe with Carl Sagan as he explores topics ranging from the origins of life to the search for extraterrestrial intelligence.' },
    { image: 'https://m.media-amazon.com/images/I/81TZrYTkAkL._AC_UF1000,1000_QL80_.jpg', title: '20th Century Boys', author: 'Naoki Urasawa', price: '₹749', description: 'Embark on a thrilling journey with Kenji Endo and his friends as they uncover a sinister plot that threatens the fate of humanity.' },
    { image: 'https://mediacdn.nhbs.com/jackets/jackets_resizer_large/15/156202.jpg', title: 'The Selfish Gene', author: 'Richard Dawkins', price: '₹699', description: 'Explore the concept of gene-centered evolution and its implications for understanding the behavior of organisms, including humans.' },
    { image: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: '₹749', description: 'A captivating journey through the history of Homo sapiens, from the emergence of our species to the present day.' },
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
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">BookStore</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
              {/* Add other navbar links here */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
        {/* Render multiple BookCard components */}
        <div className="container mt-5">
          <div className="row">
            {books.map((book, index) => (
              <BookCard key={index} {...book} onViewDetails={() => handleShowModal(book)} />
            ))}
          </div>
        </div>
        <BookDetailsModal show={showModal} onClose={handleCloseModal} book={selectedBook} />
      </div>
    </Router>
  );
};

export default App;
