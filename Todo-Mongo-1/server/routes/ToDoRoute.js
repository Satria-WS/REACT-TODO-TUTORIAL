import { Router } from "express";
import ToDoCon from "../controllers/ToDoCon.js"


const router = Router();

// router.get("/", (req, res) => {
//   res.json({ message: "respond success" });
// })
router.get("/", ToDoCon.getToDo)
router.post("/save",ToDoCon.saveToDo)
router.put("/update", ToDoCon.updateToDo)
router.post("/delete" , ToDoCon.deleteTodo)




export default router;