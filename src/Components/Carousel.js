import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; // Import only the Carousel component from Bootstrap
import './Carousel.css';

export default function MyCarousel() {
  useEffect(() => {
    const backgroundCarousel = new Carousel(document.getElementById('places_carousel'), {
      interval: 4000
    });
  
    const foregroundCarousel = new Carousel(document.getElementById('places_carousel_back'), {
      interval: 4000
    });
  
    const backgroundCarouselElement = document.getElementById('places_carousel');
    const foregroundCarouselElement = document.getElementById('places_carousel_back');
  
    let isBackgroundChanging = false;
    let isForegroundChanging = false;
  
    backgroundCarouselElement.addEventListener('slide.bs.carousel', function (event) {
      if (!isForegroundChanging) {
        const nextIndex = event.to;
        isBackgroundChanging = true;
        foregroundCarousel.to(nextIndex);
      }
    });
  
    foregroundCarouselElement.addEventListener('slide.bs.carousel', function (event) {
      if (!isBackgroundChanging) {
        const nextIndex = event.to;
        isForegroundChanging = true;
        backgroundCarousel.to(nextIndex);
      }
    });
  
    backgroundCarouselElement.addEventListener('slid.bs.carousel', function () {
      isBackgroundChanging = false;
    });
  
    foregroundCarouselElement.addEventListener('slid.bs.carousel', function () {
      isForegroundChanging = false;
    });
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div id="places_outer">

      <div id="places_carousel_back" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="sou_updated.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="taj_updated.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="kashmir_updated.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="goa_updated.jpg" className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src="kumbhalgarh_updated.jpg" className="d-block w-100" alt="Slide 5" />
          </div>
        </div>
      </div>

      <div id="places_carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#places_carousel" data-bs-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#places_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#places_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#places_carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#places_carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="sou_updated.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h5>STATUE OF UNITY</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="taj_updated.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h5>TAJ MAHAL</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="kashmir_updated.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h5>VALLEY OF KASHMIR</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="goa_updated.jpg" className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption">
              <h5>GOA BEACH</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="kumbhalgarh_updated.jpg" className="d-block w-100" alt="Slide 5" />
            <div className="carousel-caption">
              <h5>KUMBHALGARH</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#places_carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#places_carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
