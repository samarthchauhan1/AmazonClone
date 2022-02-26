import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'
import { authen } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders';
import Footer from './Footer'


const promise = loadStripe("pk_test_abveXZZAPErA799xwlKKy6qa00Bd4HTm1n");


function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    authen.onAuthStateChanged(authUser => {
      console.log('The User >>>', authUser);


      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }

      else{
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      }
    })
    
  }, [])


  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login"
            element={<>  <Login/>  </>} >
          </Route>
          <Route path="/checkout" 
            element={<> <Header/>  <Checkout/>  </>}>
          </Route>

          <Route path="/orders" 
            element={<> <Header/>  <Orders/>  </>}>
          </Route>

          <Route path="/payment" 
            element={<> <Header/> 
              <Elements stripe={promise}>
                <Payment/>
              </Elements> 
            </>}>
          </Route>



          <Route path="/" 
            element={<> <Header/>   <Home/>  <Footer/></>}>
          </Route>
        </Routes>

      </div>  
    </Router>
    
  );
}

export default App;
