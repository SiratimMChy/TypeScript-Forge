const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((arr, el) => arr.concat(el), [] );
};

console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
