import ToDoItem from './ToDoItem.js';

export default function List({count, setCount, todos, setTodos}) {

    return <>
        <div className="list-container">
            <ol>
               {todos.map((item) => <li className="item" key={item.id}>
                   <ToDoItem 
                        details={item} 
                        item={item} 
                        todos={todos} 
                        setTodos={setTodos} 
                        count={count} 
                        setCount={setCount}
                    />
               </li>)}
            </ol>
        </div>
    </>;
}