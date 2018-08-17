const baseUrl = 'https://acandodogapi.azurewebsites.net/';

const cards = document.querySelector('#cards');
fetch(baseUrl + 'dogs.json')
    .then(data => data.json())
    .then(json => {
        json.forEach(entry => {
            let cardentry = document.createElement('a');
            cardentry.href = 'animal.html' + '?id=' + entry.imageUrl.replace('dogs/', '');
            cardentry.classList.add('card', 'clickable-card', 'content-img-container');

            let title = document.createElement('h3');
            title.innerHTML = 'Dog #' + entry.id;
            cardentry.append(title);

            let img = document.createElement('img');
            img.src = baseUrl + entry.imageUrl;
            cardentry.append(img);

            let likes = document.createElement('div');
            likes.innerHTML = '&hearts; ' + entry.numberOfLikes;
            cardentry.append(likes);

            cards.append(cardentry);
        });
    });
