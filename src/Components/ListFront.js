import React, {useState} from 'react';
import ToDoItem from './ToDoItem.js';
import Heading from './Heading.js';

export default function ListFront() {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    return <>
        <Heading 
            count={count} 
            setCount={setCount} 
            items={items} 
            setItems={setItems}
        />

        <div className="list-container">
            <ol>
               {items.map(item => <li className="item" key={item.id}>
                   <ToDoItem 
                        details={item} 
                        item={item} 
                        items={items} 
                        setItems={setItems} 
                        count={count} 
                        setCount={setCount}
                    />
               </li>)}
            </ol>
        </div>
    </>;
}