import axios from "axios";
const baseUrl = "http://localhost:5000";

interface setToDox {
  (data: any): void;
}
// type setToDox = (data:any)=>void

const getAllToDo = (setTodox: setToDox) => {
  axios.get(baseUrl).then(({ data }: any) => {
    console.log("data --->", data);
    setTodox(data);
  });
};

//add type
type SetStringState = React.Dispatch<React.SetStateAction<string>>;
type SetTodoState = React.Dispatch<React.SetStateAction<any[]>>;
type setText = SetStringState;
type setTodo = SetTodoState;

const addTodo = (text: string, setText: setText, setTodo: setTodo): void => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setTodo); //will be render if added
  });
};

const updateTodo = (toDoId, text, setTodo, setText, setIsUpdating) => {
  axios.put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
    console.log(data);
    setText("");
    setIsUpdating(false);
    getAllToDo(setTodo);
  });
};

export { getAllToDo, addTodo , updateTodo };

//logicInfo
/*
const data = [{
  _id : "asdfsdfsdfsdf",
  text:"susu"
}]
function getAllTodo(setTodox) {
  // console.log("data --->", data);
   setTodox(data)
} 
function setToDo(toDo) {
  console.log(toDo)
  return toDo;
}
getAllTodo(setToDo);
*/
////////////////////////////////////////////////////

// const data = [{
//   _id : "asdfsdfsdfsdf",
//   text:"susu"
// }]

// function getAllTodo(setTodox) {
//   // console.log("data --->", data);
//     console.log("getAllTodo?",setTodox(data))
//     setTodox(data)
//     return data;
// }

// function setToDo(toDo) {
//   // console.log(toDo)
//   return toDo;
// }
// // getAllTodo(setToDo);
// const toDo = getAllTodo(setToDo);
// console.log(toDo)//[ { _id: 'asdfsdfsdfsdf', text: 'susu' } ] before undefined
