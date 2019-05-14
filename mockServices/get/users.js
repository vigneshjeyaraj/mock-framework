const faker = require('faker');

// Users with the standard Template response.
module.exports = {
    path: '/users/:userId',
    template: {
      id: params => Number(params.userId),
      name: () => faker.name.findName(),
      email: () => faker.internet.email(),
      status: (params, query) => query.status,
      lorem: true
    }
  };