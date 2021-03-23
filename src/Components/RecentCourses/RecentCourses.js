import React, { useState } from 'react';
import "./RecentCourses.css"
const RecentCourses = (props) => {




    return (<div className="recent-courses-container">
        {props.courses.map((course) => <div>{course.title}</div>)}
    </div>);
}

export default RecentCourses;