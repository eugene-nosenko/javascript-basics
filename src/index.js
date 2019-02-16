/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива,
  который будет передан в параметре array
 */

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++ ) {
    fn(array[i], i, array);
    
  }

  // array.forEach(function (i, array[i]) {
  //   return (i + ' comes at ' + array[i]);
  // })
}

/*
 Задание 2:
 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива,
 который будет передан в параметре array
 */

function map(array, fn) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    let result = fn(array[i], i, array);

    newArray.push(result);
  }

  return newArray;

}

/*
 Задание 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива,
 который будет передан в параметре array
 */

function reduce(array, fn, initial) {

  var previousValue = initial || array[0],
    index = initial ? 0 : 1;

  for (; index < array.length; index++) {

    // previousValue – последний результат вызова функции, он же «промежуточный результат».
    // currentItem – текущий элемент массива, элементы перебираются по очереди слева - направо.
    // index – номер текущего элемента.
    // array – обрабатываемый массив.

    previousValue = fn(previousValue, array[index], index, array);
  }

  return previousValue

}

// function reduce(array, fn, initial = array[0]) {
//   // let newArray = [];
  
//   for (let i = 0; i < array.length; i++) {

//     let result = fn(initial, array[i], i, array);

//     return initial = result;
//     // newArray.push(result);
//   }

// }

/*
 Задание 4:
 Функция должна перебрать все свойства объекта,
 преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  var array = [];

  for (var key in obj) {
    if (this != 0) {
      array.push(key.toUpperCase());
    }
  
  }

  return array;

}

/*
 Задание 5 *:
 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива,
 который будет передан в параметре array
 */

function slice(array, from, to) {

  if (from >= 0) {
    for (let i = from; i <= to; i++) {
      array.push(i);
    }
  } else {
    (from <= 0)
  }
  {
    for (let i = from; i <= -1; i++) {
      array.push(i);
    }

  }

}

/*
 Задание 6 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств
 и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value * value;

      return true;
    }
  });
}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};
