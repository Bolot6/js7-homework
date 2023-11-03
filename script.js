// const arr = [1,2,3,4,5,6]
//
// const handleFilter = (arg) => {
//     return arg.reduce((acc, el, idx) => acc += el, 0)
// }
// console.log(handleFilter(arr))

// const  arr = [1,2,3,4,5,6]
// const names = ['John', 'Nikolas', 'Evdokim', 'Aidin']
//
// const handleFunction = (arg) => {
//     return arg.reduce((acc, el, idx) => {
//       return[...acc, {name: el, id: idx + 1}]
//     }, [])
// }

// console.log(handleFunction(names))
// const number = 8
// const summation = (num) => {
//     let sum = 0;
//     for (let i=0; i<= num; i++){
//
//     }
//     return sum
// }
// console.log(summation(8))

// function like (names){
//     if(names.length < 1){
//         return 'no one likes this'
//     }else if (names.length > 0 && names.length <= 3){
//     return `${names[0]} and ${names[1]} like this`
//     }else if (names.length === 1)
//         return `${names[0]} likes this`
// }
//
// console.log(like(['Jacob']))

//Homework

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// const arr = [1, 2, 3, 4, 5];
// let total = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
//
// console.log(total);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => сумму всех элементов массива
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
//
// console.log(total);

//
// const myArray = [1, 2, 5, 9, 4, 13, 4, 10];
// let found = false;
//
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === 4) {
//         found = true;
//         break;
//     }
// }
//
// if (found) {
//     console.log('Есть!');
// } else {
//     console.log('Нет!');
// }
