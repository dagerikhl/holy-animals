import React from 'react';

import { Link } from '@reach/router';

const baseUrl = 'https://acandodogapi.azurewebsites.net/';

export function fetchImages(animal) {
    return fetch(baseUrl + animal + 's.json');
}

export function generateImage(image, clickable = false) {
    return clickable ?
        <Link to={`/image/${image.id}`} key={image.id} className="card clickable-card content-img-container">
            <h3>#{image.id}</h3>
            <img src={`${baseUrl}${image.imageUrl}`}/>
            <div>&hearts; {image.numberOfLikes}</div>
        </Link> :

        <div key={image.id} className="card">
            <h3>#{image.id}</h3>
            <img src={`${baseUrl}${image.imageUrl}`}/>
            <div>&hearts; {image.numberOfLikes}</div>
        </div>;
}
