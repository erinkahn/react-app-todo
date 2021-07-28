import React, {useState} from 'react';
import ToDoItem from './ToDoItem.js';

export default function ListFront() {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
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

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
        setCount(count - 1)
    }

    function editItem() {
        // edit the text value input
    }

    function markComplete() {
        // put line through text
    }

    return <>
        <div className="do-heading">
            <h2>You have {count}{toDo} in your list</h2>

            <label htmlFor="to-do"></label>
            <input id="to-do" type="text" value={inputValue} placeholder="to do item" onChange={(e => setInputValue(e.target.value))}/>
            <button class="add" onClick={addNewItem}>Add to List</button>
        </div>

        <div className="list-container">
            <ol>
               {items.map(item => <li className="item" key={item.id}>
                   <ToDoItem details={item}/>
                   <div className="buttons-container">
                        <button className="edit" onClick={editItem}>Edit</button>
                        <button className="delete" onClick={() => removeItem(item.id)}>Delete</button>
                        <div className="check-complete">
                            <label htmlFor="checkbox" className="aria-hidden">Completed?</label>
                            <input onChange={markComplete} id="checkbox" type="checkbox"/>
                            <span className="checkmark"></span>
                        </div>
                   </div> 
               </li>)}
            </ol>
        </div>
    </>;
}