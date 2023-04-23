function generateUser() {
  return `user_${Math.ceil(Math.random() * 999999)}`;
}

function generateAge() {
  return Math.ceil(Math.random() * 120);
}

function generateBirthDate() {
  return new Date().toISOString();
}

function generateUserObject() {
  return {
    userName: generateUser(),
    age: generateAge(),
    bd: generateBirthDate(),
  };
}

// test
// console.log(generateBirthDate(), generateAge(), generateUser());

export { generateUser, generateAge, generateBirthDate };
export default generateUserObject;
