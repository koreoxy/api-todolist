import express from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
  getUserTodo,
  getUsers,
  updateUser,
} from '../controllers/UserController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// ROUTE -- ENDPOINT
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
router.patch('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', deleteUser);

//route todo user
router.get('/users/todo/:id', verifyToken, getUserTodo);

export default router;
