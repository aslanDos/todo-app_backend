import  express from 'express';
import Todo from '../models/Todo.js';

import protectRoute from '../middleware/auth.js';

const router = express.Router();

router.post("/", protectRoute, async (req,res) => {
    try {
        const {title} = req.body;
        if(!title) return res.status(400).json({message: "Title is required"});

        const newTodo = new Todo({title});

        await newTodo.save();

        res.status(201).json(newTodo);

    } catch (error) {
        console.log("Error creating todo", error);
        res.status(500).json({message: error.message});
    }
})

export default router;