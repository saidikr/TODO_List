import { TodoItems } from './data'
import './App.css'
import  {useState,useEffect} from 'react'
import { HomeLayout } from './layouts/HomeLayout';
import { TodoAdd } from './components/todoadd';
import { TodoItem } from './components/todoitems';
import { SearchTodo } from './components/searchtodo';


function App() {
const[todolist,setTodo]=useState([]);
useEffect(()=>setTodo(TodoItems),[]);

const validfunc=(id)=>{
const newarr=todolist.map((item)=>{
  if(item.id===id) return {...item,isFinished:true}
  else{return item}
})
console.log(newarr);
setTodo(newarr)
}

const searchTodo=(text)=>{
if(text===""){setTodo(TodoItems)}
else {const newarray=todolist.filter((element)=>element.name.includes(text));
setTodo(newarray)}
}

const addFunc=(title)=>{
  const newitem={id:new Date().getTime(),name:title,isFinished:false};
  setTodo([...todolist,newitem]);
}

return (
    <div className="App">
      <HomeLayout>
      <TodoAdd addFunc={addFunc} />
      <SearchTodo searchTodo={searchTodo}/>
      {todolist.map((item)=>(
        <TodoItem id={item.id} validfunc={validfunc} key={item.id} is={item.isFinished} title={item.name}/>
      ))}
      {console.log(todolist)}
      </HomeLayout>
    </div>
  )
}

export default App
