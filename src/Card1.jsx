import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';

const card_set = {
// width:'20%',
height:'165px',
}



 const Card1 = () =>{
     return(
 <React.Fragment>
<div className="container">
  <div className="row color_row">
  <div className="col-md-10 last_setting"><b>Recent Research</b></div>
    <div className="col-md-4 ">

    <div className="card card_setting">
  <img src="https://i.pinimg.com/originals/fb/38/ea/fb38ea79e3200f1edc711b05b6d49c00.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">2700</h5>
    <p className="card-text"> Apple Airpods</p>
    
  </div>
</div>


  </div>

  <div className="col-md-4 ">

    <div className="card card_setting">
  <img src="https://i.pinimg.com/originals/fb/38/ea/fb38ea79e3200f1edc711b05b6d49c00.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">2700</h5>
    <p className="card-text"> Apple Airpods</p>
    
  </div>
</div>


  </div>

  <div className="col-md-4 ">

    <div className="card card_setting">
  <img src="https://i.pinimg.com/originals/fb/38/ea/fb38ea79e3200f1edc711b05b6d49c00.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">2700</h5>
    <p className="card-text"> Apple Airpods</p>
    
  </div>
</div>


  </div>





    </div>
  </div>


  </React.Fragment>
  )
  }
  export default Card1;