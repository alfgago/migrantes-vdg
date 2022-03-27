import React, { useEffect, useState } from 'react';
import Meta from './Meta';


const Layout = ({ children }) => {
    return (
        <div className="main">
            <Meta />
            {children}
        </div>
    );
};

export default Layout;
