import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import Todo from '../models/TodoModel.js';

// GET ALL USER
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ADD USER
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  //HASH PASSWORD
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // CREATE NEW USER
  const newUser = new User({ name, email, password: hashedPassword });
  try {
    const addUser = await newUser.save();
    res.status(201).json(addUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE USER
// export const updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//     );
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update you own account'));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json({ rest });
  } catch (error) {
    next(error);
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET USER TODO
export const getUserTodo = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const todos = await Todo.find({ userRef: req.params.id });
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, 'You can only view your own todo'));
  }
};
