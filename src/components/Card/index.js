import img from './img.png';
 import img2 from './yellow.png';
import {useNavigate , Link} from "react-router-dom"
import React, { useState } from 'react';

function Card (props){
  const { title, description, id, image, amount } = props.item;
  const [like, setLike] = useState(false);
    //const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLikeClick = (e) => {
      e.stopPropagation(); // Event propagation ko rokne ke liye
  
      // Like toggle logic
      setLike(!like);
    };
    return (
      <div className="col">
       <div className="card h-100" onClick={() => navigate(`/detail/${id}`)}>
    <img style={{height:'250px'}} src={image} className="card-img-top w-100 p-1" alt=""/>

            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description}</p>
              </div>


          <div style={{ paddingLeft: '5%', paddingBottom: '5%', display: 'flex', justifyContent: 'space-between' }}>
           <h3 className="card-text">Rs.{amount}</h3>
           <div className="float-right" style={{ paddingRight: '5%' }}>

             {like ? (
               <img width={30} onClick={handleLikeClick} src={img2} alt="Liked" />
             ) : (
               <img width={30} onClick={handleLikeClick} src={img} alt="Like" />
             )}
            
           </div>
         </div>
       </div>
     </div>
   );

}

export default Card;