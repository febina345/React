import './App.css'
import Header from './components/Header'
function App() {
  const data = 'febs eriy'
  return (
    <div>
   <h1 style={{backgroundColor:"red"}}>Hello world</h1> 
   <Header data={data}/>

   <p > Its a sample description {data}</p>
   <br/>
   </div>
   
  
  );
}

export default App;


