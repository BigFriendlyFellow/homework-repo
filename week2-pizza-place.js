let pizzaPlace = "Jimo's Pizza";
let numberOfToppings = 12;

console.log(pizzaPlace);
console.log(numberOfToppings);

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

let te = `My place is ${pizzaPlace}, and, by the way, we got ${numberOfToppings} toppings ya can choose from.`;

console.log(te);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (let i = 0; i <= numberOfToppings; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
