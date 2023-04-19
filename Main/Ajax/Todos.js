// @flow

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Todos(props) {

    const[todos, setTodos] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then( res => res.json())
            .then( res => setTodos( res ) );
    }, [] );


    return <article style={ { background: "#efefef", color: "#232323", padding: 10 } }>
                <h2>Todos tartalma</h2>
                <Link to="http://localhost:3000/ajax/" ><button>vissza</button></Link>
                <br />
                {
                    todos &&
                    todos.map( (todo, index) => {
                        return <React.Fragment key={index}>
                            <h3>{todo.title}</h3>
                            <li>{todo.completed.toString()}</li>
                            <hr />
                        </React.Fragment>
                    } )
                }
            </article>
}