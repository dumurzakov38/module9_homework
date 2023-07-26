// JSON который мы будем парсить
const jsonString = `
  {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// Парсинг JSON
const data = JSON.parse(jsonString);

// Создание объекта для хранения результата
const result = [];

// Перебор каждого элемента
  // Добавление объекта "Студент" в массив результата
  // A_; B_; C_; я добавил для того чтобы расположить в порядке как в задании (9.2_2)
for (let i = 0; i < data.list.length; i++) {
  const profession = data.list[i];
  
  const professionResult = {
    A_name: profession.name,
    B_age: parseInt(profession.age),
    C_prof: profession.prof
  };
  
  result.push(professionResult);
}

// Вывод результата в консоль
console.log(result);