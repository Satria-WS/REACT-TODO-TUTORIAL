import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { getAllToDo } from "../utils/HandleApi";

const AddToDo = () => {
  const [toDo , setToDo] = useState([])

  useEffect(() => {
    getAllToDo(setToDo)
  },[])
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
 
        <div className="top">
          <input type="text" placeholder="Add ToDos" />
           <div className="add">Add</div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return (
              <ToDo key={item._id} text={item.text}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
