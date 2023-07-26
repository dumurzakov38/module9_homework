// XML который мы будем парсить
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// Создание экземпляра DOMParser
const parser = new DOMParser();

// Парсинг XML
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

// Получение элементов из XML
const students = xmlDoc.getElementsByTagName('student');

// Создание объекта для хранения результата
const result = {
  list: []
};

// Перебор каждого элемента <student>
  // Добавление объекта "Студент" в массив результата
  // A_; B_; C_; D_; я добавил для того чтобы расположить в порядке как в задании (9.2_1)
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameElement = student.getElementsByTagName('name')[0];
  const firstName = nameElement.getElementsByTagName('first')[0].textContent;
  const secondName = nameElement.getElementsByTagName('second')[0].textContent;
  const age = student.getElementsByTagName('age')[0].textContent;
  const C_prof = student.getElementsByTagName('prof')[0].textContent;
  const D_lang = nameElement.getAttribute('lang');
  result.list.push({
    A_name: `${firstName} ${secondName}`,
    B_age: parseInt(age),
    C_prof,
    D_lang
  });
}

// Вывод результата в консоль
console.log(result);
