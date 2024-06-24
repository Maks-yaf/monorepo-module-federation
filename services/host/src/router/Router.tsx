import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import React from "react";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            ...shopRoutes,
            ...adminRoutes,
        ],
    },
]);
