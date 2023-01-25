// galamouyal => galamouyal@gmail.com
//                  0          1       2         3      4       5       6
const users = ["galamouyal", "idoo", "avip", "avip2", "noyb", "mayc", "tovid"];

// mutation array - adding domain email suffix
for (let index = 0; index < users.length; index++) {
  // console.log(users[index] + "@gmail.com");
  if (users[index] === "idoo") {
    users[index] = `${users[index]}@hotmail.com`;
  } else if (users[index] === "avip") {
    users[index] = `${users[index]}@walla.com`;
  } else {
    users[index] = `${users[index]}@gmail.com`;
  }
}

// filter only the users with gmail domain
const gmailUsers = [];
for (let index = 0; index < users.length; index++) {
  if (users[index].includes("@gmail.com") === true) {
    gmailUsers.push(users[index]);
  }
}
