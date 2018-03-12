class SmartCalculator {
  constructor(initialValue) {
    this.array = [].concat([initialValue]);
  }

  add(number) {
    this.array.push("+",number);
    return this;
  }

  subtract(number) {
    this.array.push("-",number);
    return this;
  }

  multiply(number) {
    this.array.push("*",number);
    return this;
  }

  devide(number) {
    this.array.push("/",number);
    return this;
  }

  pow(number) {
    this.array.push("^",number);
    return this;
  }

  valueOf() {
    var arr = this.array;
    var length = this.array.length;
    for(var i = length; i>0; i--) {
      if(arr[i] === "^") {
        arr.splice(i-1, 3, Math.pow(arr[i-1], arr[i+1]));
        length = arr.length;
        i = length;
     }
    }
    for(var i = 0; i<length; i++) {
      if(arr[i] === "*") {
        arr.splice(i-1, 3, arr[i-1] * arr[i+1]);
        i = 0;
        length = arr.length;
      } else if (arr[i] === "/") {
        arr.splice(i-1, 3, arr[i-1] / arr[i+1]);
        i = 0;
        length = arr.length;
      }
    }
    for(var i = 0; i<length; i++) {
      if(arr[i] === "+") {
        arr.splice(i-1, 3, +arr[i-1] + +arr[i+1]);
        i = 0;
        length = arr.length;
      } else if (arr[i] === "-"){
        arr.splice(i-1, 3, arr[i-1] - arr[i+1]);
        i = 0;
        length = arr.length;
      }
    }
    return arr[0];
  }
}

module.exports = SmartCalculator;
