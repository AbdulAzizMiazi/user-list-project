import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Your URL couldn't be found</h1>
            <h2>404 Error</h2>
            <br/><br/><br/>
            <Link to="/"><button>Back to List</button></Link>
        </div>
    );
};

export default NotFound;