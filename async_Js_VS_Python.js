async function api (idx, time) {
  console.log ('fetching data ', idx);
  return new Promise ((res, rej) => {
    setTimeout (() => {
      console.log ('Hurray !! fetched data ', idx);
      res (200);
    }, time * 1000);
  });
}

// ---------------- runs code line by line the latter is dependent on the former
(async () => {
  // api (45, 1);
  await api (1, 3);
  await api (2, 1);
  await api (3, 1);
}) ();

// ---------------- runs code simultaneously whichever finishes first, it prints that
// (async () => {
//   api (1, 3);
//   api (2, 1);
//   api (3, 1);
// }) ();

// -------------------- DIFFERENCE BETWEEN ASYNC -> PYTHON vs JAVASCRIPT

//  In Javascript ,
//        'async' function can be called without using 'await' then it will run concurrently
//         otherwise if 'await' is used then it will go line by line if there is not a function which is called before without 'await'
//         otherwise this function will break the flow.

//  In Python ,
//        'async' function can't be called without using 'await', instead use 'asyncio.create_task' / 'asyncio.gather' to run concurrently
//         otherwise if 'await' is used then it will go line by line if there is not a function which is called before without 'await'
//         otherwise this function will break the flow.
