//2
const parent = {
    name: "Sanjeev",
    printName: function () {
      console.log(this.name);
    },
  };
  
  const child = Object.create(parent);
  child.printName();
  
  //2
  function Mobile(brand, model, os) {
    this.brand = brand;
    this.model = model;
    this.os = os;
  }
  
  const myMobile = new Mobile("Samsung", "A11", "Android 12");
  console.log(myMobile.hasOwnProperty("brand")); // true
  
  //3
  
  const numbers = [10, 20, 30, 40, 50]; // 150
  const numbers1 = [100, 200, 300]; // 600
  
  Array.prototype.total = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    console.log(sum);
  };
  
  numbers.total(); // 150
  numbers1.total(); // 600
  
//4

  const studentOne = {
    name: "Sanjeev",
    age: 20,
  };
  
  studentTwo = Object.create(studentOne);
  studentTwo.birthYear = 2022;
  // console.log(studentTwo.birthYear);
  
  for (const key in studentTwo) {
    console.log(key);
  }