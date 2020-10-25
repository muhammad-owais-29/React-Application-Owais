import React from 'react';



const pics_4 = {
    width: '100%',
    height: '230px',
    // backgroundRepeat: 'no-repeat center',
    backgroundSize: 'cover',
}



const Footer = ()=>{
    return(
    <React.Fragment>




<div className="container-fluid">
<div className="row ">
    <div className="col-md-12">

    <img style ={pics_4} src = "https://static.c.realme.com/IN/thread/1305931689691709440.png"/>

    </div>
</div>

</div>





   <div className="container-fluid ">
  <div className="row justify-content-around setting_con">
      <div className="col-sm-3">
      <h6><b>POPULAR CATEGORIES</b></h6>
         <li>Cars</li>
         <li>Flats for rent</li>
        <li>Jobs</li>
        <li>Mobile Phones</li>
      </div>
      <div className="col-sm-3">
      <h6><b>TRENDING SEARCHES</b></h6>
         <li>Bikes</li>
         <li>Watches</li>
        <li>Books</li>
        <li>Dogs</li>
      </div>
      <div className="col-sm-2">

         <h6><b>ABOUT US</b></h6>
         <li>About OLX Group</li>
         <li>OLX Blog</li>
        <li>Contact Us</li>
        <li>OLX fro Businesses</li>

      </div>
      <div className="col-sm-2">
      <h6><b>OLX</b></h6>
         <li>Help</li>
         <li>Sitemap</li>
        <li>Legal & Privacy information</li>
      </div>
      <div className="col-sm-2">
      <h6><b>FOLLOW US</b></h6>
         <li>Help</li> 
      </div>
      
      </div> 


   </div>
<div className="container-fluid">
    <div className="row setting_r">
        <div className="col-md-9">
            <span><b>Other Countries Pakistan-South Africa-China</b></span>
        </div>
        <div className="col-md-3">
        <span><b>owais29fe@gmail.com </b></span>
        </div>
    </div>
</div>
    </React.Fragment>
    )
}
export default Footer;