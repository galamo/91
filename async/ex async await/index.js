function getCounterFromServer(large) {
  return new Promise((res, rej) => {
    if (large > 100) res(Math.ceil(Math.random() * 9999));
    else rej("Counter is too small");
  });
}


