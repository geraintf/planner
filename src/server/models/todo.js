import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  date: String,
  owner: Schema.Types.ObjectId,
  todos: [String],
  comments: String
});

const TodoModel = mongoose.model('Todos', TodoSchema);

export default TodoModel;
