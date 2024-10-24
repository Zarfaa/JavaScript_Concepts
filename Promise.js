let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, 1000);
});

let promise2 = new Promise((reject) => {
    setTimeout(() => {
     reject("error");
    }, 1000);
  });

let promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!");
    }, 1000);
  });


Promise.allSettled([promise1, promise3,  promise2])
  .then((values) => console.log(values))
  .catch((error) => console.error(error));

  Promise.race([promise3, promise1,  promise2])
  .then((values) => console.log(values))
  .catch((error) => console.error(error));

  Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.error(error));
