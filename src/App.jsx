import { useState } from "react"

function App() {
let [count, setCount] = useState(0)

const renderCountInc= ()=>{
  return setCount(count+1)
}
const renderCountDec= ()=>{
  if(count<=0) return 0
  return setCount(count-1)
}

const reset = ()=>{
  setCount(count*0)
}
    
  return (
  
  <div className="p-2 m-auto w-100 border">
    <h1 className="text-center font-bold text-2xl">Counter App</h1>
    <h1 className="font-bold text-2xl p-2 text-center">{count}</h1>

    <div className="flex justify-between items-center">
      <span onClick={renderCountInc} className="p-2 bg-pink-100 rounded-xl font-bold cursor-pointer ">Increment</span>
      <span onClick={reset} className="p-2 bg-pink-100 rounded-xl font-bold ">Reset</span>
      <span onClick={renderCountDec} className="p-2 bg-pink-100 rounded-xl font-bold ">Decrement</span>
    </div>
    
  
  </div>
  )
}

export default App