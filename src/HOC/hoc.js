import React from 'react';
import {Navigate} from "react-router-dom";

const AuthRequire = ({children}) => {
    let user
    if (!user)
        return <Navigate to={'/'}/>
    return children
};

export default AuthRequire;