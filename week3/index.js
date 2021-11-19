const pizzaToppings = [
  "jalapenos", //0
  "salami",
  "pineapple",
  "bacon",
  "black olives",
  "hamburger",
  "onions",
  "tomatoes",
  "mushrooms",
  "hot sauce",
  "feta cheese", //10
  "prosciutto",
  "spinach",
  "pancetta",
  "culatello" //14
];

greetCustomer(pizzaToppings);

function greetCustomer(toppings) {
  let greet = "Welcome pal, check these tops: " + listToppings(toppings) + ".";
  return console.log(greet);
}

let size = "Bigfoot Size";
let crust = "STUFFED CRUST";
let toppings = [
  pizzaToppings[0],
  pizzaToppings[2],
  pizzaToppings[3],
  pizzaToppings[4],
  pizzaToppings[5]
];

servePizza(preparePizza(getPizza(size, crust, toppings)));

function getPizza(size, crust, ...toppings) {
  console.log(`Yo, we got one ${size} ${crust} pizza with ` + listToppings(toppings[0]) + ".");
  let topReturn = [size, crust, toppings[0]];
  return topReturn;
}

function listToppings(...array) {
  let answer = "";
  let i = 0;
  for (i in array[0]) {
    if (i < array[0].length - 1) {
      answer = answer + array[0][i] + ", ";
    } else {
      answer = answer + "and " + array[0][i];
    }
    i++;
  }
  return answer;
}

function preparePizza(pizza) {
  console.log("Ayyyy, this pizza is SIZZLING!");
  let pizzaObject = {
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  };
  return pizzaObject;
}

function servePizza(pizzaObject) {
  console.log(
    `Dis order is ABSOLUTELY PIPIN'! We got a ${pizzaObject.size} ${
      pizzaObject.crust
    } pie with ${listToppings(pizzaObject.toppings)}. COME AND GET IT!!!`
  );
  return pizzaObject;
}

// Create an array of pizzaToppings with at least four different toppings

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.


// Bonus Challenge
// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
// In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!
