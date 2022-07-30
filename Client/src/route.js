import React from "react"
import { useRoutes } from "react-router-dom";
import  Layout  from "./component/Layout/Layout";
import Changepwd from "./component/Profile/Changepwd";
import Login from "./pages/Login"
import Profileinfo from "./component/Profile/Profileinfo";

const Routes = () => useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <div>Page Dashboard</div>,
        },
        {
            path: "/team-member",
            element: <div>Page Team</div>,
        },
        {
            path: "/apply-leave",
            element: <div>Page Apply leave</div>,
          },
          {
            path: "/profile",
            element: <Profileinfo/>,
          },
          {
            path: "/change-pwd",
            element: <Changepwd/>,
          },
      ],
    },
    {
        path: "/login",
        element: <Login />
    }
  ]);

  export default Routes;