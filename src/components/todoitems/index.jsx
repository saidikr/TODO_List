import "./style.css"
export const TodoItem=({title,is,id,validfunc})=>{
    return(
    <div className="mt-5 card w-75 container">
        <div className="card-body d-flex justify-content-between">
            <h5 className={is===false?"card-title mx-1":"card-title mx-1 finished"}>{title}</h5>
            <div>
            <button className="btn btn-success mx-1" onClick={()=>validfunc(id)} >Finished</button>
            <button className="btn btn-danger mx-1">x</button>
            </div>
        </div>
    </div>

    )
}