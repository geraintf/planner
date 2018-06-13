import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  date: String,
  owner: Schema.Types.ObjectId,
  todos: [{
    todoId: String,
    text: String,
    completed: Boolean
  }],
  comments: String
});

const TodoModel = mongoose.model('Todos', TodoSchema);

export default TodoModel;
