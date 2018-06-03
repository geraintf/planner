
import mongoose from 'mongoose';
import MongodbMemoryServer from 'mongodb-memory-server';

import TodoController from '../todo';
import { formatTodoDateKey } from "../../../../utils/date-utils";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

let mongoServer;

describe('TodoController', () => {
  beforeEach(async () => {

    mongoServer = new MongodbMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    await mongoose.connect(mongoUri);
  });

  afterAll((done) => {
    mongoose.disconnect(done);
    mongoServer.stop();
  });

  describe('add', () => {
    describe('given there is no record that the user/day combo', () => {
      it('should create a new entry for that day with the new todo in', (done) => {
        TodoController
          .add('5afe123d08150e47c45ee9e1', Date.now(), 'todo')
          .then((output) => {
            expect(output.owner.toString()).toEqual('5afe123d08150e47c45ee9e1');
            expect(output.date).toBe(formatTodoDateKey(Date.now()));
            expect(JSON.stringify(output.todos)).toEqual(JSON.stringify(['todo']));
          })
          .then(() => done());
      });
    });

    describe('given there IS a record that the user/day combo', () => {
      beforeEach((done) => {
        TodoController
          .add('5afe123d08150e47c45ee9e1', Date.now(), 'todo')
          .then(() => done());
      });

      it('should add a new entry to the correct document', () => {
        TodoController
          .add('5afe123d08150e47c45ee9e1', Date.now(), 'todo')
          .then((output) => {
            expect(output.owner.toString()).toEqual('5afe123d08150e47c45ee9e1');
            expect(output.date).toBe(formatTodoDateKey(Date.now()));
            expect(JSON.stringify(output.todos)).toEqual(JSON.stringify(['todo', 'todo']));
          })
          .then(() => done());
      });
    });
  });
});