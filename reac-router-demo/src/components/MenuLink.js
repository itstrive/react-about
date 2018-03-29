import React from 'react';

import {Route, Link} from 'react-router-dom'

export default function({to, label}){
    return (
        <Route path={to} children={({match})=>{
            return <li className={match?'mx-3 active':'mx-3'}>
                <Link to={to} className="nav-link">{label}</Link>
            </li>
        }} />
    )
}