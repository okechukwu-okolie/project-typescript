//EITHER USE 'TYPE' OR 'T'
function data(item, defaultv) {
    return [item, defaultv];
}
var dog1 = data({ name: "Rex", breed: "alsatian" }, { name: "unknown", breed: "unknown" });
console.log(dog1[0].name, dog1[1].name);
function randomKey(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var stringObject = { a: "apple", b: "banana", c: "cheeey" };
var res = randomKey(stringObject);
console.log(res);
/*this is the same code in javascript
function randomKey(obj) {
    const keys = Object.keys(obj);//this line gets an array of the keys in the object;obj
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}*/
console.log(Math.floor(Math.random() * 3));
console.log(Math.floor(Math.random() * 5));
console.log(Math.ceil(Math.random() * 8));
function firstItem(list) {
    if (list.length === 0) {
        return undefined;
    }
    return list[0];
}
var listOfFruits = ['new fruit', 'banana', 'apple', 'pineapple'];
console.log(firstItem(listOfFruits));
function lastItem(collection) {
    if (collection.length === 0) {
        console.log('this list has no elements in it');
        return;
    }
    else {
        return collection.at(Math.floor(Math.random() * collection.length));
    }
}
console.log(lastItem(['onion', 'carrot', 'strawberry', 'egg plant']));
