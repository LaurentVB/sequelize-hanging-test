const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', { dialect: 'postgres' });

it('leaves the test runner hanging after test execution', () => {
  return sequelize.query("SELECT 'foo';").then(function () {
    expect(true).toBe(true);
  })
});
