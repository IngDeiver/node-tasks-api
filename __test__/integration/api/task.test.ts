/* eslint-disable no-underscore-dangle */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import supertest from 'supertest';
import expres from 'express';
import server from '../../../src/app';

let app: expres.Application;
let request: supertest.SuperTest<supertest.Test>;
beforeAll(() => {
  app = server.app;
  request = supertest(app);
});

// list
it('should get list tasks', async () => {
  const response = await request.get('/api/task');
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});

// save
describe('should save task', () => {
  it('should save with 200 status', async () => {
    const title = 'Task saved with unit tes';
    const response = await request.post('/api/task')
      .send({ title })
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body.title).toBeDefined();
    expect(response.body.title).toEqual(title);
  });

  it('should fail save without title property with 400 status', async () => {
    const response = await request.post('/api/task')
      .set('Accept', 'application/json');
    expect(response.status).toBe(400);
    expect(response.body.title).toBeUndefined();
  });
});

// get by id
describe('should get task by id', () => {
  it('should response with 200 status', async () => {
    const id = '5fe0cc7e59509f48025a35f9';
    const response = await request.get(`/api/task/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('Task saved with unit tes');
  });

  it('should response with 404 status', async () => {
    const id = '5fe0287346956c638f701222';
    const response = await request.get(`/api/task/${id}`);
    expect(response.status).toBe(404);
    expect(response.body.title).toBeUndefined();
  });
});

// update
describe('should update a task', () => {
  it('should update with 200 status', async () => {
    const id: string = '5fe02a4203cba8663586181b';
    const task = { title: 'Task update with test' };
    const response = await request.put(`/api/task/${id}`)
      .send(task);
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(task.title);
  });

  it('should fail with 404 status', async () => {
    const id = '5fe0287346956c638f701bd2';
    const response = await request.put(`/api/task/${id}`)
      .send({ title: 'Task update with test' });
    expect(response.status).toBe(404);
    expect(response.body.title).toBeUndefined();
  });
});

// remove
describe('should remove a task', () => {
  it('should fail with 404 status', async () => {
    const id = '5fe0287346956c638f701bd2';
    const response = await request.delete(`/api/task/${id}`);
    expect(response.status).toBe(404);
    expect(response.body.title).toBeUndefined();
  });
});
