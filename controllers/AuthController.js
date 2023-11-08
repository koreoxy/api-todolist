import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  //HASH PASSWORD
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // CREATE NEW USER
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json('User berhasil di daftarkan!!');
  } catch (error) {
    res.status(500).json(error.message);
  }
};
