// Question 3. write a function  rotate that rotates elements of an array. All elements should be moved  one position to the left . The 0th element should be placed at the end of array. The rotated array should be return


function rotate(arr) {
    
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }

    
    const firstElement = arr.shift();

    
    arr.push(firstElement);

    return arr;
}


console.log(rotate(["a", "b", "c"])); // Outputs: ["b", "c", "a"]
console.log(rotate([1, 2, 3, 4])); // Outputs: [2, 3, 4, 1]
console.log(rotate(["single"])); // Outputs: ["single"]
