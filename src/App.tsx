import './App.css'
import coursesAndDurationArray from "./data/coursesAndDurationArray.ts";
import ComponentCoursesAndDurationArray from "./components/componentCoursesAndDurationArray.tsx";

function App() {

  return (
    <>
        {
           coursesAndDurationArray.map((course, index)=> <ComponentCoursesAndDurationArray key = {index} course={course} />)

        }
    </>
  )
}

export default App
