import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/main" />
        )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )} />
);

const Checkout = ({ component: Component, path, loggedIn, cartNotEmpty, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        (loggedIn && (Object.values(cartNotEmpty).length !== 0)) ? (
            <Component {...props} />
        ) : (
            <Redirect to="/main" />
        )
    )} />
);

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id),
      cartNotEmpty: state.entities.cart
    }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const ProtectedCheckoutRoute = withRouter(connect(mapStateToProps)(Checkout));

