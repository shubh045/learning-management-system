import React from "react"
import { useRoutes } from "react-router-dom";
import  Layout  from "./component/Layout/Layout";
import Changepwd from "./component/Profile/Changepwd";
import Login from "./pages/Login"
import Profileinfo from "./component/Profile/Profileinfo";
import Addemp from "./component/AddEmployee/AddEmployee"
import Apply from "./pages/ApplyLeave";
import Team from "./component/Team/Team";
import History from "./component/History/history"
import PendingRequest from './component/PendingRequest/pendreq'
import CalendarTable from "./component/Calendar/CalendarTable";
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
            element: <Team />,
        },
        {
            path: "/apply-leave",
            element: <Apply />,
          },
          {
            path: "/profile",
            element: <Profileinfo/>,
          },
          {
            path: "/change-pwd",
            element: <Changepwd/>,
          },
          {
            path: "/add-emp",
            element: <Addemp />,
          },
          {
            path: "/history",
            element: <History />,
          },
          {
            path: "/PendingRequest",
            element: <PendingRequest/>,
          },
          {
            path: "/Holiday",
            element: <CalendarTable/>,
          },
      ],
    },
    {
        path: "/login",
        element: <Login/>
    }
  ]);

  export default Routes;