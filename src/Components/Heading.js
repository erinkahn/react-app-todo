import React, {useState} from 'react';

export default function Heading({count, setCount, items, setItems}) {

    const [inputValue, setInputValue] = useState("");

    let toDo;
    if (count === 1) {
        toDo = ' to do';
    } else {
        toDo = ` to do's`;
    }

    function addNewItem() {
        if (!inputValue) {
            return;
        }
        if (inputValue !== '') {
            setCount(count + 1)
        }
        setItems([...items, {
            id: items.length + 1,
            inputValue: inputValue
        }])
        setInputValue("");
    }
    
    return <>
        <div className="do-heading">
            <h2>You have {count}{toDo} in your list</h2>

            <label htmlFor="to-do"></label>
            <input id="to-do" type="text" value={inputValue} placeholder="to do item" onChange={(e => setInputValue(e.target.value))}/>
            <button className="add" onClick={addNewItem}>Add to List</button>
        </div>
    </>
}