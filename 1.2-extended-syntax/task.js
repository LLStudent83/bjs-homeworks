"use strict"
function getResult(a,b,c){
  let D = Math.pow(b,2) - 4 * a * c;
  let x = [];
  if (D > 0){
    x[0] = (- b + Math.sqrt(D)) / (2 * a);
    x[1] = (- b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    x[0] = (- b)/ (2 * a);
  } else {
    x[0] = "Решение отсутствует";
  }
    return x;
}


function getAverageMark(marks){
  let averageMark;
  if (marks.length ===0){
    averageMark = 0;
  } else {
    marks_5 = marks.slice(0,5);
    averageMark = (marks_5.reduce(function(a, b) {return a + b}) /marks_5.length);
  }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
  let age = (new Date().getFullYear()) - dateOfBirthday;
  let result
  if (age >= 18) {
  result = `Не желаете ли олд-фэшн, ${name}?`
} else {
  result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
}
  return result;
}
