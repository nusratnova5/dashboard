import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../component/Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<DashboardLayout/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
            },
        ]
    },
]);
