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
    parseCount(strPars);
    return parseCount(strPars);
  } catch (ErrPars) {
  return ErrPars;
  }
};

class Triangle {
  constructor(a, b, c) {
    if (((a + b) <= c) || ((a + c) <= b)) {
      const errTr = new Error("Треугольник с такими сторонами не существует");
      throw errTr;
    };
    this.a = a;
    this.b = b;
    this.c = c;
  };

  getPerimeter() {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    const p = a + b + c;
    return p;
  };
  getArea() {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    const hp = (a + b + c) / 2;
    const s = (Math.floor((Math.sqrt(hp * ((hp - a) * (hp - b) * (hp - c)))) * 1000)) / 1000;
    return s;
  };
};

function getTriangle(a, b, c) {
  try {
    let triangle2 = new Triangle(a, b, c);
    return triangle2;
  } catch(err) {
    const triangleErr = {
      getPerimeter: function() {
        return "Ошибка! Треугольник не существует";
      },
      getArea: function() {
        return "Ошибка! Треугольник не существует";
      }
    };
    return triangleErr;
  }
}
