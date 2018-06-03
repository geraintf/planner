import { UserModel } from '../../models';

class UserController {
  constructor() {
    this.model = UserModel;
  }

  findOneByGID(googleId) {
    return this.model.findOne({ googleId });
  }

  findByID(id) {
    return this.model.findById(id);
  }

  create(googleId, firstName, secondName) {
    return this.model.create({ googleId, firstName, secondName });
  }

  createOrRetrieve(googleId, firstName, secondName) {
    return this.findOneByGID(googleId)
      .then((userDetails) => {
        if (!userDetails) {
          return this.create(googleId, firstName, secondName);
        }

        return userDetails;
      });
  }
}

export default new UserController();
