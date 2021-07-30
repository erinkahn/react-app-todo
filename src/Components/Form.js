import React, {useState} from 'react';

export default function Form({count, setCount, todos, setTodos}) {

    const [entry, setEntry] = useState("");
    const [validation, setValidation] = useState("");

    function submitForm(e) {
        e.preventDefault();
        if (!entry) {
            setValidation("You must enter some text.");
            return;
        }
        if (entry !== '') {
            setCount(count + 1)
        }
        setTodos([...todos, {
            id: todos.length + 1,
            entry: entry
        }])
        setEntry("");
        setValidation(""); 
    }

    return <>
        <form onSubmit={submitForm}>
            <p className="validation">{validation}</p>

            <label htmlFor="to-do"></label>
            <input id="to-do" type="text" value={entry} placeholder="To Do Title" onChange={(e => setEntry(e.target.value))}/>
            <input className="add" value="Add to List" type="submit"/>
        </form>
    </>;
}