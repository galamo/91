function generateUser() {
  return `user_${Math.ceil(Math.random() * 999999)}`;
}

function generateAge() {
  return Math.ceil(Math.random() * 120);
}

function generateBirthDate() {
  return new Date().toISOString();
}

// test
// console.log(generateBirthDate(), generateAge(), generateUser());

module.exports = {
  generateUser,
  generateAge,
  generateBirthDate,
  a: "test",
};
