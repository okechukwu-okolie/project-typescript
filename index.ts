//EITHER USE 'TYPE' OR 'T'
function data<Type>(item: Type, defaultv: Type): [Type, Type] {
  return [item, defaultv];
}

// this is what the code will look like without typescript
//function data(item,defaultv){
//  return [item,defaultv]}
//calling this function we have: data(10,'hello world')

// const userData = data<number>(1000,5000)
// console.log(userData)

// const userData2 = data<string>('malik berry','saint maria')
// console.log(userData2)

interface Dog {
  name: string;
  breed: string;
}

const dog1 = data<Dog>(
  { name: "Rex", breed: "alsatian" },
  { name: "unknown", breed: "unknown" }
);
console.log(dog1[0].name, dog1[1].name);

function randomKey<T>(obj: { [key: string]: T }): { key: string; value: T } {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cheeey" };
const res = randomKey<string>(stringObject);
console.log(res);


/*this is the same code in javascript
function randomKey(obj) {
    const keys = Object.keys(obj);//this line gets an array of the keys in the object;obj
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}*/

console.log(Math.floor(Math.random()*3))
console.log(Math.floor(Math.random()*5))
console.log(Math.ceil(Math.random()*8))

function firstItem(list:string[]):string|undefined{
    if(list.length === 0){
        return undefined
    }
    return list[0]
}

const listOfFruits = ['new fruit','banana','apple','pineapple']
console.log(firstItem(listOfFruits))

function lastItem<T>(collection:T[]):T|undefined{
    if(collection.length === 0){
        console.log('this list has no elements in it')
        return
    }
    else{
        return collection.at(Math.floor(Math.random()*collection.length))
    }
}

console.log(lastItem(['onion','carrot','strawberry','egg plant']))