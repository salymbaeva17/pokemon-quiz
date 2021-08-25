import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(({data}) => setUser(data))
    }, [params.id])
    return (
        <div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Username: {user.username}</div>
        </div>
    );
};

export default UserInfo;