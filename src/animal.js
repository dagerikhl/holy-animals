const baseUrl = 'https://acandodogapi.azurewebsites.net/';

const queryParams = new URLSearchParams(window.location.search);

const animal = document.querySelector('#animal');
let img = document.createElement('img');
img.src = baseUrl + 'dogs/' + queryParams.get('id');
animal.append(img);
