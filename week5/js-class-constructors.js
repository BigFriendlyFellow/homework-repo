class Sandwich {
  constructor(bread, meat, cheese) {
    this.bread = bread;
    this.meat = meat;
    this.cheese = cheese;
  }
}

class Pickles extends Sandwich {
  constructor(bread, meat, cheese, pickles) {
    super(bread, meat, cheese);
    this.pickles = pickles;
  }
  request() {
    return `Don't forget the ${this.pickles}!`;
  }
}

class Veg extends Sandwich {
  constructor(bread, meat, cheese, lettuce, tomato) {
    super(bread, meat, cheese);
    this.lettuce = lettuce;
    this.tomato = tomato;
  }
  comment() {
    return `My O My, that ${this.tomato} looks tasty!`;
  }
}

const yum = new Veg("sourdough", "bacon", "provellone", "romaine", "roma");
console.log(yum.comment());

const yummy = new Pickles("sourdough", "salami", "provellone", "dill pickles");
console.log(yummy.request());
