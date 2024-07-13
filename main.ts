
// #! /user/bin/env node

// Date : 5 may 2024 , My name is Tehmina naz , I am currently working on my 45th assignment and am very excited about it.

// Install Node.js, TypeScript and VS Code on your computer done

// Exercise 2

// storing person name in a variable

let personName: string = "Eric";

console.log( `Hello ${personName}, would you like to learn some Python today?`);

// Exercise 3

let person_name : string = "Tehmina";

//printing person_name in lowercase
console.log(person_name.toLowerCase());

//printing person name in uppercase
console.log(person_name.toUpperCase());

//printing person name to tittle case
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1))

//printing person name to tittle case 
let personName1: string = "tehmina";

console.log(personName1.charAt(0).toUpperCase()+personName1.slice(1))

// Exercise 4

let author : string = "Albert Einstein";

let massage : string = "“A person who never made a mistake never tried anything new.”";

console.log(`${author} once said,${massage}`);

// Exercise 5
let famous_person : string = "Zia Khan"

let massage2 : string = "Comfort is the worst addiction";

console.log(`${famous_person} once said,${massage2}`);

// Exercise 6

let personName2 : string = "Daniyal nagori";

//printing white space with person name
console.log(`\t\n ${personName2} \t\n`)

// Exercise 7

console.log( 4+4 );
console.log( 10-2 );
console.log( 2*4);
console.log( 16/2 )

// Exercise 8

console.log( 5+3 );
console.log(12-4);
console.log(4*2);
console.log(16/2);

// Exercise 9

let FavoriteNumber : number = 7 ;

console.log(`My favorit number is ${FavoriteNumber}`);

// Exercise no 10

// Done write comment on top

// Exercise no 11

let names : string[] = ["Sana","Hina","Soni","Tehmina"]

names.forEach(name => {
    console.log(name)
});

// Exercise no 12

let massage3 : string = "you ar my friend."

names.forEach(name => {
    console.log(`Hello ${name} ${massage3}`)
});

// Exercise 13

let transportation : string[] = ["car", " motorcycle ", "cycle" ];

transportation.forEach(transport => {
    console.log(` “I would like to own a ${transport}`);
});

// Exercise no 14

let GuestList : string[] =["Sana", "Hina", "Aresha"];

GuestList.forEach(Guest => {
    console.log(`Dear ${Guest}, you are cordaily invited to dinner`)
});

// // Exercise no 15

// let unableToAttend : string = "sana";

// console.log(`${unableToAttend} can't make a dinner`);

// let newGuest : string = "Mina";

// GuestList[GuestList.indexOf(unableToAttend)] = newGuest

// GuestList.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`)
// });

// Exercise no 15 another style

let notInvited : string | undefined = GuestList.splice(1,1)[0];

console.log(`${notInvited}, not invited for diner`);

//push

GuestList.push("Samina");

//printing a message

GuestList.forEach(guest => {
    console.log(`Dear ${guest} you are coardliy  invited`)
    
});

// Exercise no 16

console.log("Great news! I found a bigger dinner table!");

// Adding more guests
GuestList.unshift("Manahil");
GuestList.splice(GuestList.length / 2, 0, "Alishba");
GuestList.push("Nida");

GuestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Exersise no 17

console.log("Unfortunately, I can only invite two people for dinner.");

while (GuestList.length > 2) {
    let removedGuest = GuestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

GuestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
GuestList.splice(0, GuestList.length);
console.log(GuestList); // Shows an empty list

// Exercise no 18

let places: string[] = ["USA", "UAE", "Pakistan", "Naran", "Maree"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

// Exercise no 19

let guests: string[] = ["Farhan", "Kashan", "Ayan", "Salman", "Roshan"];
console.log(`I am inviting ${guests.length} people to dinner.`);

// Exercise no 20

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);

// Exercise no 21

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

// Exercise no 22

let friends: string[] = ["Sana", "Hina", "Moni"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.

// Exercise no 23

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" !== "apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

// Exercise no 24

console.log("Numerical tests:");
console.log(10 >= 5); // True
console.log(2 <= 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruitss = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

// Exercise no 25

// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  // No output because the condition is false
}

// Exercise no 26


// Version that runs the if block:

alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "red";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

// Exercise no 27

 alien_color = "pink";

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Exercise no 28

let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Exercise no 29

let favorite_fruits: string[] = ["apples", "bananas", "cherries","mango","orange"];

if (favorite_fruits.includes("bananas")) {
  console.log("I really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("I really like apples!");
}
if (favorite_fruits.includes("cherries")){
    console.log("I really like cherries!")
}
if (favorite_fruits.includes("mango")){
    console.log("orange")
}

// Exercise no 30

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});

// Exersise no 31

usernames = [];

if(usernames.length === 0){
    console.log("We need to find some users!");
    
} else {
    // Greet Users 
}

// Exercise no 32

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

// Exercise no 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});

// Exercise no 34

let pizzas: string[] = ["Tika", "margherita", "vegetable"];

pizzas.forEach(pizza => {
console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// Exercise no 35

let animals: string[] = ["lion", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

// Exercise no 36

function make_shirt(size: string, message: string) {
    console.log(
      `Making a ${size} t-shirt with the message "${message}" printed on it`
    );
  }
  
  make_shirt("medium", "Code is Life");

// Exercise no 37

function make_shirt1 (size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    }
    
    make_shirt1(); // Default large and message
    make_shirt1("medium"); // Default message, medium size
    make_shirt1("small", "Dive into Coding"); // Custom message, small size

// Exercise no 38

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

// Exercise no 39

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
  
//   console.log(city_country("Lahore", "Pakistan"));
//   console.log(city_country("Tokyo", "Japan"));
//   console.log(city_country("Paris", "France"));

//   // Exercise no 40

//   function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//       album["tracks"] = tracks;
//     }
//     return album;
//   }
  
//   console.log(make_album("Artist One", "The First Album"));
//   console.log(make_album("Artist Two", "The Second Album"));
//   console.log(make_album("Artist Three", "The Third Album", 12));

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title, tracks};
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album("Artist One", "The First Album"));
  console.log(make_album("Artist Two", "The Second Album"));
  console.log(make_album("Artist Three", "The Third Album", 12));

  // Exercise no 41

  let magicians: string[] = ["Sana", "Hina", "Manahil"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

// Exercise no 42

let magicians1: string[] = ["Sana", "Hina", "Nida"];

function show_magicians1 (magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great1 (magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
   magicians[i] = magicians[i] + " the Great";
  }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); 

// Exercise no 43

let magicians_2: string[] = ["Sana", "Dia", "Manahil"];

function make_great2 (magicians: string[]): string[] {
  let greatMagicians2 : string[] = [];
  magicians_2.forEach((magicians_2) => {
    greatMagicians2.push(magicians_2);
});
return greatMagicians2;
}

function show_magicians2(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians1 = make_great2(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians2(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians1); // Shows modified names

//Exercise no 44

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
  }
  
  make_sandwich("ham", "cheese");
  make_sandwich("turkey", "lettuce", "tomato");
  make_sandwich("avocado", "sprouts", "mustard", "mayo");

  // Exercise no 45

  function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car = value));
    return car;
  }
  
  console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
  console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));