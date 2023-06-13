const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'Df4Kp@example.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John Doe1',
      email: 'Df4K1p@example.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'John Doe2',
      email: 'Df4Kp22@example.com',
      password_hash: await bcryptjs.hash('12345', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  down() {},
};
