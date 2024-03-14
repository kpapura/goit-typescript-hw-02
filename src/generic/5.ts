/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey,TValue> {
  key:TKey;
  value:TValue;
}
const result: KeyValuePair<string, number> = {
  key: "age",
  value:12
}
console.log(result);

export {};