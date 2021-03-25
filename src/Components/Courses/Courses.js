import React from 'react';
import data from "../../CourseData/data.json"
const Courses = (props) => {



    //Courses will displayed in sections like math, science, computer science, biology
    // Should probably arange based on difficulty of the course or how popular
    // Different areas of the courses list will show different courses like 'popular' or 'new'
    
    
    /*
    
    {
        "math":[]
    }
    
    
    */ 
    console.log(data.courses)
    return ( <div className="courses-container">

        {data.math.map((data) => <div className="course-list">{data.sectionTitle}</div>)}
    </div> );
}
 
export default Courses;