import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
 

  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/MyFlat">MyFlat</Link>
          </li>
        </ul>
        
 


    </div>
  )
}

export default Navbar;


// const Links = [
//   {label: "Home", route: "/"},
//   {label: "Shop", route: "/shop"},
//   {label: "Messages", route: "/Messages"},
// ];