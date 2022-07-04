// Дан массив с числами [34, 4, 1, 0, 9, 5]. Найдите сумму элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let array = [34, 4, 1, 0, 9, 5];

let sum = 0;
array.reduce((total, el) => {
    if(el === 0) {
        sum = total;
    } else {
        return total + el;
    }
})

console.log(sum);


//----------------------------------------------------------

// let array = [34, 4, 1, 0, 9, 5];

// let sum = array.reduce((total, el, i, arr) => {
//     if (el === 0) {
//         arr.splice(1);
//     }
//     return total += el;
// })

// console.log(sum);

//----------------------------------------------------------

// let arr = [0, 1, 2, 3, 4];

// let arrSpliced = arr.splice(2);

// console.log(arr);
// console.log(arrSpliced);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// https://stackoverflow.com/questions/36144406/how-to-early-break-reduce-method
