class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return '';
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return '<polygon fill="' + this.color + '" points="0,200 300,200 150,0" />';
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return '<circle fill="' + this.color + '" cx="100" cy="100" r="80" />';
    }
  }
  
  class Square extends Shape {
    constructor(color) {
    super(color);
    }
    
    render() {
    return '<rect fill="' + this.color + '" width="200" height="200" />';
    }
    }
    
    module.exports = {
    Triangle,
    Circle,
    Square
    };