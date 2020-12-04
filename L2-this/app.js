
const car = {

    model: 'corolla',
    brand: 'toyota',

    drive: function(){
        console.log(this);
    }
}

// 'this' represent the 'car' object!
car.drive();

const boom = car.drive;

// this will be the global object, eg the window object in the browser
boom();

// why?
// 'this' === the calling context
// previously we call the drive function from the car object. Therefore 'this' represent the car object

// now the 'boom' variable is a copy of the drive function, and we are calling it on its own, ie there is no context
// so the context will default to the global object ie windows object in the browser


console.log(this);


// application
const toad = {
    xPos: 0,
    yPos: 0,
    moveLeft: function (unit) {
        this.xPos -= unit;
    },
    moveUp: function (unit) {
        this.yPos += unit;
    },
    moveRight: function (unit) {
        this.xPos += unit;
    },
    moveDown: function (unit) {
        this.yPos += unit;
    },
    getPosition(){
        console.log(this.xPos, this.yPos);
        function inner() {
            console.log(this);
        }
        inner();
    }
};

toad.moveRight(50);
toad.getPosition();



// conclusion:
// `this` represent the calling context
// `this` is useful to access information in the current context, eg updating value of the object instance