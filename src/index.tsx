import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";

import {store} from "./Redux/store";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";


import {
    LogInPage,
    VerifyPage,
    SignUpPage,
    MainPage,
    AvatarPage
} from "./pages";


const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login"/>
            },
            {
                path: 'login',
                element: <LogInPage/>,
            },
            {
                path: 'verify',
                element: <VerifyPage/>,
            },
            {
                path: 'sign-up',
                element: <SignUpPage/>
            },
            {
                path: 'avatar',
                element: <AvatarPage/>
            }
        ]
    },
    {
        path: '/',
        element: <AppLayout/>,
        children: [

            {
                path: '/main-page',
                element: <MainPage/>,
            },
        ]
    }
])


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);


