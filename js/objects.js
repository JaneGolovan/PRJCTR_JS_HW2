// Задача про обчислення різниці часу

// Напишіть функцію яка буде буде приймати 3 параметри - початкову дату (string)- кінцеву дату (string)- розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

// Приклади:durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'
function terms(start = "2023-05-02", end = "2023-06-16", time = "seconds") {
  if (time === "seconds") {
    return Math.abs(Date.parse(end) - Date.parse(start)) / 1000 + " " + time;
  } else if (time === "minutes") {
    return Math.abs(Date.parse(end) - Date.parse(start)) / 60000 + " " + time;
  } else if (time === "hours") {
    return Math.abs(Date.parse(end) - Date.parse(start)) / 3600000 + " " + time;
  } else if (time === "days") {
    return (
      Math.abs(Date.parse(end) - Date.parse(start)) / 3600000 / 24 + " " + time
    );
  }
}
console.log(terms("2022-05-02", "2022-05-04", "hours"));

// Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

// Приклад:
// приклад об'єкту
const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};
function optimizer() {
  return Object.fromEntries(
    Object.entries(priceData).map(([key, value]) => [
      key.toLowerCase(),
      parseFloat(value).toFixed(2),
    ])
  );
}
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

// Задача про рекурсію та ітерацію
// Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function recursiveOddSumTo(number) {
  // тут ваш код
  if (number === 1) {
    return number;
  } else if (number % 2 == 1) {
    return number + recursiveOddSumTo(number - 1);
  } else {
    return recursiveOddSumTo(number - 1);
  }
}
console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// - функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function iterativeOddSumTo(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      continue;
    }
    result += i;
  }
  return result;
}
// тут ваш код

console.log(iterativeOddSumTo(3)); // 1
console.log(iterativeOddSumTo(10)); // 25
