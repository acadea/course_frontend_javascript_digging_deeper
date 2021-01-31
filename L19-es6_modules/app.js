// .mjs is recommended -- for clarity purposes
// but naming module with .js extension is ok as well

// if we dont specify the import name, we are importing the default object
import def from './math.js';

console.log(def);  // expecting object containing minus

// if we want to import the named export, we need to specify the symbols
import { add, abc } from './math.js';

console.log(abc);
const result = add(1,2,3,4,5);

console.log(result);
