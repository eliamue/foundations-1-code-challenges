// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let names = [];
    arr.forEach(item => names.push(item.name));
    return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let reversedArr = [];

    arr.forEach(item => reversedArr.unshift(item.type));

    return reversedArr;
};

export function makeSpanishLanguageArray(arr) {
    let spanishPets = [{ nombre: 'coco', tipo: 'cat' },
    { nombre: 'jumper', tipo: 'frog' }];

    arr.forEach(item => spanishPets.splice())

    return spanishPets;
}

