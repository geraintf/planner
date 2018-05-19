import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  secondName: String,
  googleId: String
});

const User = mongoose.model('User', UserSchema);

export default User;