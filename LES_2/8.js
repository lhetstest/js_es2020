// Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
const array = [1, 2, 3, 4, 5, 6];

////////////////// Решение //////////////////


let i;
let sum=0;
for (i of array) {
  if ( i > 3 ){
    sum +=i;
  }
}
console.log(sum); 