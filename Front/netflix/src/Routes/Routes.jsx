import { Home } from "../Pages/Home/Home";
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
export default function Routes() {
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ];
return useRoutes(routes);
}
