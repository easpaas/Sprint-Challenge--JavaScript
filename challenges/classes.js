// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  // methods
  volume() {
    return this.length * this.width * this.height; 
  }   
  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
  constructor(length, width) {
    super(length, width);
  }
  cubeVolume() {
    return this.length * this.width;
  }
  cubeSurfaceArea() {
    return 6 * (this.length * this.width);
  }
}

// create a new Cube
const myCube = new CubeMaker(5, 5, 4);

// console.log the results 
console.log(myCube.cubeVolume());
console.log(myCube.cubeSurfaceArea());