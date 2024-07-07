import { Outlet } from "react-router-dom";
import { PageContentStyles } from "./DashboardStyles";

const AdminDashboard = () => {
    return (
        <PageContentStyles>
            <Outlet />
        </PageContentStyles>
    );
}

export default AdminDashboard;
