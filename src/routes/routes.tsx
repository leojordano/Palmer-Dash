import React, { useContext, useEffect } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import MainLayout from '../layout/main';
import DashBoard from './Pages/Dashboard';

import Loading from './Pages/Loading';

import { LoadingContext } from '../context/LoadingContext';

const Routes: React.FC = (): JSX.Element => {
    const loading = useContext(LoadingContext);

    const privates: RouteObject = {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <DashBoard />,
                    index: true
                }
            ]
    }

    const publics: RouteObject = {
            path: '*',
            element: <Loading />
    }

    useEffect(() => {
        loading
    }, [loading])

    const mainRoutes: RouteObject = loading ? publics : privates;

    const routing = useRoutes([ mainRoutes ]);

    return ( 
        <>{routing}</>
    );
};

export default Routes;