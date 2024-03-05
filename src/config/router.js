import {createBrowserRouter,RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Dashboard from "../Veiws/Dashboard";
import Detail from "../Veiws/Detail";
import Login from "../Veiws/Login";
import SignUp from "../Veiws/SignUp";
import PostAdd from "../Veiws/PostAdd";
//import PostAdd from "../Veiws/PostAdd";
import Chat from "../Veiws/Chat";
import Header from "../components/Header";
import Categories from '../components/Categories';
import Categories2 from '../components/Categories2';
import Slider from '../components/Slider';
import Slider2 from '../components/Slider2';
import Footer from "../components/Footer";
import Loader from '../components/Loader';
import Forget from "../Veiws/Login/ForgotPassword";
import Cart from '../components/Cart';



const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
               path: "/",
               element: <Dashboard />,
             },
             {
               path: "/detail/:id",
               element: <Detail />,
             },
             {
              path: "/cart",
              element: <Cart />,
            },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },

  {
    path: "/postAdd",
    element: <PostAdd />,
  },
  // {
  //   path: "/postAdd",
  //   element: <PostAdd />,
  // },
  {
    path: "/chat",
    element: <Chat />,
  },
  
]);


  function Layout() {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     setUser(user);
    //     setLoading(false);
    //   });
  
    //   return () => unsubscribe();
    // }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        const path = window.location.pathname;
        if (user) {
          // Agar user logged in hai
          if (path === '/signup' || path === '/login') {
            navigate('/');
          }
        } else {
          // Agar user logged in nahi hai
          if (path === '/postAdd' || path === '/chat') {
            navigate('/login');
          }
        }
    }, [window.location.pathname, user])

    if (loading) return <div><Loader /></div>

    return <div>
    <Header user={user} />
    <Slider />
   <Categories />
   <Categories2 />
   
    <Outlet />

    <Slider2 />
    <Footer />
    </div>
  }

  function Router(){
    return  <RouterProvider router={router} />
  }
  export default Router;

  //////
  // import Myadd from "../view/Myadd";
  // import Category from "../view/Category";
  //       {
  //         path:"/myadd",
  //         element:<Myadd/>
  //       },{
  //         path:"/category/:name",
  //         element:<Category/>
  //       }
