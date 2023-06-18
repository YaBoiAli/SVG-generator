const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return the SVG string for a triangle with the given color', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe('<polygon fill="red" points="100,10 40,198 190,78 10,78 160,198" />');
  });
});

describe('Circle', () => {
  test('render method should return the SVG string for a circle with the given color', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle fill="blue" cx="100" cy="100" r="80" />');
  });
});

describe('Square', () => {
  test('render method should return the SVG string for a square with the given color', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect fill="green" width="200" height="200" />');
  });
});