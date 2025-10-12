import { useState } from "react"
interface Todo{
id:number;
text:string;
completed:boolean;
}
const TodoList = () => {
    const [todo,setTodo] = useState<Todo[]>([])
    const [text,setText] = useState<string>('')


    const handleForm=(e)=>{
      e.preventDefault()
      if(text !== ''){
        const newTodo:Todo = {
          id:Math.random(),
          text,
          completed:false
        }
        setTodo([...todo, newTodo])
        setText('')
      }
    }
    const handleDelete=(todoId:number)=>{
      const delTodo = todo.filter((to)=> to.id !== todoId)
      setTodo(delTodo)
    }

    const handleEdit = (todoId:number)=>{
      const editTodo = todo.filter((to)=>to.id === todoId )
      const delTodo = todo.filter((to)=> to.id !== todoId)
      setTodo(delTodo)
      // console.log(editTodo[0].text)
      setText(editTodo[0].text)
    }

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleForm}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleForm}>Add Todo</button>
      </form>
        <ul>
          {todo.map((to)=>
              <li key={to.id}>
                {to.text}
              <button onClick={()=>handleDelete(to.id)}>del</button>
              <button onClick={()=>handleEdit(to.id)}>edit</button>
              </li>
          )}
        </ul>

    </div>
  )
}

export default TodoList