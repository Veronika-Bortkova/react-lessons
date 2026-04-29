import "./CoursesComponent.css"

import {coursesAndDurationArray} from "../../data/coursesAndDurationArray.ts";
import CoursComponent from "../CoursComponent/CoursComponent.tsx";


const CoursesComponent = () => {
    return (
        <>
            {
                coursesAndDurationArray.map((course,index) =>
                    <CoursComponent key={index} course={course}/>
                )

            }
        </>
    );
};

export default CoursesComponent;