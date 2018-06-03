
import mongoose from 'mongoose';
import MongodbMemoryServer from 'mongodb-memory-server';

import UserController from '../user';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;

const mockUser = {
  googleId: 'abc12345',
  firstName: 'John',
  secondName: 'Smith'
};
let createdUser;

describe('UserController', () => {
  beforeEach(async () => {

    mongoServer = new MongodbMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(mongoUri);
  });

  afterAll((done) => {
    mongoose.disconnect(done);
    mongoServer.stop();
  });

  describe('create', () => {
    it('should create the user', (done) => {
      const { googleId, firstName, secondName } = mockUser;

      UserController
        .create(googleId, firstName, secondName)
        .then((user) => {
          expect(user.googleId).toEqual(googleId);
          expect(user.firstName).toEqual(firstName);
          expect(user.secondName).toEqual(secondName);
        })
        .then(() => done());
    });
  });

  describe('findOneByGID', () => {
    beforeEach((done) => {
      const { googleId, firstName, secondName } = mockUser;

      UserController
        .create(googleId, firstName, secondName)
        .then((user) => {
          createdUser = user;
        })
        .then(() => done());
    });

    it('should return the result with that ID', (done) => {
      UserController
        .findOneByGID(mockUser.googleId)
        .then((user) => {
          expect(user.googleId).toEqual(createdUser.googleId);
          expect(user.firstName).toEqual(createdUser.firstName);
          expect(user.secondName).toEqual(createdUser.secondName);
        })
        .then(() => done());
    });

  });

  describe('findByID', () => {
    beforeEach((done) => {
      const { googleId, firstName, secondName } = mockUser;

      UserController
        .create(googleId, firstName, secondName)
        .then((user) => {
          createdUser = user;
        })
        .then(() => done());
    });

    it('should return the result with that ID', (done) => {
      UserController
        .findByID(createdUser.id)
        .then((user) => {
          expect(user.id).toEqual(createdUser.id);
          expect(user.googleId).toEqual(createdUser.googleId);
          expect(user.firstName).toEqual(createdUser.firstName);
          expect(user.secondName).toEqual(createdUser.secondName);
        })
        .then(() => done());
    });
  });

  describe('createOrRetrieve', () => {
    describe('given a user already exists', () => {
      beforeEach((done) => {
        const { googleId, firstName, secondName } = mockUser;

        UserController
          .create(googleId, firstName, secondName)
          .then((user) => {
            createdUser = user;
          })
          .then(() => done());
      });

      it('should not create a new user', (done) => {
        const spy = jest.spyOn(UserController, 'create');

        const { googleId, firstName, secondName } = mockUser;

        UserController
          .createOrRetrieve(googleId, firstName, secondName)
          .then(() => {
            expect(spy).not.toHaveBeenCalled();
          })
          .then(() => done());
      });
    });

    describe('given a user doesnt exist', () => {
      it('should create a new user', (done) => {
        const spy = jest.spyOn(UserController, 'create');

        const { googleId, firstName, secondName } = mockUser;

        UserController
          .createOrRetrieve(googleId, firstName, secondName)
          .then(() => {
            expect(spy).toHaveBeenCalled();
          })
          .then(() => done());
      });
    });
  });
});