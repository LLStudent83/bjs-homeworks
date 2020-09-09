function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
};
let args = [1, 2, 3];
function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2) { //сравнивает массивы
  console.log(arr1, arr2);
  if (arr1.length === arr2.length) {
    return arr1.every((item, i) => item === arr2[i]);
  }
};

function memorize(sum, limit) {
  let memory = [];
  const mSum = (...args) => {
    for (let i = 0; i < memory.length; i++) {
      if (compareArrays(args, memory[i].args)){
        return memory[i].result
      } else {
        memory.push({ args: args, result: sum() });
        console.log(memory);
        if (memory.length > limit) {
          memory.pop();
          return memory[0];
        }
      }
    }

  };
  return mSum; 
}
memorize(sum, 5)(...args);


/*const memory = [
  {args:[1,2,3], result: 12},
  {args:[2,4,8], result: 15},
  {args:[2,4,7], result: 10},
  {args:[4,7,30], result: 0},
  {args:[436,3], result: 60},
  {args:[1], result: 10},
  {args:[1,2,3,4,5], result: 23},
  {args:[1,2,3,6,5,2], result: 83},
  {args:[1,4,23,6,31,1,9], result: 423},
  {args:[1,3,4,52,25,3,6], result: 645},];
*/
