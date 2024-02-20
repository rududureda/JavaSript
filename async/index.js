

const obj = { name: 'John', age: 30 };
const stringifyObj = JSON.stringify(obj);
const parsedObj = JSON.parse(stringifyObj);

// new Promise
const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('I have resolved');
    reject('I have rejected');
  });
};

const result = myPromise();
console.log(result);