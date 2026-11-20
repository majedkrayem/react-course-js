
import { loadData } from "./load.js";

const data = loadData();

// Step 2.1 - Accessing properties
console.log(data.updatedAt);
console.log(data.movies[0].title);
console.log(data.movies[0].director.name);

// Step 2.2 - Accessing nested arrays and objects
console.log(data.movies[2].cast[2].name);
console.log(data.movies[0].reviews[1].author.username);

// Step 2.3 - Last movie and dynamic property
const last = data.movies[data.movies.length - 1];
console.log(last.title);

const field = "year";
console.log(data.movies[3][field]);

// Step 2.4 - Missing properties and empty arrays
const toyStory = data.movies[4];

console.log(toyStory.awards?.oscars ?? 0);
console.log(toyStory.reviews[0]?.text ?? "No reviews yet");
