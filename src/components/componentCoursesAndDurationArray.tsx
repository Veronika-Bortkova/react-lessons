import type {FC} from "react";
import type {ICoursesAndDuration} from "../models/ModelCoursesAndDuration.ts";
type TypecomponentCoursesAndDurationArray = {
    course: ICoursesAndDuration;
}

const ComponentCoursesAndDurationArray:FC<TypecomponentCoursesAndDurationArray> = ({course}) =>{
    return (
<div className="course">
    <h1>{course.title}</h1>
    <p>{course.monthDuration}</p>

</div>
    );
};

export default ComponentCoursesAndDurationArray