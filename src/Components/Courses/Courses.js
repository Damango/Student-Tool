import React from 'react';
import "./Courses.css";
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

        <div className="math-category course-column">
            <div className="category-header math">Mathematics</div>
            <div className="course-list">{data.math.map((data) => <div className="course">{data.sectionTitle}</div>)}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header math">Computer Science</div>
            <div className="course-list">{data.computerScience.map((data) => <div className="course">{data.sectionTitle}</div>)}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header math">Biology</div>
            <div className="course-list">{data.computerScience.map((data) => <div className="course">{data.sectionTitle}</div>)}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header math">Chemistry</div>
            <div className="course-list">{data.computerScience.map((data) => <div className="course">{data.sectionTitle}</div>)}</div>
        </div>

        
        <div className="computer-science-category course-column">
            <div className="category-header math">Chemistry</div>
            <div className="course-list">{data.computerScience.map((data) => <div className="course">{data.sectionTitle}</div>)}</div>
        </div>

        
    </div> );
}
 
export default Courses;