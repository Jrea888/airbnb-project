import React from "react";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import('@/views/detail'))
// 组件演示页只在开发环境注册，避免把 /demo 暴露到生产环境
const Demo = React.lazy(() => import('@/views/demo'))

const isDev = process.env.NODE_ENV !== 'production'

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/entire",
        element: <Entire />,
    },
    {
        path: "/detail",
        element: <Detail />,
    },
    ...(isDev
        ? [
              {
                  path: "/demo",
                  element: <Demo />,
              },
          ]
        : []),
];

export default routes;
