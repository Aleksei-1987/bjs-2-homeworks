function parseCount(amountOfPurchasedUnitsOfGoods) {
  if (isNaN(Number.parseFloat(amountOfPurchasedUnitsOfGoods))) {
    throw new Error("Невалидное значение");
  }

  return parseFloat(amountOfPurchasedUnitsOfGoods);
}

function validateCount(amountOfPurchasedUnitsOfGoods) {
  try {
    return parseCount(amountOfPurchasedUnitsOfGoods);
  } catch (error) {
    return error;
  } finally {
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    return +Math.sqrt(
      (this.perimeter / 2) *
        (this.perimeter / 2 - this.a) *
        (this.perimeter / 2 - this.b) *
        (this.perimeter / 2 - this.c)
    ).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
