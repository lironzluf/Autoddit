import React from 'react';

export default (props) => {
    return (
        <div className="input-group">
            <label>{props.name}</label>
            <input type="text" onChange={props.onChange} value={props.value}/>
        </div>
    )
}