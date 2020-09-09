/*//Задание 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames(){
  return weapons.map(item => item.name);
};

function getCountReliableWeapons(durabl){
  return weapons.filter(item => item.durability > durabl).length;
}
function hasReliableWeapons(durabl) {
  return weapons.some(item => item.durability > durabl);
}

function getReliableWeaponsNames(durabl) {
  let arr = weapons.filter(item => item.durability > durabl);
  return arr.map(item => item.name);
}

function getTotalDamage() {
  return weapons.reduce((acc, item) => {
    return acc + item.attack;
  }, 0);
}*/
// Задание 2
function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};
let args = [3, 4];

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2){
  if(arr1.length === arr2.length){
    return arr1.every((item, i) => item === arr2[i]);
  }
};

function memorize() {
  const mSum = (args) => {
    console.log(ards);
  };
  
}

function memorize(fn, limit) {
  let memory = [];
  function mSum(args){
    for (let i = 0; i < memory.length; i++) {
      if(compareArrays(args, memory[i].args)) {
        return memory[i].result;
      } else {
        memory.push({args:args, result:sum(...args)});
        if(memory.length > limit){
          memory.shift()
          return memory[memory.length - 1];
        }
      }
      
    }
  }
  return mSum;
}