import React from 'react';
import './style.css';

function Wrapper(props) {
    return (
    <h1 className="wrapper">{props.children}
    </h1>
    );
}

export default Wrapper;