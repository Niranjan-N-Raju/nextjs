import React from 'react';

import classes from './User.module.scss';

const user = (props) => (
    <div className={classes.Div}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

export default user;