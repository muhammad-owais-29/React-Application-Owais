import React from 'react';
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import AddIcon from '@material-ui/icons/Add';
import Nav from "./Nav";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    return(
        <React.Fragment>
       
       <div className = "container-fluid">
       <div className = "row">
       <div class="col-md-1 logo-1">
             <h2>Olx</h2>
         </div>
           <div className ="col-md-3">
               
           <select className="form-control option " id="exampleFormControlSelect1">
                <option>Pakistan</option>
                <option>China</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Usa</option>
              </select>

         </div>

         <div className="col-md-5 col-sm-2">
            {/* <input class="form-control search" type="search" placeholder="Find Cars,Mobile Phones and more..."aria-label="Search"/> */}
           

            <form className="example" action="">
  <input type="text" placeholder="Find Cars,Mobile Phones and more..." name="search"/>
  <button type="submit"><span className="icon"><PageviewRoundedIcon className="svg_icons"/></span></button>
</form>


         </div>

         <div className="col-md-1 col-sm-2">
             
         <h5 className="para_1"><b>Login</b></h5>
         
         
         </div>

    

         <div className="col-sm-2 ">
             {/* <button class="button">+ Sell</button> */}
            <button type="button" className="btn btn-secondary button"><AddIcon /> Sell</button>

         </div>

           </div>
       </div>
       
       

       

        </React.Fragment>
    )

}

export default Header;