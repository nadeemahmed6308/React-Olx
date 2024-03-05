
import img from '../code-img3.jpg'
import { onAuthStateChanged } from 'firebase/auth';



import {auth, postAdToDb } from "../../config/firebase"
import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom"

function PostAdd(){
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [latitude,setLatitude] = useState()
  const [longitude,setlongitude] = useState()
  //const [images, setImages] = useState([]);
  //const [category , setCategory] = useState()
  //const [location ,setLocation] = useState({})
  //const date = new Date();
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log('img', image)
  };

   async function Post(){
     try {
            // Perform any additional validation if needed
      
            if (!title || !description || !brand || !price || !image) {
              alert('Please fill in all the inputs!');
              return;
            }
    
            const ad = {
              title,
              description,
              brand,
              price,
              longitude,
              latitude,
              image ,
              //location: {latitude:location.latitude, longitude: location.longitude}
              // category: uid
            };
      
            await postAdToDb(ad);
        navigate('/')
      }catch(e){
        alert(e.message)
      }
    }

    const pic = {
      background: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
      margin: 0,
      padding: 0
    };

    return <div style={pic}>
<h1 style={{ textAlign: 'center'}}>POST YOUR ADDS</h1>
<div style={{display: 'flex', justifyContent: 'center'}} > 
<div class="container">
<div  class="card" style={{width: '70%', marginTop: '5%', margin: 'auto'}}>
<div  class="card-body">
<h4 class="card-title">INCLUDE SOME DETAILS</h4>
<p>Add Title
          <input className="input" class="border border-success p-2 mb-2" style={{width: '100%'}} type="text" name="" id="title" onChange={(e) => setTitle(e.target.value)}  />
          Mention the key features of your item
        </p>
       <p>Add Description
            <input className="input" class="border border-success p-4 mb-2" style={{width: '100%', height:'150px'}}  type="text" name="" id="description" onChange={(e) => setDescription(e.target.value)} />
            Include condition, features and reason for selling
         </p>
         {/* <p>Brand
            <input className="input" class="border border-success p-2 mb-2" style={{width: '100%'}} type="text" name="" id="brand" onChange={(e) => setBrand(e.target.value)} />
          </p> */}
          <p>Location Latitude
            <input className="input" class="border border-success p-2 mb-2" style={{width: '100%'}} type="number" name="" id="brand" onChange={(e) => setLatitude(e.target.value)} />
          </p>
          <p>Location Longitude
            <input className="input" class="border border-success p-2 mb-2" style={{width: '100%'}} type="number" name="" id="brand" onChange={(e) => setlongitude(e.target.value)} />
          </p>
          <hr class=" opacity-100" />
          <h4>SET A PRICE</h4>
          <p>Price
            <input className="input" class="border border-success p-2 mb-2" style={{width: '100%'}} type="text" name="" id="price" onChange={(e) => setPrice(e.target.value)} />
</p>
<p>picture
  <input className="input" multiple type="file" onChange={handleImageChange} class="border border-success p-2 mb-2" style={{width: '100%'}} />
  For the cover picture we recommend using the landscape mode.
</p>

{/* {images.length > 0 && (
               <div>
                 {images.map((image, index) => (
                   <img
                     key={index}
                     src={URL.createObjectURL(image)}
                     alt={`Preview ${index + 1}`}
                     style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                   />
                 ))}
               </div>
             )} */}

         {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                style={{ width: '100%', height: 'auto', marginTop: '10px' }}
              />
            )}

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button" onClick={Post}>Post Now</button>

</div>
</div> 
</div>
</div>
</div>
    
    
    </div>
}
export default PostAdd;

//////////////////////////////////////////////////////////////

// import { postAdToDb } from "../../config/firebase";
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import img from '../code-img3.jpg';

// function Sell() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [images, setImages] = useState([]); // Multiple images ke liye array
//   const date = new Date();

//   const handleImageChange = (e) => {
//     const selectedFiles = e.target.files;
//     setImages([...selectedFiles]); // Multiple images ke liye array mein push karein
//   }

//   async function Post() {
//     try {
//       if (!title || !amount || !description || images.length === 0) {
//         alert('Barah-e-karam, tamam input fields bharein!');
//         return;
//       }

//       const ad = {
//         title,
//         amount,
//         description,
//         images,
//         date
//       };
//       await postAdToDb(ad);
//       navigate('/');
//     } catch (e) {
//       alert(e.message);
//     }
//   }
      
//   const picStyle = {
//     background: `url(${img})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '100%',
//     margin: 0,
//     padding: 0
//   };
      

