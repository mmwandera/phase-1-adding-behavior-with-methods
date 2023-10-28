// Your code here

// Create classes Cat, Dog, and Bird
// Each of these classes will accept the parameters name and sex and will store those values as properties.
class Cat{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    // For an instance of Cat, speak returns "name says meow!",
    speak(){
        return`${this.name} says meow!`
    }
}


class Dog{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    // For an instance of Dog, speak returns "name says woof!"
    speak(){
        return`${this.name} says woof!`
    }
}

class Bird{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    // For an instance of Bird, speak returns conditional output. If the instance of Bird is male, speak returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".
    speak(){
        if(this.sex === "male"){
            return`It's me! ${this.name}, the parrot!`
        }else{
            return `${this.name} says squawk!`;
        }
    }
}

// Example Usage
const topBoyCat = new Cat("Jaq", "femmale");
console.log(topBoyCat.speak());
// LOG => Jaq says meow!

const topBoyDog = new Dog("Sully", "male");
console.log(topBoyDog.speak());
// LOG => Sully says woof!

const topBoyMaleBird = new Bird("Dris", "male");
console.log(topBoyMaleBird.speak());
// LOG => It's me! Dris, the parrot!

const topBoyFemaleBird = new Bird("Lauryn", "female");
console.log(topBoyFemaleBird.speak());
// LOG => Lauryn says squawk!