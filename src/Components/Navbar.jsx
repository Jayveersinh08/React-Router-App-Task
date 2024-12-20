import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../AuthContext";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavbar,setisNavbar] = useState(false);
      const {  isAuthenticated } = useAuth();
  
  const handleButton=()=>{
    setisNavbar(!isNavbar);
    }
  return (<>
    <div class=" header d-flex justify-content-between justify-content-md-around align-items-center bg- light" >
      <div class="logo d-flex flex-column align-items-center ps-4">
        <div class="void py-1 fw-bold">VOID</div>
        <div class="tag">Stories About Dreams</div>
      </div>
      <div class="" role="button" >
        <div class="btn d-md-none pe-4" onClick={handleButton} ><CiMenuFries style={{ height: 30, width: 30, color:"black" }} /></div>
      </div>
      <div class={`navbar ${isNavbar?'mobile':'web'} d-md-flex `}>
          <ul class="d-md-flex align-items-center p-md-0 m-0 list-unstyled py-3">
            <li class="px-4 py-2 py-md-0">
              <NavLink class=" nav-items " className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">Home</NavLink>
            </li>
            <li class="px-4 py-2 py-md-0">
              <NavLink class=" nav-items " className={({ isActive }) => (isActive ? 'active-link' : '')} to="/blogs">Blogs</NavLink>
            </li>
            <li class="px-4 py-2 py-md-0">
              <NavLink class=" nav-items" className={({ isActive }) => (isActive ? 'active-link' : '')} to="/about">About</NavLink>
            </li>
            <li class="px-4 py-2 py-md-0">
              <NavLink class=" nav-items" className={({ isActive }) => (isActive ? 'active-link' : '')} to="/Login">{isAuthenticated?"Logout":"Login"}</NavLink>
            </li>
          </ul>
      </div>
    </div>
    <div class="container">
      <hr></hr>
    </div>

  </>
  )
}

export default Navbar;
