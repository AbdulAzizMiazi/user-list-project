import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from '../User/User';


const UserList = () => {
    const[users, setUsers] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users);

    return (
        <>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </>
    );
};

export default UserList;