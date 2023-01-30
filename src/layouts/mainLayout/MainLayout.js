import {Outlet} from "react-router-dom";

import {Header} from "../../component";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};