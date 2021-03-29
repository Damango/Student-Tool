import React, { useState, useEffect } from 'react';
import axios from 'axios'
import BadgeCard from "../BadgeCard/BadgeCard"
import RecentCourses from "../RecentCourses/RecentCourses"
import SuggestedCourses from "../SuggestedCourses/SuggestedCourses"
import PracticeBoard from "../PracticeBoard/PracticeBoard"
import Courses from "../Courses/Courses"
import CourseView from "../CourseView/CourseView"
import NavBar from "../NavBar/NavBar"
import "./StudentTool.css"
const StudentTool = (props) => {


    const [viewState, setViewState] = useState(0)
    const [recentCourses, setRecentCourses] = useState([])
    const [studentLevel, setStudentLevel] = useState(0)
    const [courseData, setCourseData] = useState()
    const [navBarData, setNavBarData] = useState()



    useEffect(() => {
        let testInfo;
        let theLevel
        axios.get('http://127.0.0.1:5000/students/605c7f3d2c93243eb49f268e').then((res) => {
          
            console.log(res.data)
            testInfo = res.data.courses;
            theLevel = res.data.level
        })

        setTimeout(() => {
            
            setRecentCourses(testInfo)
            setStudentLevel(theLevel)
        }, 100)

    }, [])



    function openCourseView(sectionBlock, entireSection){

        setCourseData(sectionBlock)
        setNavBarData(entireSection)
        setViewState(5)

    }




    function changeViewState(stateView){
        setViewState(stateView)
    }


    function renderCourses(){

        if(viewState === 0){
            return(<div className="main-view-inner-container">
            <div className="module-container">
              <RecentCourses courses={recentCourses}/>
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
        </div>)
        }
        
        else if(viewState === 1){
            return(<Courses openCourseView={openCourseView}/>)
        }









        else if(viewState === 5){
            return(<CourseView data={courseData}/>)
        }
    }



    return (<div className="student-tool-container">

            <NavBar changeViewState={changeViewState} viewState={viewState} navBarData={navBarData} setCourseData={setCourseData}/>


       
        <div className="main-view-container">
            <div className="main-view-header">

                <div className="header-date">March 21, 2021</div>
                <div className="header-profile"></div>
            </div>

            {renderCourses()}
        </div>

    </div >);
}

export default StudentTool;