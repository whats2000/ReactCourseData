import { Component } from "react";

// 因為我們有多個組件會用到 `Course` 這個型別，所以我們將它抽離出來，並放到 `types` 資料夾中。
import { Course } from "../types/Course";
import CourseRow from "./CourseRow.tsx";

interface ICourseListStates {
  courses: Course[];
}

class CourseList extends Component<{}, ICourseListStates> {
  state: ICourseListStates = {
    courses: []
  };

  componentDidMount() {
    /**
     * 透過 `fetch` 來取得課程資料，並將資料設定到 `state` 中。
     * API 位址：`https://whats2000.github.io/NSYSUCourseAPI/1122/20240506_031415/page_1.json`
     */
    // You code here



    // End of your code
  }

  render() {
    return (
      <>
        {this.state.courses.map(course => (
          <CourseRow key={course.id} course={course} />
        ))}
      </>
    );
  }
}

export default CourseList;
