// questions 1.  write a function toCase that takes a string and return that string in lowercase and uppercase with - as delimiter


function toCase(str) {
    
    const lowerCaseStr = str.toLowerCase();
    
    
    const upperCaseStr = str.toUpperCase();
    
    const result = `${lowerCaseStr}-${upperCaseStr}`;
    
    return result;
}

console.log(toCase('Mthatha'));