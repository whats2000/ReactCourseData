import React from "react";
import { Course } from "../types/Course";

interface ICourseProps {
  course: Course;
}

const CourseRow: React.FC<ICourseProps> = ({course}) => {

  /**
   * 將課程名稱(`name`)、學分(`credit`)、老師(`teacher`)、教室(`room`) 顯示在畫面上。
   */
  return (
    <div style={{border: "1px solid #000", padding: "10px"}}>
      <h1>{course.name}</h1>
      <h2>{course.credit}</h2>
      <h3>{course.teacher}</h3>
      <h4>{course.room}</h4>
    </div>
  );
}

export default CourseRow;
