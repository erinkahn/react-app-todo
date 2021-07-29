import React, {useState} from 'react';

export default function ToDoItem({details, item, items, setItems, count, setCount}) {

    const [checked, setChecked] = useState(false);
    const [strike, setStrike] = useState('');

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
        setCount(count - 1);
    }

    function editItem(id) {
        // edit the text value input
    }

    function completeItem(e) {
       if (e.target.checked) {
            setChecked(true);
            setStrike('strike');
       } else {
           setChecked(false);
           setStrike('');
       }
    }

    return <>
        <h4 className={`list-title ${strike}`}>{details.title}</h4>

        <div className="buttons-container">
            <button className="edit" onClick={editItem}>Edit</button>
            <button className="delete" onClick={() => removeItem(item.id)}>Delete</button>

            <div className="check-complete">
                <label htmlFor="checkbox" className="aria-hidden">Completed?</label>
                <input id="checkbox" type="checkbox" onChange={completeItem}/>
            </div>
        </div> 
    </>;
}