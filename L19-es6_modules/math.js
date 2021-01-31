function add (...num){
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += num[index];
    }
    return sum;
}

function subtract(...num) {
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum -= num[index];
    }
    return sum;
}

// Rules:
// 1. we can export multiple things in 1 file
// 2. There are 2 types of export: export default (unnamed export) and named export
// 3. With export default, we can name the import to anything we want


// 2 ways to export

// 1 module can only have 1 export default
export default "abc"
// export default {
//     subtract,
// }


// when exporting without the default keyword, we need to be exact with the name
// this is referred to as named export
export {
    add
}

// although we can have multiple named exports in a module, it is generally not recommended.
// it is best to put everything in 1 single object. 
// for clarity 

export const abc = 123;

export function hello(){
    
}