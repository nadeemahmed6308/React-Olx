import React,{useState} from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom'
import icon1 from '../olx blue.png'
import icon2 from '../car.png'
import icon3 from '../proparty.png'
import icon4 from '../magnifying-glass.png'
// import Slider from '../Slider';
import { logout } from '../../config/firebase'
import { useSelector } from 'react-redux'


function Header({ user }) {
  
 const [search, setSearch]= useState()


 const navigate = useNavigate()
 const cart = useSelector(state => state.cartReducer.cart)
 console.log('cart', cart)

  return (
    <div className="container-fluid mx-0" id='dashboard'>
      <div className="row pt-2" style={{ backgroundColor: "#f7f8f8" }}>

        <div className="col-3 col-md-2">
          <Link to="#"><img style={{ width: '50%' }} src={icon1} className="img-fluid" alt="olx" /></Link>
        </div>

        <div className="col-4 col-md-2">
          <Link href="/"><img style={{ width: '30%' }} src={icon2} clLinkssNLinkme="img-fluid" Linklt="Motors" /><small>Motors</small></Link>
        </div>

        <div className="col-4 col-md-2">
          <Link to="/"><img style={{ width: '30%' }} src={icon3} className="img-fluid" alt="Proparty" /><small>Property</small></Link>
        </div>
       
        {/* ... rest of your code ... */}
        <div style={{textAlign: 'right', marginRight: '2%' }} className="col-3 col-md-4">
        {user ?
            <div>
                <p>{user.email} &nbsp; &nbsp;  
                <button className='btn btn-primary' onClick={logout}>Logout</button> </p>
            </div> :
           ''
        }

<div className="cart-count" style={{float:"right"}}><img onClick={() => navigate('/cart')} width={40} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />&nbsp;
        {cart.length}</div>

        </div>
      </div>
      {/* ... rest of your code ... */}
      <div className="row" style={{ backgroundColor: '#f7f8f8', alignItems: 'center' }}>
        <div className="col-12">
          <nav className="navbar navbar-expand-md">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mt-2 col-12">
                <li className="nav-item col-2 col-md-1 me-3 "><a className="nav-link active" aria-current="page" href="/"><svg height="40" viewBox="0 0 36.289 20.768" alt="Olx logo"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.923h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg></a></li>
                <li className="nav-item col-10 col-md-3 mt-1 me-3">
                  <form action="">
                    
                    <select className="form-select form-select-lg">
                      {/* <option selected>Use current location</option> */}
                      <option value="1">Pakistan</option>
                      <option value="2">Canada</option>
                      <option value="3">Turkey</option>
                      <option value="4">America</option>
                      <option value="5">Saudi Arabia</option>
                    </select>
                  </form>
                </li>
                <li className="nav-item col-10 col-md-5 mt-1">
                  <form action="" className="d-flex">
                    <div className="input-group">

                      <input type="search" onChange={search} className="form-control form-control-md" placeholder="Find Cars, Mobile Phones and more..." aria-label="Recipient's username" aria-describedby="button-addon" />
                      <button className="btn btn-outline-secondary" type="submit">
                        <img width="33.9" height="33" src={icon4} className="img-fluid" alt="" />
                      </button>
                    </div>
                  </form>
                </li>
               <li id="naam" className="nav-item col-2 col-md-1 text-center mt-2 text-primary">
               
                {user ?
            <div>
               <Link onClick={() => navigate('')}><b>My Post</b></Link>
            </div> :
            <Link onClick={() => navigate('/login')}><b>Login</b></Link>
        }
                </li>
                <li className="nav-item col-4 col-md-2 mt-2">
                <button id="btn" onClick={() => navigate('/postAdd')}>+Sell</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* <Slider /> */}
    </div>
  );
}

export default Header;
