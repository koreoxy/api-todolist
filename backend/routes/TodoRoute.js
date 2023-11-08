import express from 'express';
import {
  addTodo,
  deleteTodo,
  getTodo,
  getTodoById,
  updateTodo,
} from '../controllers/TodoController.js';

const router = express.Router();

// ROUTE -- ENDPOINT
router.get('/todos', getTodo);
router.get('/todos/:id', getTodoById);
router.post('/todos', addTodo);
router.patch('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
