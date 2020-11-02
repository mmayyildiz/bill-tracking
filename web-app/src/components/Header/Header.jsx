import React from "react";
import './style.css'

const Header = ({title, subTitle, description}) => {

   return (
     <React.Fragment>
        <div className="header">
            <p>  {title} </p>
        </div>
        <div className="sub-header">
          <p className="sub-header-title"> {subTitle} </p>
          <p className="sub-header-title-description"> {description}
          </p>
       </div>
   </React.Fragment>
   )

}

export default Header;


