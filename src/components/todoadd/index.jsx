import { useState } from "react"
export const TodoAdd=({addFunc})=>{
    const [text,setText]=useState("")
    return(
        <>
        <div className="from-group text-center d-flex container">
        <input className="form-control" type="text" onChange={(e)=>setText(e.target.value)} placeholder="enter your todo name here" />
        <button className="btn btn-primary" onClick={()=>addFunc(text)}>AddTodo</button>
        </div>
        </>
    )
}