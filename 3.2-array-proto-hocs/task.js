function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
let args = [3, 4];

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((item, i) => item === arr2[i]);
  }
}



function memorize(fn, limit) {
  function mSum(args) {
    let elemMem = memory.find(item => compareArrays(item.args, args));
    if (elemMem) {
      return elemMem.result;
    }
      const resultFn = fn(...args);
      memory.push({ args: args, result: resultFn });
      if (memory.length > limit) {
        memory.shift()
      }
      return resultFn;
  }
  console.log(memory);
  return mSum;
}

const mSum = memorize(sum, 2);
mSum(args);
