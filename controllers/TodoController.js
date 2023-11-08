import Todo from '../models/TodoModel.js';

// GET ALL TASK
export const getTodo = async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET TODO BY ID
export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ADD TODO
export const addTodo = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    const addtodo = await todo.save();
    res.status(201).json(addtodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE TODO
export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE TODO
export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
