import React from 'react';
import BookCard from '../components/BookCard';

const Books = () => (
  <div className="container mt-5">
    <div className="row">
      <BookCard image="https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg" title="1984" author="George Orwell" price="₹749" description="A dystopian novel set in a totalitarian society where individuality is suppressed and government surveillance is omnipresent." />
      <BookCard image="https://m.media-amazon.com/images/I/71X0Wsoa+vL._AC_UF1000,1000_QL80_.jpg" title="Fahrenheit 451" author="Ray Bradbury" price="₹674" description="In a future society where books are banned and 'firemen' burn them, one man questions the status quo and seeks knowledge." />
      <BookCard image="https://m.media-amazon.com/images/I/411WFSFEMJL._AC_UF1000,1000_QL80_.jpg" title="Don Quixote" author="Miguel de Cervantes" price="₹974" description="An epic novel about a Spanish nobleman who becomes obsessed with the ideals of chivalry and embarks on misadventures as a knight-errant." />
      <BookCard image="https://cdn.kobo.com/book-images/b1c96137-0ddf-4ee4-8f46-73bdfa9b8621/1200/1200/False/crime-and-punishment-by-fyodor-dostoevsky-1.jpg" title="Crime and Punishment" author="Fyodor Dostoevsky" price="₹899" description="A psychological thriller following the inner turmoil of a young man, Raskolnikov, who commits a murder and grapples with guilt and morality." />
      <BookCard image="https://m.media-amazon.com/images/I/41alKvN9GwL._AC_UF1000,1000_QL80_.jpg" title="No Longer Human" author="Osamu Dazai" price="₹824" description="A semi-autobiographical novel portraying the life of a troubled young man struggling with existential despair and societal expectations." />
      <BookCard image="https://i.pinimg.com/736x/ef/7a/31/ef7a31f122a13d89f61bae525d87eddc.jpg" title="Vagabond" author="Takehiko Inoue" price="₹1124" description="A manga series inspired by the life of the legendary swordsman Miyamoto Musashi, exploring themes of ambition, mastery, and the path to enlightenment." />
    </div>
  </div>
);

export default Books;
