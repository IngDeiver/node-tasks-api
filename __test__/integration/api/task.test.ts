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

describe('Api', () => {
  it('should get list tasks', async () => {
    const response = await request.get('/api/task');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should save task', async () => {
    const title = 'Task saved with unit tes';
    const response = await request.post('/api/task')
      .send({ title })
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body.title).toBeDefined();
    expect(response.body.title).toEqual(title);
  });

  it('should fail save without title property', async () => {
    const response = await request.post('/api/task')
      .set('Accept', 'application/json');
    expect(response.status).toBe(500);
    expect(response.body.title).toBeUndefined();
  });
});
