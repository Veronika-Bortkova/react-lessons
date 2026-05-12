import {Link, Outlet} from "react-router-dom";


const APage = () => {
    return (
        <div>
            <div>
                A Page
            </div>
            <ul>
                <li><Link to={"1"} >1</Link></li>
                <li><Link to={"2"} >2</Link></li>
                <hr/>
                <Outlet/>
            </ul>
        </div>
    );
};

export default APage;