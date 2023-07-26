const btn = document.querySelector('.submit');

btn.addEventListener('click', valueNumber);
function valueNumber() {
  const num1 = document.querySelector('.num1').value;
  const num2 = document.querySelector('.num2').value;
  
  const resultDiv = document.querySelector('.result');

  const myPromise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || num1 < 100 || num1 > 300 || num2 < 100 || num2 > 300) {
      reject("Одно из чисел вне диапазона от 100 до 300 или введено не число");
    } else {
      resolve([num1, num2]);
    }
  });
  
  myPromise.then(([num1, num2]) => {
        const url = `https://picsum.photos/${num1}/${num2}`;
        return fetch(url);
      }).then(response => {
        if (response.ok) {
          resultDiv.innerHTML = `<img src="${response.url}" alt="Random Image">`;
        } else {
          throw new Error("Ошибка загрузки изображения");
        }
      }).catch(error => {
          resultDiv.textContent = error;
      });
}