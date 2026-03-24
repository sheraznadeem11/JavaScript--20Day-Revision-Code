class company {
  brand = "Samsung";
  location = "Pakistan";

  show() {
    console.log(`This model is ${this.brand} by${this.location} `);
  }
}

class A05s extends company {
  model() {
    console.log("This Price is 42000");
  }
}

class A056 extends company {
  model() {
    console.log("This Price is 62000");
  }
}

let ph1 =new A05s ();
let ph2 =new A056 ();


console.log(ph1,ph2);