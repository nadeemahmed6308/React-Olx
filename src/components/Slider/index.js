import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <div className="container-fluid" style={{ width: '100%' }}>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp"
          alt="First slide"
        />
      </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Slider;






  





