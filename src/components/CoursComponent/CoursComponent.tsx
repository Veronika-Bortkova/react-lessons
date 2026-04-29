import "./CoursComponent.css"
import type {ICourseAndDuration} from "../../models/CourseAndDuration.tsx";
import type {FC} from "react";
type PropsType = {
    course: ICourseAndDuration;
}
const CoursComponent:FC<PropsType> = (({course}) => {
    return (
<div className={"block"}>
        <h1>{course.title}</h1>
        <p>{course.monthDuration} month</p>
</div>
    );
}
)
export default CoursComponent;