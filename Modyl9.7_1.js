const btnRequest = document.querySelector('.request');
const result = document.querySelector('.result');

btnRequest.addEventListener('click', processing);

function processing() {
  const pageNumber = parseInt(document.querySelector('.pageNum').value);
  const limitNumber = parseInt(document.querySelector('.limitNum').value);

  const myPromise = new Promise((resolve, reject) => {
    if ((isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) && (isNaN(limitNumber) || limitNumber < 1 || limitNumber > 10)) {
      reject("Номер страницы и лимит вне диапазона от 1 до 10");
    } else if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
      reject("Номер страницы вне диапазона от 1 до 10");
    } else if (isNaN(limitNumber) || limitNumber < 1 || limitNumber > 10) {
      reject("Лимит вне диапазона от 1 до 10");
    } else {
      resolve([pageNumber, limitNumber]);
    }
  });

  myPromise
    .then(([pageNumber, limitNumber]) => {
      // Выполняем запрос и выводим результат
      fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limitNumber}`)
        .then(response => response.json())
        .then(data => {
          // Очищаем предыдущий результат
          result.innerHTML = '';

          // Выводим список картинок на экран
          data.forEach(item => {
            const imgElement = document.createElement('img');
            imgElement.src = item.download_url;
            imgElement.style.width = '200px';
            imgElement.style.margin = '5px';
            result.appendChild(imgElement);
          });

          // Сохраняем результаты запроса в localStorage
          const responseData = JSON.stringify(data);
          localStorage.setItem('lastRequestData', responseData);
        })
        .catch(error => {
          result.innerHTML = "Ошибка при выполнении запроса";
          console.error(error);
        });
    })
    .catch(error => {
      // Выводим сообщение об ошибке в случае, если reject был вызван внутри промиса
      result.innerHTML = error;
      console.error(error);
    });
}

// При загрузке страницы проверяем наличие сохраненных данных в localStorage
window.addEventListener('load', () => {
  const lastRequestData = localStorage.getItem('lastRequestData');
  if (lastRequestData) {
    const data = JSON.parse(lastRequestData);
    result.innerHTML = '';

    // Выводим список картинок на экран
    data.forEach(item => {
      const imgElement = document.createElement('img');
      imgElement.src = item.download_url;
      imgElement.style.width = '200px';
      imgElement.style.margin = '5px';
      result.appendChild(imgElement);
    });
  }
});
//}
















//const btn = document.querySelector('.submit');

//btn.addEventListener('click', valueNumber);
//function valueNumber() {
//  const num1 = document.querySelector('.num1').value;
//  const num2 = document.querySelector('.num2').value;
  
//  const resultDiv = document.querySelector('.result');

//  const myPromise = new Promise((resolve, reject) => {
//    if (isNaN(num1) || isNaN(num2) || num1 < 100 || num1 > 300 || num2 < 100 || num2 > 300) {
//      reject("Одно из чисел вне диапазона от 100 до 300 или введено не число");
//    } else {
//      resolve([num1, num2]);
//    }
//  });
//  
//  myPromise.then(([num1, num2]) => {
//        const url = `https://picsum.photos/${num1}/${num2}`;
//        return fetch(url);
//      }).then(response => {
//        if (response.ok) {
//          resultDiv.innerHTML = `<img src="${response.url}" alt="Random Image">`;
//        } else {
//          throw new Error("Ошибка загрузки изображения");
//        }
//      }).catch(error => {
//          resultDiv.textContent = error;
//      });
//}