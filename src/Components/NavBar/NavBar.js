import React from 'react';
import "./NavBar.css"
const NavBar = (props) => {
    return (  <div className="side-bar-container">
    <div className="side-bar-inner-container">
        <div className="logo-container">LOGO</div>
        <div className="nav-container">
            <div className="nav-link" onClick={() => {props.changeViewState(0)}}>Dashboard</div>
            <div className="nav-link" onClick={() => {props.changeViewState(1)}}>Courses</div>
            <div className="nav-link" onClick={() => {props.changeViewState(2)}}>Practice Problems</div>
            <div className="nav-link">Articles</div>
            <div className="nav-link">Discussions</div>
        </div>
    </div>
</div> );
}
 
export default NavBar;