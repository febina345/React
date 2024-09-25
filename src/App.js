import {useState} from 'react'
import Employee from './Employee'

function App() {
  const [count,setCount] =useState(0)
     

  const addCount=()=>{
    setCount(count+1)
    console.log(count)
  }

  let emp = [{name:'sam',age:22},
    {name:'steve',age:24},
    {name:'Man',age:33}
  ]
  
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>
             (
              <Employee key={index} {...obj}/>
            )
        )
      }
   <br/>
   </div>
   
  
  );
}

export default App;


