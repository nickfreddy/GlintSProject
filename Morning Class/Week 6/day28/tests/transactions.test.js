const request = require('supertest');
const app = require('../index');
const { good, customer } = require('../models');
let data = [];

beforeAll(async () => {
  data = await Promise.all([good.find(), customer.find()]);
});

describe('/transactions POST', () => {
  it('Transactions must be created', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_good: data[0][Math.floor(Math.random() * data[0].length)]._id,
        id_customer: data[1][Math.floor(Math.random() * data[1].length)]._id,
        quantity: '10',
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_good is not valid', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_good: 'asdsadasdsadsa',
        id_customer: data[1][Math.floor(Math.random() * data[1].length)]._id,
        quantity: '10',
      });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_customer is not valid', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_good: data[0][Math.floor(Math.random() * data[0].length)]._id,
        id_customer: 'asdsadasdsadsa',
        quantity: '10',
      });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_good and id_customer is not valid', async () => {
    const response = await request(app).post('/transactions').send({
      id_good: 'asdsadasdsadsa',
      id_customer: 'asdsadasdsadsa',
      quantity: '10',
    });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });
});
