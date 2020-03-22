let a = 5;
const b = ("const"[(a, b)] = [b, a]);

class First {
  constructor(x) {
    this.x = x;
  }
}

class Second extends First {
  set x(d) {
    this.x = d;
  }
  get x() {
    return this.x;
  }
}
