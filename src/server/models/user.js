import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  secondName: String,
  googleId: String
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
