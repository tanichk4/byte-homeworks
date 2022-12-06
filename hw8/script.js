// ex 1

const countTrue = (value) => {

    const res = [];

    for (let item of value){

        if(item){
            res.push(item)
        }
    }

    return res.length
}

const finalResult = countTrue([true, false, false, true, true]);
console.log('к-сть значень true в масиві:', finalResult);

// ex2

const getOccurrencesCount = (items) => {

    const occurrencesCount = {};

    for (let elem of items){

        if(!occurrencesCount[elem]){
            occurrencesCount[elem] = 1
        }else{
            occurrencesCount[elem] += 1
        }
        console.log(occurrencesCount)
    }

    return occurrencesCount
}

const showResult = getOccurrencesCount(["a", "v", "a", "b", "b", "a"]);
console.log(showResult);

// ex3

const findExcess = (integers) => {

    let evenArray = []
    let oddAray = []

    for(let num of integers){

        num % 2 == 0 ? evenArray.push(num) : oddAray.push(num)

    }

    if(evenArray.length > oddAray.length){
        return oddAray[0]
    }else{
        return evenArray[0]
    }

}

const integer = findExcess([2, 6, 8, 10, 3]);
// const integer2 = findExcess([1, 3, 5, 10, 7]);
console.log(integer)