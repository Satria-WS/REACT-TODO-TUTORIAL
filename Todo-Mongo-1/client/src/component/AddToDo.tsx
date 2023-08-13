import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import { getAllToDo, addTodo, updateTodo } from "../utils/HandleApi";


interface ToDoItem {
  _id: string;
  text: string;
}

const AddToDo: React.FC = () => {
  const [toDo, setToDo] = useState<ToDoItem[]>([]);
  const [text, setText] = useState<any>("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setTodoID] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateModeX= (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoID(_id)
  }

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
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(toDoId, text , setToDo  ,setText,setIsUpdating)
                : () => addTodo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return <ToDo
              key={item._id}
              text={item.text}
              updateMode={()=> updateModeX(item._id,item.text)}
              />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
