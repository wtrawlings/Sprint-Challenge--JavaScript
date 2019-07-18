// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

/* THIS IS THE OLD VERSION */
/*
function CuboidMaker(attr) {
    this.lengthA = attr.lengthA;
    this.widthA = attr.widthA;
    this.heightA = attr.heightA;
};
CuboidMaker.prototype.volume = function() {
    return this.lengthA * this.widthA * this.heightA;
};
CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.lengthA * this.widthA + this.lengthA * this.heightA + this.widthA * this.heightA);
};

const cuboid = new CuboidMaker({
    lengthA: 4,
    widthA: 5,
    heightA: 5,
});
console.log(cuboid); // checking to see if this worked. It did.
*/

/* THIS IS THE CLASS VERSION */
class CuboidMaker {
    constructor(lengthA, widthA, heightA) {
        this.lengthA = lengthA;
        this.widthA = widthA;
        this.heightA = heightA;
    }
    volume() {
        return this.lengthA * this.widthA * this.heightA;
    }
    surfaceArea() {
        return 2 * (this.lengthA * this.widthA + this.lengthA * this.heightA + this.widthA * this.heightA);
    }
}

/* this is the OLD cuboid object 
const cuboid = new CuboidMaker({
    lengthA: 4,
    widthA: 5,
    heightA: 5,
});
*/
const cuboid = new CuboidMaker(4, 5, 5);

/**this is a test */
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130