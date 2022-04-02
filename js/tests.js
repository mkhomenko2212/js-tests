// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// function hello()
// { console.log("Hello"); }

// hello()

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
//   for (const item of products) {
//     let value = item[propName];

//         if (value != undefined) {
//             values.push(value);
//         }
//     }

//     return values;
   
//   }


// getAllPropValues()

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(Radar) {
//   // Пиши код ниже этой строки
// const totalPrice = 0;

//   for (const item of products) {
//     let name = item.name

//     console.log(name)
//     let price = item.price

//     console.log(price)

//     let quantity = item.quantity
//     console.log(quantity)
//     if (name === Radar)
//     {totalPrice += item.quantity * item.price }
//   }
// return totalPrice


  // Пиши код выше этой строки
// }
 
// calculateTotalPrice()



// let startNumber = 0;
// const maxNumber = 100;

// for (let i = startNumber; i <= maxNumber; i += 1)
//   if (i % 2 === 0) { console.log(i); }
  
// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check number. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 5.	You need to calculate tip amount and total sum to pay.
// 6.	Show message: (example). Use ”alert” function
// Check number: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230


// const checkNumber = prompt("Введите сумму чека");
// const percentage = prompt("Введите сумму чаевых");

// if (checkNumber === null || percentage === null) { alert("Отменено"); }
// else {
//   const parcedCN = Number.parseFloat(checkNumber);
//   const parcedPersd = Number.parseFloat(percentage);
//   const tipAmount = Number(((parcedCN * parcedPersd) / 100).toFixed(2));
//   const totalSum = Number((parcedCN + tipAmount).toFixed(2));
//   if (Number.isNaN(parcedCN) || Number.isNaN(parcedPersd) || totalSum < 0 || parcedPersd < 0 || parcedPersd > 100) {
//     alert("Invalid input data");
//   }
//   else {
//     const message = `Check number: ${parcedCN}\nTip: ${parcedPersd};\nTip amount: ${tipAmount};\nTotal sum to pay:  ${totalSum}`
//     alert(message)
//   }
// }



// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”



// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!


// const hours = new Date().getHours();

// console.log(hours);

// const login = prompt("Enter your Login");
// if (login === "" || login === null) {
//   alert("Canceled");
// } else if (login.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols")
// } else if (login === "User" || login === "Admin") {
//   const password = prompt("Please input password")
//   if (password === "" || password === null) {
//     alert("Canceled")
//   } else if (login === "User" && password === "UserPass") {
//     if (hours > 5 && hours < 20) { alert("Good day, dear User!") }
//     else {alert("Good evening, dear User!")}
//   } else if (login === "Admin" && password === "RootPass") {
//     if (hours > 5 && hours < 20) { alert("Good day, dear Admin!") }
//     else { alert("Good evening, dear Admin!") }
//   } else {
//     alert("I don’t know you")
//   }
// }

// || login === "Admin" && password === "RootPass")



// function calculateMeanTemperature(forecast) {const { today: {low: todayLow, high: todayHigh, },
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh,} } = forecast;



//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
// }
// function makeTask({})


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions)
//     {if (potion.name === newPotion.name) { return `Error! Potion ${newPotion.name} is already in your inventory!`;}}

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//       for (let i = 0; i < potions.length; i +=1) {
//         const { name } = potions[i];
      
//       if (potionName === name) {
      
//         this.potions.splice(i, 1)
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
    
//   for (potion of this.potions) {
//   const { name } = potion;
      
//       if (name === oldName) {
      
//        potion.name = newName;
//        return;
//       }
//     }
//     return  `Potion ${oldName} is not in inventory!`
//   },
//   // Change code above this line
// };

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(function(number) {
//     if (number % 2 === 0) {
//       console.log(number)
//       newArray.push(number + value)
//     console.log(newArray)}
//   })
//   return newArray


//   // Change code above this line
// // }
// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// console.log(users)
// // // const getFriends = (users.flatMap(user => user.friends).filter((user, index, users) => users.indexOf(user) === index)


// // // );
// // //   // const unique = getUserNames.filter((user, index, users) => users.indexOf(user) === index)
// // // console.log(getFriends)
// // // // console.log(unique)



// // const sortByDescendingFriendCount = users => {
// //   return [...users].sort((a, b) => b.friends.length - a.friends.length);

// // };

// // console.log(sortByDescendingFriendCount(users))


// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];

// // console.log(books)
// // const MIN_BOOK_RATING = 8;
// // // Change code below this line

// // const names = [...books]
// //   .filter(book => book.rating > MIN_BOOK_RATING)
// //   .map(book => book.title)
// // .sort((a, b) => a.localeCompare(b));

// //   console.log(names)


// // const getSortedFriends = users => users
// //   .flatMap(user => user.friends)
// //   .filter((user, index, users) => users.indexOf(user) === index)
// //   .sort((a, b) => a.localeCompare(b));

// //   console.log(getSortedFriends(users))

// const getTotalBalanceByGender = (users, gender) => [...users]
//   .filter(users => gender === users.gender)
//   .reduce((total, user) => total + user.balance, 0);
  
// console.log(getTotalBalanceByGender(users, "female"))


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// class Storage {
//   constructor(items ) { this.items = items }


// getItems() {return this.items}

//   addItem(newItem) { this.items.push(newItem) }
  
//   removeItem(itemToRemove) { this.items.splice(1, 1)}
// }



// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





// class StringBuilder {
//   constructor(value) {
//     this.value = value
//   }
//   getValue() { return this.value }

//   padStart(str) {this.value += str}
  
//   padEnd(str) { this.value = str + this.value }

//   padBoth(str) { this.value = str += this.value += str}
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class StringBuilder {
//     constructor(value) {
//       this.value = value;
//     }

//     get val() {
//       return this.value;
//     }

//     set val(value) {
//       this.value = value;
//     }

//     append(str) {
//       this.value += str;
//     }

//     prepend(str) {
//       this.value = str + this.value;
//     }
//     // додає елемент на поч і в кін
//     pad(str) {
//       this.value = str + this.value + str;
//     }
// }
  
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() { return this.#brand }
  
//   changeBrand(newBrand) { this.#brand = newBrand}

//   // Change code above this line
// }


// class Car {
//   // Change code below this line

//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) { if (newPrice > MAX_PRICE) {this.#price = price}
//   else { this.#price = newPrice;}
   
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//  static checkPrice(price) { if (price >= Car.#MAX_PRICE) {return 'Error! Price exceeds the maximum'}
//  else {return '"Success! Price is within acceptable limits'}}
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// // const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
blacklistedEmails = [];


  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
blacklist(email) {this.blacklistedEmails.push(email) }
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email))
      return true
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
