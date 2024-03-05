import { Carousel } from 'react-bootstrap';
import Footer1 from './Footer.js'

function Slider2() {
  return (
    <> <Footer1 />
    <Carousel className=''>
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
      {/* Add more Carousel.Items as needed */}
    </Carousel>
    </>);
}

export default Slider2;
  

