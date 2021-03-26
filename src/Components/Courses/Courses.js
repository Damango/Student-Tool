import React from 'react';
import "./Courses.css";
import data from "../../CourseData/data.json"
import Course from "./Course/Course"
const Courses = (props) => {


    return ( <div className="courses-container">

        <div className="math-category course-column">
            <div className="category-header math">Mathematics</div>
            <div className="course-list">{data.math.map((data) =>  <Course openCourseView={props.openCourseView} data={data} color={"#ff4757"}/> )}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header computer-science">Computer Science</div>
            <div className="course-list">{data.computerScience.map((data) => <Course openCourseView={props.openCourseView} data={data} color={"#3742fa"}/>)}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header biology">Biology</div>
            <div className="course-list">{data.computerScience.map((data) => <Course openCourseView={props.openCourseView} data={data} color={"#1abc9c"}/>)}</div>
        </div>

        <div className="computer-science-category course-column">
            <div className="category-header chemistry">Chemistry</div>
            <div className="course-list">{data.computerScience.map((data) => <Course openCourseView={props.openCourseView} data={data} color={"#2ed573"}/>)}</div>
        </div>

        
        <div className="computer-science-category course-column">
            <div className="category-header engineering">Engineering</div>
            <div className="course-list">{data.computerScience.map((data) => <Course openCourseView={props.openCourseView} data={data} color={"#e67e22"}/>)}</div>
        </div>

        
    </div> );
}
 
export default Courses;