import "./FullCorsesComponent.css"
import {coursesArray} from "../../data/coursesArray.ts";
import CourseComponent from "../CourseComponent/CourseComponent.tsx";


const FullCorsesComponent = () => {
    return (
        <>
            {
                coursesArray.map((item, index) => <CourseComponent propCourse={item} key={index}/>)
            }
        </>
    );
};

export default FullCorsesComponent;