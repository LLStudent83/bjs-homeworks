function parseCount(strPars) {
  const pars = Number.parseInt(strPars, 10);
  if (isNaN(pars)) {
    const parseCountErr = new Error("Невалидное значение");
    throw parseCountErr;
  };
  return pars;
};


function validateCount(strPars) {
  try {
    return parseCount(strPars);
  } catch (ErrPars) {
  return ErrPars;
  }
};

class Triangle {
  constructor(a, b, c) {
    if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)){
      const errTr = new Error("Треугольник с такими сторонами не существует");
      throw errTr;
    };
    this.a = a;
    this.b = b;
    this.c = c;
  };

  getPerimeter() {
    return this.a + this.b + this.c;
  };
  getArea() {
    const hp = triangle.getPerimeter() / 2;
    return (Math.floor((Math.sqrt(hp * ((hp - this.a) * (hp - this.b) * (hp - this.c)))) * 1000)) / 1000;;
  };
};



function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    return {
      getPerimeter: function() {
        "Ошибка! Треугольник не существует";
      },
      getArea: function() {
        "Ошибка! Треугольник не существует";
      }
    };
  }
}
