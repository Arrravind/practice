import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import image1 from './media/img1.jpg'
// import kratos from './media/kratos.jpeg'
// import Pn from './components/Pn'
// import Leap from './components/Leap'
// import Routing from './components/Routing';
// import ProfileList from './components/ProfileList';
import ShoppingCart from './components/ShoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App title="Moon" img={image1} likes={50} comments={2} shares={1}/>
    <App title="Kratos Mass" img={kratos} likes={50000} comments={2000} shares={1000}/>
    <App title="Luffy Masssss" likes={500000} comments={200000} shares={10000} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTluWqOfbeFD3zsr7BseGhbti6pDcrdoB9w&s" />
    <br/>
    <Pn />
    <br/>
    <Leap year={2024}/>
    <Leap year={2006}/> 
    <Pn />
    <Leap />
    <Routing />*/}
    <ShoppingCart />
  </div>
);

