import React from 'react';
import "./CourseView.css"
const CourseView = (props) => {

    console.log(props.data)
    return (<div className="course-view-container">
        
        {props.data.sections.map((section) => <div className="section-container">

            <div className="section-header">{section.sectionHeader}</div>
            {section.textSections.map((sectionText) => <div className="section-text">{sectionText.text}</div>)}
        </div>)}
        
        
        </div>  );
}
 
export default CourseView;