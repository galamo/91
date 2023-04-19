const faker = require("fakergaljs");

const users = [];
for (let index = 0; index < 300; index++) {
  users.push(getUser());
}

function getUser() {
  return {
    userName: faker.generateUser(),
    age: faker.generateAge(),
    birthDate: faker.generateBirthDate(),
  };
}
console.log(users);
