// import React, { useState, useMemo } from 'react';

// // --- Type Definitions ---
// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
//   dueDate: Date | null; // Added due date
// }

// // --- Utility Functions (date-fns style) ---
// // Note: We use built-in Date methods to avoid external library imports.

// const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// const startOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
// const endOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
// const startOfWeek = (date: Date) => {
//   const d = new Date(date);
//   const day = d.getDay();
//   const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust to start on Monday
//   return new Date(d.setDate(diff));
// };

// const addMonths = (date: Date, amount: number) => new Date(date.getFullYear(), date.getMonth() + amount, date.getDate());
// const addDays = (date: Date, amount: number) => new Date(date.getTime() + amount * 24 * 60 * 60 * 1000);


// const isSameDay = (date1: Date | null, date2: Date | null) => {
//     if (!date1 || !date2) return false;
//     return date1.getFullYear() === date2.getFullYear() &&
//            date1.getMonth() === date2.getMonth() &&
//            date1.getDate() === date2.getDate();
// };

// const format = (date: Date | null, fmt: string = 'MMM dd') => {
//     if (!date) return 'No Date';
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const year = date.getFullYear();
//     const month = monthNames[date.getMonth()];
//     const day = date.getDate().toString().padStart(2, '0');
    
//     if (fmt === 'MMM dd') return `${month} ${day}`;
//     if (fmt === 'yyyy-mm-dd') return `${year}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${day}`;
//     return `${month} ${day}, ${year}`;
// };

// // --- Calendar Component (Shadcn/UI inspired) ---
// interface CalendarProps {
//   selected: Date | null;
//   onSelect: (date: Date) => void;
// }

// const Calendar: React.FC<CalendarProps> = ({ selected, onSelect }) => {
//   const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
//   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   const days = useMemo(() => {
//     const firstDay = startOfMonth(currentMonth);
//     const lastDay = endOfMonth(currentMonth);
//     const startDate = startOfWeek(firstDay);
//     const totalDays = 42; // 6 rows * 7 days
//     const dates: Date[] = [];

//     let currentDate = startDate;
//     for (let i = 0; i < totalDays; i++) {
//         dates.push(currentDate);
//         currentDate = addDays(currentDate, 1);
//     }
//     return dates;
//   }, [currentMonth]);

//   const prevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
//   const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

//   const CalendarDay: React.FC<{ day: Date }> = ({ day }) => {
//     const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
//     const isSelected = isSameDay(day, selected);
//     const isToday = isSameDay(day, new Date());

//     const baseClasses = "w-8 h-8 flex items-center justify-center text-sm rounded-full transition-colors duration-150 cursor-pointer";
//     let styleClasses = 'text-gray-900 hover:bg-gray-100';

//     if (!isCurrentMonth) {
//       styleClasses = 'text-gray-400 hover:bg-gray-100';
//     }
//     if (isToday) {
//       styleClasses = 'bg-blue-100 text-blue-700 font-semibold';
//     }
//     if (isSelected) {
//       styleClasses = 'bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md';
//     }

//     return (
//       <div
//         className={baseClasses + ' ' + styleClasses}
//         onClick={() => onSelect(day)}
//       >
//         {day.getDate()}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//         </button>
//         <span className="font-semibold text-lg">
//           {format(currentMonth, 'MMMM yyyy')}
//         </span>
//         <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//         </button>
//       </div>

//       <div className="grid grid-cols-7 gap-1 text-center">
//         {dayNames.map((day, index) => (
//           <div key={index} className="text-xs font-medium text-gray-500 w-8 h-8 flex items-center justify-center">
//             {day}
//           </div>
//         ))}
//         {days.map((day, index) => (
//             <CalendarDay key={index} day={day} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- Error Message Component ---
// const ErrorMessage = ({ message }: { message: string | null }) => {
//   if (!message) return null;
//   return (
//     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md shadow-sm mb-4" role="alert">
//       <p className="font-bold">Validation Error</p>
//       <p>{message}</p>
//     </div>
//   );
// };


// // --- Main Application Component ---
// const Todo2 = () => {
//   const [text, setText] = useState<string>('');
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMessage(null);

//     if (text.trim() === "") {
//       setErrorMessage('Please add a task in the todo app before clicking on the add button');
//       return;
//     }

