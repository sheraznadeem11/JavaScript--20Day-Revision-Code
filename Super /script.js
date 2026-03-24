class company{
    constructor(color){
        this.color=color
    }
    brand="Samsung";
    location="Pakistan";
    show(){
        console.log(`Made in ${this.location} by ${this.brand} mobile colour is ${this.color}`);
    }
}

class A72 extends company{
    constructor(color){
        super(color);
        this.color=color;
    }
    model(){
        console.log(`This is A72 Model and in colour ${this.color}`);
    }
}

let ph1 = new A72 ("White");