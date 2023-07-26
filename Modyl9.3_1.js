const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');
const imageContainer = document.getElementById('imageContainer');

submitButton.addEventListener('click', function() {
  const number = parseInt(numberInput.value);
  
  if (number < 1 || number > 50) {
    imageContainer.textContent = 'Число вне диапазона от 1 до 10';
  } else {
    const url = `https://picsum.photos/v2/list?limit=${number}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        displayImages(response);
      } else {
        imageContainer.textContent = 'Ошибка при загрузке картинок';
      }
    };
    xhr.onerror = function() {
      imageContainer.textContent = 'Ошибка при загрузке картинок';
    };
    xhr.send();
  }
});

function displayImages(images) {
  imageContainer.innerHTML = '';
  images.forEach(function(image) {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img';

    const imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    imgElement.alt = image.author;

    imgDiv.appendChild(imgElement);
    imageContainer.appendChild(imgDiv);
  });
}