import React from 'react';
import { Route } from 'react-router-dom';
import FrontendLayout from '../src/layout/frontend/FrontendLayout';

function PublicRoute({...rest}){
    return(
        <Route {...rest} render={(props)=> <FrontendLayout {...props}/>}/>

    )
}

export default PublicRoute