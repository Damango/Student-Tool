import React from 'react';
import CourseNavLink from "./CourseNavLink/CourseNavLink"
import "./NavBar.css"
const NavBar = (props) => {




if(props.viewState === 5){
    return(

        <div className="side-bar-container">

            <div className="side-bar-inner-container">
                <div className="close-course-nav" onClick={() => {props.changeViewState(0)}}>X</div>

            <div className="course-header">{props.navBarData.sectionTitle}</div>
            <div className="course-nav-container">
                {props.navBarData.sections.map((section) =>  <CourseNavLink sectionData={section} setCourseData={props.setCourseData}/>)}
            </div>
            </div>
            

        </div>


    )
}





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