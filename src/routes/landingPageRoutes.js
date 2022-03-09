import React from "react";

const LoginView = React.lazy(() => import("../views/landingPage/LoginView"));

export const landingPageRoutes = [
    {
        id: "login",
        path: "/",
        exact: true,
        component: LoginView,
    },
];
