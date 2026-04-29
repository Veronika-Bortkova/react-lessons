import "./CourseComponent.css"
import type {ICourse} from "../../models/coursesArrayModel.tsx";
import type {FC} from "react";
type PropType = {
    propCourse: ICourse;
}
const CourseComponent:FC<PropType> = (({propCourse}) => {
    let arrModuls:string[] = propCourse.modules;
    let stringModul:string = arrModuls.join(", ")
    return (
        <div className={"block"}>
            <h1>{propCourse.title}</h1>
            <p>monthDuration - {propCourse.monthDuration}</p>
            <p>hourDuration - {propCourse.hourDuration}</p>
            <p>modules - {stringModul}</p>
        </div>
    );
}
)
export default CourseComponent;