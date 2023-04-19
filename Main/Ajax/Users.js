// @flow

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users(props) {

    const[users, setUsers] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => setUsers( res.data ));
    }, [] )

    return <article style={ { background: "#efefef", color: "#232323", padding: 10 } }>
        <h2>Users tartalma</h2>
        <Link to="http://localhost:3000/ajax/" ><button>vissza</button></Link>
                <br />
                {
                    users &&
                    users.map( (user, index) => {
                        return <React.Fragment key={index}>
                            <h3>{user.name}</h3>
                            <li>{user.email}</li>
                            <hr />
                        </React.Fragment>
                    } )
                }
    </article>
}