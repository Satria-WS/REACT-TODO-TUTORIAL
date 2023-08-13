import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { getAllToDo , addTodo} from "../utils/HandleApi";

// text, updateMode, deleteToDo
interface ToDoItem {
  _id: string;
  text: string;
}

const AddToDo: React.FC = () => {
  const [toDo, setToDo] = useState<ToDoItem[]>([]);
  const [text, setText] = useState<any>("");



  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={()=>addTodo(text,setText,setToDo)}>
            Add
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return <ToDo key={item._id} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
