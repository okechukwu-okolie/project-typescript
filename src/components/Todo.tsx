import React, { useState } from 'react';

// 1. Defined the interface for type safety 
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Utility component for the custom alert (replacing window.alert)
const ErrorMessage = ({ message }: { message: string | null }) => {
  if (!message) return null;
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md shadow-sm mb-4" role="alert">
      <p className="font-bold">Validation Error</p>
      <p>{message}</p>
    </div>
  );
};


const Todo = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  // State for the error message, replacing the alert()
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Corrected and Typed handleSubmit Function
   * @param e - The form event, explicitly typed as React.FormEvent.
   */
  const handleSubmit = (e: React.FormEvent) => {
    // Stop the form from submitting and refreshing the page
    e.preventDefault();
    
    // Clear any previous error messages
    setErrorMessage(null);

    // 2. Input validation correction: use trim() to catch empty or whitespace-only input
    if (text.trim() === "") {
      // 3. Replaced alert() with non-blocking state update
      setErrorMessage('Please add a task in the todo app before clicking on the add button');
      return;
    }

    // 4. Create the new todo object using the strict 'Todo' interface
    const newTodo: Todo = {
      text: text.trim(), // Ensure no leading/trailing whitespace is saved
      id: Date.now(), // Using a more unique and reliable ID generator than Math.random()
      completed: false,
    };

    // Use the functional form of setState for safe state updates
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    
    // Reset the input field
    setText('');
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 pt-12 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center border-b pb-3">
          TypeScript To-Do List
        </h1>
        
        <ErrorMessage message={errorMessage} />

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
            Add Task
          </button>
        </form>

        <ul className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 p-4 border rounded-lg bg-gray-50">
              No tasks yet. Add one above!
            </p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition duration-150 cursor-pointer ${
                  todo.completed ? 'bg-green-50 border-l-4 border-green-500' : 'bg-gray-50 border-l-4 border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => handleToggle(todo.id)}
              >
                <span className={`text-gray-800 ${todo.completed ? 'line-through text-green-600' : ''}`}>
                  {todo.text}
                </span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${todo.completed ? 'bg-green-500 text-white' : 'bg-yellow-400 text-gray-900'}`}>
                  {todo.completed ? 'Done' : 'Pending'}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
