/* eslint-disable no-undef */
import app from '../app';

const request = require('supertest');

// TODO: tests are currently failing and yet to be fixed

describe('Test url endpoints', () => {
  const uniqueCodeMock = '82ye6etd';
  const shortUrlMock = 'shorty/82ye6etd';
  const originalUrlMock = 'https://nodejs.org/en/';

  beforeAll(async (done) => {
    const res = await request(app).post('/api/short').send({
      uniqueCode: uniqueCodeMock,
      shortUrl: shortUrlMock,
      originalUrl: originalUrlMock,
    });
    done();
  });
  afterAll(async () => {
    await app.close();
  });

  it('should fetch urls', async () => {
    const response = await request(app)
      .get('/api/short')
      .send()
      .expect('Content-Type', /json/);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('uniqueCode');
    expect(response.body[0]).toHaveProperty('shortUrl');
    expect(response.body[0]).toHaveProperty('originalUrl');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create new url', async (done) => {
    const res = await request(app).post('/api/short').send({
      uniqueCode: uniqueCodeMock,
      shortUrl: shortUrlMock,
      originalUrl: 'https://nodejs.org/en/docs/',
    });
    expect('Content-Type', /json/);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toBeInstanceOf(Object);
    done();
  });

  it('should return error when url field is empty', async (done) => {
    const res = await request(app);
    await request(app)
      .post('/short')
      .send({
        originalUrl: '',
      })
      .expect('Content-Type', /json/)
      .expect('Invalid Url');
    expect(res.statusCode).toEqual(422);
    done();
  });
});
