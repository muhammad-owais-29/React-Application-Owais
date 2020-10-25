import React from 'react';
import Simages from './Simages';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const pics = {
    width: '100%',
    height: '250px',
    // backgroundRepeat: 'no-repeat center',
    backgroundSize: 'cover',
}

const pics_3 = {
    width: '97%',
    height: '250px',
    // position: 'absolute',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',

    // padding: '0px 0px !important',
    backgroundColor: 'white !important',
}



const Nav = () => {


    return(

<React.Fragment>
<div className = "container-fluid">
    <div className = "row row_1">
        <div className ="menu_2">ALL CATEGORIE <ExpandMoreIcon/> </div>
        <div className ="menu_1 ">Mobile Phones</div>
        <div className ="menu_1 ">Motorcycles</div>
        <div className ="menu_1 ">Cars</div>
        <div className ="menu_1 ">TV-Video-Audio</div>
        <div className ="menu_1 ">House</div>
        <div className ="menu_1 ">Tablets</div>
        <div className ="menu_1 ">Land&Plots</div>
   

    </div>
</div>

<div className="container-fluid">
<div className="row ">
    <div className="col-md-12">

    <img style ={pics} src = "https://blog.olx.com.pk/wp-content/uploads/2020/06/why-choose-olx-1.png"/>

    </div>
</div>

</div>

<div className="container-fluid">
<div className="row setting_4">
    <div className="col-md-6">

    <img style ={pics_3} src = "https://www.gizmochina.com/wp-content/uploads/2020/09/Vivo-V20-featured.png"/>

    </div>

    <div className="col-md-4">

    <img style ={pics_3} src = "https://www.hamariweb.com/images/articles/articles/137887_01.png"/>

    </div>
    <div className="col-md-2 set"></div>
</div>

</div>











</React.Fragment>

    )
}

export default Nav;
