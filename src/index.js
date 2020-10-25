import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Card2 from './Card2';
import Ilink from './Ilink';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.Fragment>
    <App />
    {Ilink.map(ncard)} 
    <Footer/>
  </React.Fragment>,
  document.getElementById('root')
);

function ncard(val,index){

  return(
  
  <Card2
  imgsrc={val.imgscr}
  title={val.title}
  sname={val.sname}
  links={val.links}
  />
  
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
