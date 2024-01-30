import {useState} from 'react'

function MyForm(){
    const [Todo, setTodo] = useState()

    return <div> 
        <div>
            <button onClick={() => {
                setTodo("Some text add")
            }}>Add</button>
        </div>
    <form action="#" method= "POST"  onSubmit={(e) => {
        e.preventDefault()

    }}>
        <div>
            <label>Todo</label>
            <input type="text" id="todo" onChange={(e) => {
                setTodo(e.target.value);
            }} value={Todo} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
        <div>
            The added Todo is - {Todo}
        </div>

    </form>
    </div>
}

export {
    MyForm
}