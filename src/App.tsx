// import { useState } from "react"
// import Button from "./components/Button"
// import Profile from "./components/Profile"
// import UserInfo from "./components/UserInfo"
// import UserInputs from "./components/UserInputs"
// import Counter from "./components/Counter"
// import { Info } from "./components/types"

import TodoList from "./components/TodoList"


function App() {
  // const [count,setCount] = useState<number>(0)

  // const handleIncrease =()=>{
  //   setCount(count =>count+1)
  // }

  // const handleDecrease = ()=>{
  //   setCount(count - 1)
  // }
 
  // const handleReset =()=>{
  //   setCount(0)
  // }



  return (
    <>
     {/* <UserInputs name="Samuel Okolie" age={35} isMarried={true }/>
     <Button label="Click Me" onclick={()=>console.log('You just clicked me')} disabled={false}/>
      <UserInfo name='Bright Dae' id={23} email="brightdae@gmail.com"/>
      <Profile/>
      <Counter handleIncrease = {handleIncrease} handleDecrease = {handleDecrease} handleReset ={handleReset} count={count}/> */}
      <TodoList/>
    </>
  )
}

export default App
