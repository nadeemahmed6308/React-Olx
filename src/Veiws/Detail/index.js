import { Container, Row, Col, Button } from 'react-bootstrap';
import { getSingleAd } from "../../config/firebase"
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
 import img from './img.png';
 import img2 from './yellow.png';
 import StaticMap from './Map.js'


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useDispatch } from 'react-redux'
import { updateCart } from "../../Store/cartSlice"

function Detail() {

const dispatch = useDispatch()

  const { id } = useParams();
  const [detailItem, setdetailItem] = useState([])
  useEffect(() => {
    getDetail()
  }, [])

  async function getDetail() {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then(res => setdetailItem(res))
    const res = await getSingleAd(id)
    //console.log('res', res)
    setdetailItem(res)
  }
  //console.log(detailItem)

  const {title, description, image, amount, longitude,latitude } = detailItem

  const [like, setLike] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Event propagation ko rokne ke liye

    // Like toggle logic
    setLike(!like);
  };
  const navigate = useNavigate();
 


const addToCart = () => {
  // console.log('ad', ad)
  dispatch(updateCart(detailItem))
}
const customIcon = new L.Icon({
iconUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNzanoIz4yrjBLc77kg6zAUTWsuFYD4mlMh0KZ_BrGA&s',
iconSize: [32, 32],
iconAnchor: [16, 32],
popupAnchor: [0, -32],
});
const markers = [
{ id: 1, position: [latitude, longitude], popupContent: 'Kharadar Police Choki' },

];


  return <div className="container-fluid">
      <div>
      {/* <Container> */}

      <div className="container-fluid">
        <Row>

          <Col sm={8}>
            <div className="container mt-5">

              <Carousel style={{ width: '100%'}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 p-2"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 p-3"
                    src={image}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 p-3"
                    src={image}
                    alt="Third slide"
                  />
                  <Carousel.Caption>

                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

  <div className='row mt-3'>
  <div className="col-sm-6" style={{ width: '85%', height: '70%', marginLeft: '6%' }}>
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{title}</h1><br/>
        <h5 className="card-text"> {description}</h5><br/>
        <div className='card-footer' >
        <h1 className="btn btn-primary">Rs, {amount} $</h1>

        <span className="float-right" style={{ paddingRight: '5%' }}>

{like ? (
  <img style={{ float: 'right', marginRight: '0px' }} width={50} onClick={handleLikeClick} src={img2} alt="Liked" />
) : (
  <img style={{ float: 'right', marginRight: '0px' }} width={50} onClick={handleLikeClick} src={img} alt="Like" />
)}
</span>
<span><img style={{ float: 'right', marginRight: '20px' }} width={50} src="https://cdn-icons-png.flaticon.com/512/1358/1358023.png" alt="" /></span> 
        </div>
      </div>
    </div>
  </div>
</div>  
          </Col>

        {/* </Col> */}

          <Col sm={4}>
          <Card  className='mt-5' style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title><h4 className='details'><span><img width={'20%'} src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png" alt="" /></span>Nadeem Ahmed</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Member Since jun 2023</Card.Subtitle>
        <br />
        <Card.Text>
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Show Phone Number
      </Button>
      <Button variant="secondary" size="lg" onClick={()=> navigate('/chat')}>
       Chat
      </Button>
    </div>
        </Card.Text>
     
      </Card.Body>
    </Card>
    <Card className='mt-5' style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title><h1>Location</h1></Card.Title>
        <Card.Text>
          <img width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjwdZvFqJudRfAmH0P8oI0iQUm4Gf-6pDq2VUwEqBST8fRq9E_8xP69Vgcjou7wcSIRg&usqp=CAU" alt="" />
          G-4, Karachi
          {latitude}
        </Card.Text>
      </Card.Body>
    </Card>
<div style={{marginLeft:'-10px'}} className="d-grid">
<Button className='mt-3' variant="primary" size="lg" onClick={addToCart}>Add to Cart</Button>
</div>
          </Col>

       <Col sm={8}>
  <Card className='mt-5' style={{ width: '100%', height: '50%', overflow: 'hidden' }}>
    <Card.Body style={{ overflow: 'hidden' }}>
      <Card.Title><h1>Location</h1></Card.Title>
      <Card.Text>
        <img width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjwdZvFqJudRfAmH0P8oI0iQUm4Gf-6pDq2VUwEqBST8fRq9E_8xP69Vgcjou7wcSIRg&usqp=CAU" alt="" />
        {latitude}
        <StaticMap />
      </Card.Text>
    </Card.Body>
  </Card>
         </Col>

        </Row>
       
      </div>
    </div>
  </div> 
}
export default Detail;


