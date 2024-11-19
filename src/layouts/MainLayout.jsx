import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="mx-auto bg-base-100">
            <div>
                <Navbar/>
            </div>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;