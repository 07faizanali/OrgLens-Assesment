// Question 2. write a function firstchar which return the first character that is not a space when a string passed.


function firstChar(str) {
    
    str = str.trim();
    

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    
    
    return '';
}


console.log(firstChar(" Rose park ")); // Outputs: "R"
console.log(firstChar("   Hello World")); // Outputs: "H"
console.log(firstChar("   ")); // Outputs: ""
console.log(firstChar("SingleWord")); // Outputs: "S"
