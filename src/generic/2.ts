/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
type topFields = Pick<AllType, "name" | "color">
type bottomFields = Pick<AllType, "position" | "weight">

function compare<T extends topFields, U extends bottomFields>(top: T, bottom: U): AllType {     
  return {
    name: top["name"],
    color: top["color"],
    position: bottom["position"],
    weight: bottom['weight'],
  }
}
compare({ name: 'Test', color: "blue" }, {position:1, weight:50 });

export {};