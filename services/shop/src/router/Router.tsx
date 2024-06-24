import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import React, {Suspense} from "react";
import {Shop} from "@/pages/shop";
import UserCard from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
            {
                path: "/shop/main",
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
            },
            {
                path: "/shop/second",
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>Second page</h1>
                        <UserCard username={'Maksim'}/>
                    </div>
                </Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;