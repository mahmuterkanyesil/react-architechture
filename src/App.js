import React from "react";
import history from "@HistoryFile";

import { Route, Router, Switch } from "react-router-dom";

import LandingPageLayout from "@LandingPageComponent/Layout/LandingPageLayout";
import AppLayout from "@AppComponent/Layout/AppLayout";

export default function App() {

    // const auth = useSelector(state => state.Auth)

    const isLogin = false


    const PrivateRoute = () => {
        return <Route render={() => 
        isLogin ?
        <AppLayout/>
        :
        <LandingPageLayout />
    
    } />;
    };
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/" />
            </Switch>
        </Router>
    );
}
