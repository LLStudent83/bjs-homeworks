String.prototype.isPalindrome = function(){
  const strL = this.toLowerCase();
  if (strL.split("").reverse().join("").split(" ").join("") === strL.split(" ").join("")) {
    return true;
  } else { return false };
};

function getAverageMark(marks) {
  let arrSumm = 0;
  for (let i = 0; i < marks.length; i++) {
    arrSumm = arrSumm + marks[i];
    };
  let average = arrSumm / marks.length; // средний балл
  let roundedAverage = Math.round(average); //округляем до ближайшего целого
  return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
