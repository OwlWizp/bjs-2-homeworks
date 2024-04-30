function parseCount(parseValue) {
    if (Number.isNaN(Number.parseFloat(parseValue))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(parseValue)
}

function validateCount(parseValue) {
    try {
        return parseCount(parseValue);
    } catch (error) {
        return error;
    } 
}

class Triangle {
    constructor (a,b,c) {
        if ((a + b < c) || (a + c < b) || (c + b < a) ) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area  () {
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let p = (a + b + c)*0.5;
        return Number.parseFloat(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
    }
}

function getTriangle (a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch {
        return  { 
            get perimeter () {
                return "Ошибка! Треугольник не существует";
            },
            get area () {
                return "Ошибка! Треугольник не существует";
            }
        };
    }

}