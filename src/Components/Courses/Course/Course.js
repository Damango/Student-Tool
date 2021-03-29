import React from 'react';
import "./Course.css"
const Course = (props) => {
    return ( <div className="course" onClick={() => {props.openCourseView(props.data.sections[0], props.data)}}>


        <div className="hover-icon" style={{backgroundColor: props.color}}></div>

        <div className="course-title">
        {props.data.sectionTitle}
        </div>
        
        
        
        
        </div> );
}
 
export default Course;