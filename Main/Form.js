// @flow

import React, { createRef, useContext } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';

export default function Form(props) {

    const theme = useContext(ThemeContext);

    const name = createRef(),
        email = createRef(),
        password = createRef(),
        password_confirmation = createRef(),
        gofw = createRef();

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost/react/my-first-app/src/Main/Utilities/feldolgozo.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify( [
            {
                name: name.current.value, 
                email: email.current.value, 
                password: password.current.value, 
                passwordConf: password_confirmation.current.value
            }
            ] )
        })

        alert('A regisztráció sikeres volt!');

        gofw.current.focus();
    }

    return <article style={ themes[theme] }>
        <form onSubmit={handleSubmit}>
            <fieldset className='form-reg'>
                <legend>Regisztráció</legend>
                <label htmlFor='name'>Név: </label>
                <input type='text' id='name' ref={name} />
                <label htmlFor='email'>Email cím: </label>
                <input type='email' id='email' ref={email} />
                <label htmlFor='password'>Jelszó: </label>
                <input type='password' id='password' ref={password} />
                <label htmlFor='password_confirmation'>Jelszó újra: </label>
                <input type='password' id='password_confirmation' ref={password_confirmation} />
                <button>Küldés</button>
                <button ref={gofw}>Tovább</button>
            </fieldset>
        </form>
    </article>
}