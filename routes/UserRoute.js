import express from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
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
router.post('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', deleteUser);

export default router;
