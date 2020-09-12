
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
