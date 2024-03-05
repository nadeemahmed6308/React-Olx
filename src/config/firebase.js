import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc , collection, getDocs, getDoc, addDoc, where,query,} from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref,uploadBytes, getDownloadURL } from "firebase/storage";
 //import { db, storage } from '../../config/firebase';

const firebaseConfig = {   
  apiKey: "AIzaSyCnMnsBWvKrWV6x5O-SzdBL9kEP_jdcWds",
  authDomain: "nadeem-48a3f.firebaseapp.com",
  projectId: "nadeem-48a3f",
  storageBucket: "nadeem-48a3f.appspot.com",
  messagingSenderId: "558705787773",
  appId: "1:558705787773:web:8ac24c5cc441f656818214"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage();

export async function getAllProducts(){
const querySnapshot = await getDocs(collection(db, "ads"));
const products = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  products.push({id:doc.id,...doc.data()})
});
return products
}

export async function getSingleAd(id){
  console.log(id)
const docRef = doc(db, "ads", id );
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}

export async function Registered(userInfo){
  const {name,email,password,number} = userInfo
 const {user:{uid}}=await createUserWithEmailAndPassword(auth, email, password)
 const Userref = doc(db, "users", uid)
 await setDoc(Userref, {name,email});
alert('You Are Registered Sucessfully')
}
export async function login(userInfo){
const {email,password} = userInfo
await signInWithEmailAndPassword(auth, email, password)
alert('logged in sucessfully')
}

export async function ForgetPassword(email) {
  await sendPasswordResetEmail(auth, email[0].value)
     .then(() => {
       // Password reset email sent!
       // Handle success, e.g., show a success message to the user
       console.log("Password reset email sent successfully");
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // Handle error, e.g., show an error message to the user
       console.error("Error sending password reset email: ", errorMessage);
     });
     console.log(email[0].value);
 }

 export async function getUsers(id) {
  console.log(id)
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data()
}

export async function myAdd(uid) {
  const q = query(collection(db, "ads"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  // Extract data from the query snapshot
  const ads = [];
  querySnapshot.forEach((doc) => {

    const ad = doc.data()
    ad.id = doc.id

    ads.push(ad)
  });

  return ads;
}

export async function category(inputValue) {
  const adsRef = collection(db, "ads")
  const querySnapshot = await getDocs(query(adsRef, where("category", "==", inputValue)))
  const ads = []
  querySnapshot.forEach((doc) => {
      const ad = doc.data()
      ad.id = doc.id

      ads.push(ad)
  });
  return ads
}

 // singule image post function
export async function postAdToDb(ad){
try {
  const storageRef = ref(storage,  `ads/${ad.image.name}`);
  await uploadBytes(storageRef, ad.image)
  const url = await getDownloadURL(storageRef)
  ad.image = url
  await addDoc(collection(db, "ads"),ad )
  alert('Data added successfully!')
}catch(e){
console.log(e.message)
throw new Error('Failed to add data to the database')
}
}


 export async function logout() {
  return await signOut(auth)
}

//////////////////////////////////////////////////////////////


// // // multiple image post function
// export async function postAdToDb(ad){
//   try {
//     // Step 1: Upload images to Storage
//     var images = [];
//     const imageUrls = await Promise.all(ad.image.map(async (image) => {
//       const storageRef = ref(storage, `ads/${image.name}`);
//       await uploadBytes(storageRef, image);
//       const imageUrl = await getDownloadURL(storageRef);
//       images.push(imageUrl); 
//       return images;
//     }));

//     // Step 2: Update ad object with image URLs
//     ad.image = images;

//     // Step 3: Add data with URLs to the database
//     await addDoc(collection(db, "ads"), ad);

//     alert('Data added successfully!');
//   } catch (error) {
//     console.error(error);

//     if (error.code === 'storage/unauthorized') {
//       alert('Storage unauthorized access error. Check your Firebase Storage rules.');
//     } else {
//       alert(`Error: ${error.message}`);
//     }
//   }
// }

//  //forgot password
//  export const forgotPassword =()=>{
//   updatePassword(user, newPassword).then(() => {
//     alert("something is wrong")
//   }).catch((error) => {
//     alert("passowrd changed successfully")
//   });
// }

// export function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <>
//       <button
//         className="sign-in login-with-google-btn"
//         onClick={signInWithGoogle}
//       >
//         Sign in with Google
//       </button>
//     </>
//   );
// }


// export function logout() {
//   return (
//     auth.currentUser && (
//       <a className="signOutButton" href="" onClick={() => auth.signOut()}>
//         <img className="signOutImage" src={auth.currentUser.photoURL} />
//         <div className="logout">LOGOUT</div>
//       </a>
//     )
//   );
// }

// export default Logout;