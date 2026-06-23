
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to ="">Page 1</Link></li>
                <li><Link to ="page-2">Page 2</Link></li>
            </ul>

        </div>
    );
};

export default MenuComponent;