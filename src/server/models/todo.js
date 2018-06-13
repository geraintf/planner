import mongoose from 'mongoose';
import uuidv4 from 'uuid/v4';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  date: String,
  owner: Schema.Types.ObjectId,
  todos: [{
    todoId: { type: String, default: () => uuidv4() },
    text: String,
    completed: Boolean
  }],
  comments: String
});

const TodoModel = mongoose.model('Todos', TodoSchema);

export default TodoModel;
