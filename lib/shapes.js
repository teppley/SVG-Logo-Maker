// Defines the Shape Class

class Shape {

    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}
// Defines the Cirlce Shape

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
}
// Defines the Square Shape

class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
}
// Defines the Triangle Shape

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}
//Defines the Ellipse Shape

class Ellipse extends Shape {
    render() {
      return `<ellipse cx="50%" cy="50%" rx="100" ry="50" height="100%" width="100%" fill="${this.color}"></ellipse>`;
    }
  }
//Defines the Star Shape

  class Star extends Shape {
    render() {
        return `<polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="${this.color}"></polygon>`;
    }
  }

  module.exports = { Circle, Square, Triangle, Ellipse, Star }; 