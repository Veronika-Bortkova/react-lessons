import PaginationComponent from "../components/pagination/paginationComponent.tsx";
import SomeComponent from "../components/SomeComponent/SomeComponent.tsx";


const MainLayout = () => {
    return (
        <div>
        <SomeComponent/>
        <PaginationComponent/>
        </div>
    );
};

export default MainLayout;