import { User } from '../models';

const findOneByGID = googleId => User.findOne({ googleId });

const findByID = id => User.findById(id);

const create = ({
  googleId,
  firstName,
  secondName
}) => User.create({ googleId, firstName, secondName });

const createOrRetrieveUser = async ({ googleId, firstName, secondName }) => {
  let userDetails = {};

  try {
    userDetails = await findOneByGID(googleId);

    if (!userDetails) {
      userDetails = await create({ googleId, firstName, secondName });
    }
  } catch (err) {
    console.error(err);
  }
  return userDetails;
};


export default {
  findOneByGID,
  findByID,
  create,
  createOrRetrieveUser
};
