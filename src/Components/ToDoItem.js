import React from 'react';

export default function ToDoItem({details, item, items, setItems, count, setCount}) {

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
        setCount(count - 1);
    }

    function editItem(id) {
        // edit the text value input
    }

    function completeItem(id) {
        // add strikethrough text if checked 
    }

    return <>
        <h4 className="list-title">{details.inputValue}</h4>

        <div className="buttons-container">
            <button className="edit" onClick={editItem}>Edit</button>
            <button className="delete" onClick={() => removeItem(item.id)}>Delete</button>

            <div className="check-complete">
                <label htmlFor="checkbox" className="aria-hidden">Completed?</label>
                <input onChange={() => completeItem(item.id)} id="checkbox" type="checkbox"/>
            </div>
        </div> 
    </>;
}