import mongoose from 'mongoose';

const Todo = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  //   userId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Users', // Menyatakan hubungan dengan model "User"
  //   },
});

export default mongoose.model('Todos', Todo);
