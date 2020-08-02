"use strict"
function getResult(a,b,c){
  let D = Math.pow(b,2) - 4 * a * c;
  let x = [];
  if (D > 0){
    x[0] = (- b + Math.sqrt(D)) / (2 * a);
    x[1] = (- b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    x[0] = (- b)/ (2 * a);
  }
    return x;
}


function getAverageMark(marks){
  let sum = 0;
  if (marks.length === 0){
    return 0;
  } else if (marks.length > 5){
    console.log("Оценок больше 5");
    marks = marks.slice(0,5);
  }
  for (let i = 0;i < marks.length;i++) {
      sum = sum + marks[i];
    }
      return  sum / marks.length;
  } 

function askDrink(name,dateOfBirthday){
  let age = (new Date().getFullYear()) - (dateOfBirthday.getFullYear());
  if (age >= 18) {
  return `Не желаете ли олд-фэшн, ${name}?`
} else {
  return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
}
}
