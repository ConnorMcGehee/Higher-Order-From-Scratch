// .map()
const map = (arr, func) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        newArray.push(func(item, i, arr));
    }
    return newArray;
}

const array1 = map([1, 2, 3, 4], ((x, i) => x * i));
console.log("map", array1.toString());

// .reduce()
const reduce = (arr, func, initialValue = 0) => {
    let accumulator = arr[0 + initialValue];
    let currentValue;
    for (let i = initialValue + 1; i < arr.length; i++) {
        currentValue = arr[i];
        accumulator = func(accumulator, currentValue);
    }
    return accumulator;
}

const array2 = [1, 2, 3, 4];
const sum = reduce(array2, ((accumulator, currentValue) => accumulator + currentValue));
console.log("reduce", sum);

// .filter()
const filter = (arr, func) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (func(item, i, arr)) {
            newArray.push(item);
        }
    }
    return newArray;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = filter(words, (word => word.length > 6));
console.log(result.toString());