import React from 'react';
import { Carousel } from 'react-bootstrap';

const BookCarousel = () => {
  return (
    <Carousel style={{ height: '600px' }} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTkucG5n&s=6c510e4d48955c1f03d1ae1a91a7e32e"
          alt="Featured Book 1"
          style={{ height: '600px', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.guim.co.uk/img/media/7796d171fbf73e4e6ba5539aeaf5ccfd284f178f/0_0_2500_1500/master/2500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMjEucG5n&s=faee9d97434dd2d8cc16cb9cd495cbbf"
          alt="Featured Book 2"
          style={{ height: '600px', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.booktrust.org.uk/globalassets/images/news-and-features/blogs-2022/12.-december/best-books-of-2022-16x9.jpg?w=1920&h=1080&quality=70&anchor=middlecenter"
          alt="Featured Book 2"
          style={{ height: '600px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BookCarousel;
