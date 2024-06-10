import { Component } from "react";

import { Course } from "../types/Course";

interface ICourseProps {
  course: Course;
}

class CourseRow extends Component<ICourseProps> {
  /**
   * 將課程名稱(`name`)、學分(`credit`)、老師(`teacher`)、教室(`room`) 顯示在畫面上。
   */
  render() {
    return (
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <h1>{this.props.course.name}</h1>
        <h2>{this.props.course.credit}</h2>
        <h3>{this.props.course.teacher}</h3>
        <h4>{this.props.course.room}</h4>
      </div>
    );
  }
}

export default CourseRow;
