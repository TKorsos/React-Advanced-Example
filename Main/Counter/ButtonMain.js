// @flow

import React, { useState } from 'react';

export default function ButtonMain(props) {

    const[count, setCount] = useState( 0 );

    const handleClick = e => {
        setCount( () => count + 1 );
    }

    return <button onClick={handleClick} >
                { props.render( count ) }
            </button>
}