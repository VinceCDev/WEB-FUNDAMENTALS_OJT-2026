// Task 1: Create and Use an Object
let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 784,
    isRead: false
}

// Dot Notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

// Bracket Notation 
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "fantasy";
console.log(book);

// Task 2: Create and Modify an Array of Objects
let movies = [
  {
    title: "Avengers",
    director: "Russo Brothers",
    year: 2012
  },
  {
    title: "Avatar: Fire and Ash",
    director: "James Cameron",
    year: 2025
  },
  {
    title: "Transformers: Dark of the Moon",
    director: "Michael Bay",
    year: 2011
  }
];

console.log(movies[1].title);

movies.push({
  title: "Space Jam: A New Legacy",
  director: "Malcolm D. Lee",
  year: 2021
});

movies[0].year = 2023;

console.log(movies);

// Task 3: Combine Objects and Arrays
let student = {
    name: "Vince Allen",
    age: 22,
    subjects: ['Math', 'Science', 'History']
}

console.log(student.subjects[0]);

student.subjects.push("English");

console.log(student);

// Task 4: Challenge Task
let recipe = {
    name: "Pasta Salad",
    ingredients: [
        { 
            name: "Pasta", 
            quantity: "2 cups" 
        },
        { 
            name: "Cherry tomatoes", 
            quantity: "1 cup" 
        },
        { 
            name: "Cucumber", 
            quantity: "1 medium" 
        },
        { 
            name: "Mayonnaise", 
            quantity: "1/2 cup" 
        },
        { 
            name: "Salt", 
            quantity: "1/2 teaspoon" 
        }
    ],
    isVegetarian: true
}

recipe.ingredients.push(
    { 
        name: "Cheese", 
        quantity: "1/2 cup" 
    }
);

console.log(recipe.ingredients[1].name);
console.log(recipe);