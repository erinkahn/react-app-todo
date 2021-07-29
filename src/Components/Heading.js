import React, {useState} from 'react';

export default function Heading({count, setCount, items, setItems}) {

    const [title, setTitle] = useState("");
    const [validation, setValidation] = useState("");
    const tasksNoun = items.length === 1 ? ' to do' : ` to do's`;


    function addNewItem() {
        if (!title) {
            setValidation("You must enter some text.");
            return;
        }
        
        if (title !== '') {
            setCount(count + 1)
        }

        setItems([...items, {
            id: items.length + 1,
            title: title
        }])

        setTitle("");
        setValidation("");        
    }
    
    return <>
        <div className="do-heading">
            <h2>You have {count}{tasksNoun} in your list</h2>

            <p className="validation">{validation}</p>

            <label htmlFor="to-do"></label>
            <input id="to-do" type="text" value={title} placeholder="To Do Title" onChange={(e => setTitle(e.target.value))}/>
            <button className="add" onClick={addNewItem}>Add to List</button>
        </div>
    </>
}