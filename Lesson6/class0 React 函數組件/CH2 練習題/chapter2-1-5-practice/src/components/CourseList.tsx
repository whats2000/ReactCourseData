// 嘗試改寫成 React Functional Component 的形式。
// 你應該引入 useState, useEffect 這兩個 React Hooks 來完成這個練習。
import { Component } from "react";

import { Course } from "../types/Course";
import CourseRow from "./CourseRow.tsx";

// 顯然這個物件 state 定義在 Functional Component 是不會用的，請改用 useState
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
     * API 位址：`https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json`
     * 以上位置若找不到變更，請自行修改替換 `20240517_101137` 成可用日期。查看當前最新時間：https://whats2000.github.io/NSYSUCourseAPI/1122/version.json
     */
    fetch("https://whats2000.github.io/NSYSUCourseAPI/1122/20240517_101137/page_1.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ courses: data });
      });
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