//     const newTodo: Todo = {
//       text: text.trim(),
//       id: Date.now(),
//       completed: false,
//       dueDate: selectedDate, // Use the selected date
//     };

//     setTodos((prevTodos) => [...prevTodos, newTodo]);
    
//     // Reset inputs
//     setText('');
//     setSelectedDate(null);
//     setShowCalendar(false);
//   };

//   const handleToggle = (id: number) => {
//     setTodos(todos.map(todo => 
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };
  
//   const handleDelete = (id: number) => {
//     setTodos(todos.filter(todo =>
//       todo.id !== id));
//   };

//   const today = new Date();
  
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 pt-12 font-sans">
//       <script src="https://cdn.tailwindcss.com"></script>
//       <style>{`
//         .font-sans { font-family: 'Inter', sans-serif; }
//       `}</style>
//       <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-2xl">
//         <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center border-b pb-3">
//           Task Planner with Calendar
//         </h1>
        
//         <ErrorMessage message={errorMessage} />

//         {/* --- Task Input and Date Picker --- */}
//         <div className="mb-6 border p-4 rounded-xl bg-gray-50">
//             <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//               <input
//                 type="text"
//                 className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                 placeholder="What task needs to be done?"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
//               >
//                 Add Task
//               </button>
//             </form>

//             <div className="relative w-full">
//                 <button
//                     type="button"
//                     onClick={() => setShowCalendar(!showCalendar)}
//                     className="w-full text-left p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
//                 >
//                     <span className="text-sm font-medium text-gray-500">
//                         {selectedDate ? `Due Date: ${format(selectedDate, 'long')}` : 'Click to set Due Date (Optional)'}
//                     </span>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5m18 7.5v-7.5" />
//                     </svg>
//                 </button>
//                 {showCalendar && (
//                     <div className="absolute z-10 mt-2 left-0 w-full max-w-xs sm:max-w-sm">
//                         <Calendar 
//                             selected={selectedDate} 
//                             onSelect={(date) => {
//                                 setSelectedDate(date);
//                                 setShowCalendar(false);
//                             }} 
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
        
//         {/* --- To-Do List --- */}
//         <ul className="space-y-3">
//           {todos.length === 0 ? (
//             <p className="text-center text-gray-500 p-4 border rounded-lg bg-gray-50">
//               No tasks yet. Add one above!
//             </p>
//           ) : (
//             todos.map((todo) => {
//               const isPastDue = todo.dueDate && !todo.completed && todo.dueDate < today;
              
//               return (
//                 <li
//                   key={todo.id}
//                   className={`flex items-center justify-between p-3 rounded-lg shadow-sm transition duration-150 ${
//                     todo.completed ? 'bg-green-50 border-l-4 border-green-500' : 'bg-gray-50 border-l-4 border-gray-200'
//                   } ${isPastDue ? '!bg-red-100 !border-l-4 !border-red-600' : ''}`}
//                 >
//                   <div className="flex-grow flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3" onClick={() => handleToggle(todo.id)}>
//                       <span className={`text-gray-800 font-medium ${todo.completed ? 'line-through text-green-600' : ''}`}>
//                         {todo.text}
//                       </span>
//                       <div className="flex items-center gap-2">
//                           <span className={`text-xs font-medium px-2 py-1 rounded-full ${todo.completed ? 'bg-green-500 text-white' : (isPastDue ? 'bg-red-500 text-white' : 'bg-yellow-400 text-gray-900')}`}>
//                             {todo.completed ? 'Done' : 'Pending'}
//                           </span>
//                           {todo.dueDate && (
//                             <span className={`text-xs font-medium px-2 py-1 rounded-full border ${isPastDue && !todo.completed ? 'border-red-600 text-red-700 bg-white' : 'border-gray-300 text-gray-600 bg-white'}`}>
//                                 Due: {format(todo.dueDate, 'MMM dd')}
//                             </span>
//                           )}
//                       </div>
//                   </div>
                  
//                   <button
//                       onClick={(e) => {
//                           e.stopPropagation(); // Prevent toggling completion when deleting
//                           handleDelete(todo.id);
//                       }}
//                       className="ml-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition duration-150 transform hover:scale-110 shadow-md flex-shrink-0"
//                       title="Delete Task"
//                   >
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                       </svg>
//                   </button>
//                 </li>
//               );
//             })
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo2;
