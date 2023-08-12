import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  }
})

let todoModel;
export default  todoModel = mongoose.model("ToDo", todoSchema);