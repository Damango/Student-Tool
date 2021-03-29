import React, {useState} from 'react';
import "./CourseNavLink.css"

const CourseNavLink = (props) => {


    const [dropDown, setDropDown] = useState('course-nav-link-hidden')


    function changeDropDown(){


        if(dropDown === 'course-nav-link' ){
            setDropDown('course-nav-link-hidden')
        } else{
            setDropDown('course-nav-link')
        }
    }


    return ( <div className={dropDown}>
        <div className="course-section-header" onClick={() => {props.setCourseData(props.sectionData)}}>{props.sectionData.sectionHeader}</div>
        <button className="drop-down-button" onClick={changeDropDown}>V</button>
        <div className="course-sub-sections-container">
            {props.sectionData.subSections.map((subSection) => <div className="nav-sub-section" onClick={() => {props.setCourseData(subSection)}}>{subSection.subSectionID} {subSection.subSectionHeader}</div>)}
        </div>
    </div> );
}
 
export default CourseNavLink;