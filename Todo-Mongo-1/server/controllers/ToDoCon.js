import ToDoModel from "../models/ToDoModel.js";

//find data
const getToDo = async (req, res) => {
  const toDO = await ToDoModel.find();
  res.send(toDO);
};

//save data or create data
const saveToDo = async (req, res) => {
  const { text } = req.body;
  //In this code, before creating a new todo, it checks if a todo with the same text already exists or not in the database.
  const existingTodo = await ToDoModel.findOne({ text });
  if (existingTodo) {
    return (
      res.status(400).send("This object already exist") &&
      console.log("this object already exist")
    );
    //  return console.log("puppy") && res.status(400).send("This objeasdct already exist")//will stuck infinite loading if using this code
  }
  ToDoModel.create({ text })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => console.log(err) && res.status(500).send("error"));
};

//update
const updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.status(200).send("update succes"))
    .catch((err) => console.log(err));
};

//deleteTodo
const deleteTodo = async (req, res) => {
  
  const { _id } = req.body;

  const deleteTodo = await ToDoModel.findByIdAndDelete(_id);

  if (!deleteTodo) {
  return res.status(404).send("Data not found")
  }

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.status(200).send("deleteSuccesfully"))
    .catch((err) => res.status(400).send("delete Error") && console.log(err));
};

export default { getToDo, saveToDo , updateToDo,deleteTodo};
