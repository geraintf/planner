
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

  describe('createOrUpdate', () => {
    describe('given there is no record that the user/day combo', () => {
      it('should create a new entry for that day with the new todo in', (done) => {
        TodoController
          .createOrUpdate('5afe123d08150e47c45ee9e1', Date.now(), ['todo'])
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
          .createOrUpdate('5afe123d08150e47c45ee9e1', Date.now(), ['todo1', 'todo2'])
          .then(() => done());
      });


      describe('given a new todo has been added', () => {
        it('should add the new todo ', (done) => {
          TodoController
            .createOrUpdate('5afe123d08150e47c45ee9e1', Date.now(), ['todo1', 'todo2', 'todo3'])
            .then((output) => {
              expect(output.owner.toString()).toEqual('5afe123d08150e47c45ee9e1');
              expect(output.date).toBe(formatTodoDateKey(Date.now()));
              expect(JSON.stringify(output.todos)).toEqual(JSON.stringify(['todo1', 'todo2', 'todo3']));
            })
            .then(() => done());
        });
      });

      describe('given a todo has been removed', () => {
        it('should remove the todo ', (done) => {
          TodoController
            .createOrUpdate('5afe123d08150e47c45ee9e1', Date.now(), ['todo1'])
            .then((output) => {
              expect(output.owner.toString()).toEqual('5afe123d08150e47c45ee9e1');
              expect(output.date).toBe(formatTodoDateKey(Date.now()));
              expect(JSON.stringify(output.todos)).toEqual(JSON.stringify(['todo1']));
            })
            .then(() => done());
        });
      });

      describe('given the order of the todos has changed', () => {
        it('update the order of the todos ', (done) => {
          TodoController
            .createOrUpdate('5afe123d08150e47c45ee9e1', Date.now(), ['todo2', 'todo1'])
            .then((output) => {
              expect(output.owner.toString()).toEqual('5afe123d08150e47c45ee9e1');
              expect(output.date).toBe(formatTodoDateKey(Date.now()));
              expect(JSON.stringify(output.todos)).toEqual(JSON.stringify(['todo2', 'todo1']));
            })
            .then(() => done());
        });
      });
    });
  });
});