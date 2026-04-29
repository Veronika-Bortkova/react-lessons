import './App.css'
import {coursesTitleArray} from "./data/coursesTitleArray.ts";


function App() {

  return (
    <>
        <ul>
            {
                coursesTitleArray.map((course, index) => <li key={index}>{course}</li>)


            }

        </ul>

    </>
  )
}

export default App
