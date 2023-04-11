// Write your code here
/*class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }

  get dessert() {
    return this.#dessert;
  }
}
const breakfast = new Breakfast("eggs", "coffee");
const lunch = new Lunch("Caesar salad", "tomato soup", "iced tea");
const dinner = new Dinner(
  "Greek salad",
  "minestrone soup",
  "steak",
  "chocolate cake"
);

console.log(breakfast);
console.log(lunch);
console.log(dinner);

console.log(dinner.dessert);
*/
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

