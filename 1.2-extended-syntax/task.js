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
    }
    return x;
}


function getAverageMark(marks){
  let averageMark;
  let sum = 0;
  if (marks.length === 0){
    averageMark = 0;
  } else if (marks.length > 5){
    console.log("Оценок больше 5");
    let marks_5 = marks.slice(0,5);
    for (let i = 0;i < marks_5.length;i++) {
      sum = sum + marks_5[i];
    }
    averageMark = sum / marks_5.length;
  } else {
    for (let i = 0;i < marks.length;i++) {
      sum = sum + marks[i];
    }
    averageMark = sum / marks.length;
  }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
  let age = (new Date().getFullYear()) - (dateOfBirthday.getFullYear());
  let result
  if (age >= 18) {
  return `Не желаете ли олд-фэшн, ${name}?`
} else {
  return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
}
}
