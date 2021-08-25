import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            All Users
            {
                users.map(item =>
                    <div key={item.id}><Link to={`/user/${item.id}`}>{item.name}</Link></div>
                )
            }
        </div>
    );
};

export default Users;