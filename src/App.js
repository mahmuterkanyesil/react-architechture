import React from "react";
import history from "@HistoryFile";

import { Route, Router, Switch } from "react-router-dom";

import LandingPageLayout from "./components/landingPage/Layout/LandingPageLayout";

export default function App() {
    const PrivateRoute = () => {
        return <Route render={() => <LandingPageLayout />} />;
    };
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/" />
            </Switch>
        </Router>
    );
}
