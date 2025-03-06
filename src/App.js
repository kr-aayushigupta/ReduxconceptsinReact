import { useSelector,useDispatch} from 'react-redux';
import './App.css';
import './mycss.css';


function App() {
    const counter=useSelector((state)=>state.counter)
    const dispatch=useDispatch();
    
    const increment=()=>{
      dispatch({type : "INC"});
    }

    const decrement=()=>{
      dispatch({type : "DCR"});
      
    }

    const addby=()=>{
      dispatch({type : "ADD",payload :10});
      
    }
    const subby=()=>{
      dispatch({type : "SUB",payload :10});
      
    }
    const reset=()=>{
      dispatch({type : "RESET",payload :0});
      
    }

  return (
    <div >
      <h1 className='div1'>Counter App</h1>
      <h3 className='div2'>Using REDUX concepts in React app</h3>
      <h3 className='div1'>Counter : {counter}</h3>
      <div className='mydiv'>
      <button  onClick={increment}>Increment</button>
      
      <button onClick={decrement}>Decrement</button>
      <button  onClick={addby}>Increment by 10</button>
      <button  onClick={subby}>Decrement by 10</button>
      <button  onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
