import React from 'react';
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div data-testid={"appDataTestId"}>
            <h1>PAGE</h1>
            <Link to={'/about'}>ABOUT</Link>
            <br/>
            <Link to={'/shop/main'}>SHOP</Link>
            <Outlet/>
        </div>
    );
};
