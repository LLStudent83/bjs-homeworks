function getSolutions( a, b, c ) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let x1;
  let x2;
  let rootsObj = {
    D: D,
    roots:[],
  };

  if (D < 0) {
    roots:[];

  } else if (D === 0) {
    x1 = (- b)/ (2 * a);
    rootsObj.roots[0] = x1;

  } else if (D > 0){
    x1 = (- b + Math.sqrt(D)) / (2 * a);
    x2 = (- b - Math.sqrt(D)) / (2 * a);
    rootsObj.roots.push(x1, x2);

  }
  return rootsObj;
}

function showSolutionsMessage(a, b, c){

  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
  Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`)
  } if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂   = ${result.roots[1]}`)
  };
};

function getAverageScore(data){
let averageGrade = new Object();
let mean = [];
  for(let proper in data){
    averageGrade[proper] = getAverageMark(data[proper]);
  };
  for(let prop in data){
    mean.push(getAverageMark(data[prop]));
  };
averageGrade.average = (getAverageMark(mean));
return averageGrade;
}


function getAverageMark(marks){
  let sumArr = 0;
  for (let i = 0;i < marks.length;i++) {
    sumArr = sumArr + marks[i];
  }
  let arrAverage = sumArr / marks.length;
  return arrAverage;
}
