// Use the filter or find array methods to solve these problems

const groceries = [
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];

// Output: 
// [
//     { 
//         id: 'milk',
//         price: 2,
//         quantity: 1,
//         category: 'dairy'
//     },
//         { 
//         id: 'cheese',
//         price: 4,
//         quantity: 4,
//         category: 'dairy'
//     },
// ]


export function getAllDairy(arr) {
    return arr.filter(Item => Item.category === 'dairy')
}

// /*
// Output: 
// 
//     { 
//         id: 'apple',
//         price: 3,
//         quantity: 2,
//         category: 'fruit'
//     }
// 
// */

export function getAllFruitsThatCostMoreThanTwo(arr) {
    return arr.filter(Item => (Item.category === 'fruit' && Item.price > 2));
}


// /*
// Output: 
//     { 
//         id: 'cheese',
//         price: 4,
//         quantity: 4,
//         category: 'dairy'
//     },
// */

export function findTheCheese(arr) {
    return arr.filter(Item => Item.id === 'cheese')
}


// /*
// Output: 
// ['apple', 'banana']
// */

export function listNamesOfAllFruits(arr) {
    let fruitNames = [];
    const items = arr.filter(Item => Item.category === 'fruit');
    for (let item of items) {
        fruitNames.push(item.id)
    }
    return fruitNames;
}