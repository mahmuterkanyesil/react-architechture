import React, {Suspense} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {landingPageRoutes} from "@Route/landingPageRoutes"

const RoutingCenter = ({from, to}) => {
    return (

            <Suspense fallback="Loading">
                <Switch>
                    {landingPageRoutes.map((route, index) => {
                        return route.component ? (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props) => (
                                    <route.component {...props} />
                                )}
                            />
                        ) : null;
                    })}
                    <Redirect from={from} to={to} />
                </Switch>
            </Suspense>

    );
}

RoutingCenter.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default RoutingCenter