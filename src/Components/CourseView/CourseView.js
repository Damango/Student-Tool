import e from 'cors';
import React from 'react';
import "./CourseView.css"
const CourseView = (props) => {

    console.log(props.data)



    if(props.data.subSectionBlocks != null){
        return(<div className="course-view-container">
        
        <div className="section-container">
 
             <div className="section-header">{props.data.subSectionID} {props.data.subSectionHeader}</div>
             {props.data.subSectionBlocks.map((sectionText) => <div className="section-text">{sectionText.text}</div>)}
         </div>
         
         
         </div> )
    }

    else{return (<div className="course-view-container">
        
    <div className="section-container">

         <div className="section-header">{props.data.sectionHeader}</div>
         {props.data.textSections.map((sectionText) => <div className="section-text">{sectionText.text}</div>)}
     </div>
     
     
     </div>  );}


    
}
 
export default CourseView;