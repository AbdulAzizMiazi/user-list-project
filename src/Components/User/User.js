import React from 'react';
import { Link } from "react-router-dom";

const User = (props) => {
    const{name, website, id} = props.user;
    const userStyle={
        margin:"5px 15%",
        border:"4px solid black",
        borderRadius:"10px",
        padding:"10px"
    }
    const goTo = `/user/${id}`
    return (
        <div style={userStyle}>
            <Link to={goTo}><p>Name: {name}</p></Link>
            <p>Website: {website}</p>
            <Link to={goTo}><button>More Info.</button></Link>
        </div>
    );
};

export default User;