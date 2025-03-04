// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const screamingKeys = {};
    const screams = Object.keys(someObject);

    for (let scream of screams) screamingKeys[scream.toUpperCase()] = someObject[scream];

    return screamingKeys
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject);
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {

    const tuples = Object.entries(someObject)

    return tuples
}

// const tuples = [
//     Object.keys(someObject),
//     Object.values(someObject)
// ];
// return tuples