//   return (
// <div style={picStyle} >
//       <h1 className="text-white" style={{ textAlign: 'center' }}>APNA AD POST KAREN</h1>
//       <div className="container">
//         <div className="card" style={{ width: '50%',  marginLeft: '25%', marginTop: '2%', padding: '5%', paddingBottom: '2%' }}>
//           <div className="card-body">
//             <h4 className="card-title">KUCH DETAILS SHAAMIL KAREN</h4>
//             <p>
//               Title Daalein
//               <input
//                 className="form-control mb-2"
//                 type="text"
//                 id="title"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               Apne cheez ke kuch ahem features batayein
//             </p>
//             <p>
//               Description Daalein
//               <textarea
//                 className="form-control mb-2"
//                 id="description"
//                 rows="2"
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//               Condition, features, aur bechne ka reason shaamil karen
//             </p>

//             <hr className="opacity-100" />
//             <h4>PRICE TAY KAREN</h4>
//             <p>
//               Amount Daalein
//               <input
//                 className="form-control mb-2"
//                 type="text"
//                 id="amount"
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//             </p>
//              <p>
//               Tasweer Daalein
//               <input
//                 className="form-control mb-2"
//                 onChange={handleImageChange}
//                 type="file"
//                 multiple // Multiple files choose karne ke liye attribute add karein
//               />
//             </p>
       //     {images.length > 0 && (
  //               <div>
  //                 {images.map((image, index) => (
  //                   <img
  //                     key={index}
  //                     src={URL.createObjectURL(image)}
  //                     alt={`Preview ${index + 1}`}
  //                     style={{ width: '100%', height: 'auto', marginTop: '10px' }}
  //                   />
  //                 ))}
  //               </div>
  //             )}

//            <div class="d-grid gap-2 col-6 mx-auto">
 // <button class="btn btn-primary" type="button" onClick={Post}>Post Now</button>

 //</div>
  //</div> 
 // </div>
 // </div>
 // </div>
      
      
    //  </div>
  //}
 // export default Sell;
               

///////////////////////////////////////////////////////////////////////////////

// function Sell() {

//     function onFileChange(event) {
//         const selectedFiles = event.target.files;
//         setImages([...selectedFiles]);
//     }
//     useEffect(()=>{
//         console.log(category);

//     },[category])
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((location) => {
//             const { latitude, longitude } = location.coords
//             console.log(location);
//             setLocation({ latitude, longitude })
//         })
//     }, []) 
//     function onSubmit() {
//         onAuthStateChanged(auth, async (user) => {
//             if (user) {
//                 try {
//                     const uid = user.uid;

//                     const allInputs = document.getElementsByClassName('inpt');
//                     const title = allInputs[0];
//                     const description = allInputs[1];
//                     const amount = allInputs[2];
//                     const address = allInputs[3]


//                     const ad = {
//                         title: title.value,
//                         description: description.value,
//                         amount: amount.value,
//                         address:address.value,

//                         image:images,
//                         location:{latitude:location.latitude,longitude:location.longitude},
//                         category,
//                         uid
//                     };
                  
//                   await  postAdToDb(ad);
//                   setImages([]);
//                   address.value = '';
//                   title.value = '';
//                   description.value = '';
//                   amount.value = '';
//                   location.value =''
//                   setCategory('')

//                 } catch (e) {
//                     alert(e);
//                 }
//             } else {
//                 console.error('User or user name is undefined');
//             }
//         });
//         onAuthStateChanged(auth, (user) => {
//             if (!user) {
//                 navigate('/');
//             }
//         });
//     }

//     return (
//         <div className='body'>
//             <div className="Cont">
//                 <h3 className='h3'>Post Ad Form</h3>

//                 <input className='inpt' placeholder="Title" />
//                 <input className='inpt' placeholder="Description" />
//                 <input className='inpt' type="number" placeholder="Amount" />
//                 <input className='inpt' placeholder="Address" />
//                 <h2 className='btns'>Category</h2>
//                 <div className='btns'>

//                     <ul style={{display:'flex',listStyle:'none'}}>
//                     <li>bedsheet<input onClick={() => setCategory('bedsheet')}  name='category' placeholder='bedsheet' type='radio'/></li>
//                     <li>tv<input onClick={() => setCategory('tv')} name='category' placeholder='tv' type='radio' /></li>

//                     <li>home<input onClick={() => setCategory('home')} name='category' placeholder='home' type='radio'/></li>
//                     <li>Bike<input onClick={() => setCategory('bike')} name='category' placeholder='Bike' type='radio'/></li>
//                     <li>car<input onClick={() => setCategory('car')} name='category' placeholder='car' type='radio'/></li>
//                     </ul>
//                 </div>



//                 <input
                
//                     className='inpt image-input'
//                     type="file"
//                     multiple
//                     onChange={onFileChange}
//                 />

//                 <button className='button' onClick={onSubmit}>Submit</button>
//             </div>
//         </div>
//     );
// }

// export default Sell;





