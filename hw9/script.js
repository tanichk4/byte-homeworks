// ex 1

const toBoolean = (arr) => arr.map((num) => num > 0)

const res = toBoolean([1, 2, -20, 4, -5])

// ex 1.2

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
]

const filterAdultAdmin = (dataArr) => {
    return dataArr 
    .filter((user) => user.age >= 18 && user.role === 'admin')
    .map((user) => user.name)
}
  
  const adultAdmins = filterAdultAdmin(users); // [Sam, Pablo]
  console.log(adultAdmins)

// ex 1.3

const countAverage = (arr) => {
    return arr.reduce((total, amount, index, array) => {
        total += amount;
        if(index === array.length - 1) {
            return total / array.length;
        }else {
            return total;
        }
    });
}

const averageResult = countAverage([1, 10, 12, 33, 62])
console.log(averageResult)

// ex 2 

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
}

const ownForEach = (arr, logger) => {

    for(let num of arr){
        logger(num, arr.indexOf(num), arr)
    }

}

ownForEach([1, 2, 3], logger)

let arr = [1, 2, 3]
let test = arr.forEach((num) => logger(num, arr.indexOf(num), arr))

const ownMap = (arr, increment) => {
    let arrClone = []

    for(let num of arr){
        arrClone.push(increment(num))
    }

    return arrClone
}

let resOwnMap = ownMap([1, 2, 3], increment)
console.log(resOwnMap)

let arr2 = [1, 2, 3]

let test1 = arr1.map((num))
console.log(test1)

const ownFilter = (arr, isNegative) => {

    let arrClone = []

    for(let num of arr){

        if(isNegative(num) === true){

            arrClone.push(num)
        }
    }
    return arrClone
}

let resOwnFilter = ownFilter([-2, 5, -1], isNegative);
console.log(resOwnFilter)

let arr3 = [-2, 5, 6]
// let test2 = arr3.filter(num) => isNegative(num)