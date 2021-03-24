import React, { useState, useEffect } from 'react';
import axios from 'axios'
import BadgeCard from "../BadgeCard/BadgeCard"
import RecentCourses from "../RecentCourses/RecentCourses"
import SuggestedCourses from "../SuggestedCourses/SuggestedCourses"
import PracticeBoard from "../PracticeBoard/PracticeBoard"
import "./StudentTool.css"
const StudentTool = (props) => {

    const [recentCourses, setRecentCourses] = useState([])
    const [studentLevel, setStudentLevel] = useState(0)



    useEffect(() => {

        let testInfo;
        let theLevel

        axios.get('http://127.0.0.1:5000/students/6057e06854631d274c4f7ac4').then((res) => {
            //setStudentInfo(res.data)
            console.log(res.data)
            testInfo = res.data.courses;
            theLevel = res.data.level



        })


        setTimeout(() => {

            setRecentCourses(testInfo)
            setStudentLevel(theLevel)
            //alert(testInfo)
        }, 100)


        //alert(recentCourses)





    }, [])








    return (<div className="student-tool-container">





        <div className="side-bar-container">
            <div className="side-bar-inner-container">
                <div className="logo-container">LOGO</div>
                <div className="nav-container">
                    <div className="nav-link">Dashboard</div>
                    <div className="nav-link">Courses</div>
                    <div className="nav-link">Practice Problems</div>
                    <div className="nav-link">Articles</div>
                    <div className="nav-link">Discussions</div>
                </div>
            </div>
        </div>
        <div className="main-view-container">
            <div className="main-view-header">

                <div className="header-date">March 21, 2021</div>
                <div className="header-profile"></div>
            </div>

            <div className="main-view-inner-container">
                <div className="module-container">
                    <RecentCourses courses={recentCourses} />
                </div>
                <div className="module-container">
                    <BadgeCard level={studentLevel} />
                </div>
                <div className="module-container">
                    <SuggestedCourses />
                </div>
                <div className="module-container">
                    <PracticeBoard />
                </div>
            </div>
        </div>

    </div >);
}

export default StudentTool;