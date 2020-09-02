import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from "react-router-dom";

const UserDetails = () => {
    const{id} =useParams();
    const[details, setDetails] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    console.log(details);
    const{name, username, phone, email, website} = details;
    return (
        <div>
            <h3>Name: {name}</h3> 
            <p>User Name: {username}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>    
            <Link to="/"><button>Back to List</button></Link> 
        </div>
    );
};

export default UserDetails;