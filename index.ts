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
