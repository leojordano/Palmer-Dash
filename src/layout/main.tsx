import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC = ({ children }): JSX.Element => {
    return (
        <div className="MainLayout">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;