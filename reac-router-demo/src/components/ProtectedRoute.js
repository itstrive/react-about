import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom'
export default function({component:Component, ...rest}){
    return <Route {...rest} render={(props) =>
        localStorage.getItem('login')?<Component />:<Redirect to={{
            pathname:'/login',
            state:{from:props.location.pathname}
        }} />
    } />
}