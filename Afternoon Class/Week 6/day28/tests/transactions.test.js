const request = require('supertest');
const app = require('../index');
const { good, customer, transaction } = require('../models');
let data = [];

beforeAll(async () => {
  data = await Promise.all([good.find(), customer.find()]);
});

describe('/transactions POST', () => {
  it('Transaction must be created', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_good: data[0][Math.floor(Math.random() * data[0].length)]._id,
        id_customer: data[1][Math.floor(Math.random() * data[1].length)]._id,
        quantity: '20',
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_good is not valid', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_good: 'asdasdasdasdasdas',
        id_customer: data[1][Math.floor(Math.random() * data[1].length)]._id,
        quantity: '20',
      });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_customer is not valid', async () => {
    const response = await request(app)
      .post('/transactions')
      .send({
        id_customer: 'asdasdasdasdasdas',
        id_good: data[0][Math.floor(Math.random() * data[0].length)]._id,
        quantity: '20',
      });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('id_customer and id_good is not valid', async () => {
    const response = await request(app).post('/transactions').send({
      id_customer: 'asdasdasdasdasdas',
      id_good: 'adsadsadasdsa',
      quantity: '20',
    });

    expect(response.statusCode).toEqual(400);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('/transactions GET', () => {
  it('Get all transactions', async () => {
    const response = await request(app).get('/transactions');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('Must get 404', async () => {
    await transaction.remove();

    const response = await request(app).get('/transactions');

    expect(response.statusCode).toEqual(404);
    expect(response.body).toBeInstanceOf(Object);
  });
});
