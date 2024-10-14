import React from 'react'
import PropTypes from 'prop-types';
import '../Css/Navbar.css'
import { Link } from 'react-router-dom';
function Navbar(props)
{
    return(
        <>
        {/* <h1 className='h1'>Hi i am maaz</h1> */}
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>{props.about}</Link>
        </li>
       
       
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  about:PropTypes.string,
}

Navbar.defaultProps={
  title:"I am a title",
  about:"I am a about"
}
//if we put is required here so it can be show error if the value is not pass from one component to another

export default Navbar;