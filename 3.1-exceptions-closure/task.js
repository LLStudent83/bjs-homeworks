function parseCount(strPars){
  const pars = Number.parseInt( strPars, 10 );
  if (pars == NaN) {
    throw "Невалидное значение"
  };
return pars;
};
parseCount("kjn");

const divider = (a,b) => {
  if(b == 0)
  throw"Ошибка деления на 0";
return a/b;
};

console.log(divider(1,2));// 0.5
console.log(divider(1,0));// "Ошибка деления на 0";
