String.prototype.isPalindrome = function(){
  const strL = str.toLowerCase();
  if (strL.split("").reverse().join("").split(" ").join("") === strL.split(" ").join("")) {
    return true;
  } else { return false };
};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
