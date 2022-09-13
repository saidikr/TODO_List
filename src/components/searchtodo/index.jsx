export const SearchTodo=({searchTodo})=>{
    return(
        <div className="mt-5 container px-5">
        <input type="text" className=" form-control" onChange={(e)=>searchTodo(e.target.value)} placeholder="search your todo here" />
        </div>
    )
}