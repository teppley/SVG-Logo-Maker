const {Circle, Square, Triangle, Ellipse, Star} = require("./shapes")

// Test Circle Shape

describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
    });
  });

  // Test Square Shape

  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`);
      });
    });

  // Test Triangle Shape

  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);
      });
    });

    // Test Ellipse Shape

    describe('Ellipse', () => {
      test('renders correctly', () => {
        const shape = new Ellipse();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<ellipse cx="50%" cy="50%" rx="100" ry="50" height="100%" width="100%" fill="${color}"></ellipse>`);
      });
    });
    
    // Test Star Shape

    describe('Star', () => {
      test('renders correctly', () => {
        const shape = new Star();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="${color}"></polygon>`);
      });
    });
    