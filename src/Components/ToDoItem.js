import React from 'react';

export default function ToDoItem(props) {

    const {details} = props;

    return <h4 className="list-title">{details.inputValue}</h4>;
}