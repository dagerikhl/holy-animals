import React from 'react';

import { Link } from '@reach/router/index';

const baseUrl = 'https://acandodogapi.azurewebsites.net/';

export default class Images extends React.Component {

    constructor() {
        super();

        this.state = {
            images: []
        };
    }

    componentDidMount() {
        this.fetchImages()
            .then((data) => data.json())
            .then((json) => {
                this.setState({
                    images: json
                });
            });
    }

    render() {
        return <section className="flex-container">
            {this.state.images.map(Images.generateImage)}
        </section>;
    }

    fetchImages() {
        return fetch(baseUrl + this.props.animal + 's.json');
    }

    static generateImage(image) {
        return <Link to={`/image/${image.id}`} key={image.id}
                     className="card clickable-card content-img-container">
            <h3>#{image.id}</h3>
            <img src={`${baseUrl}${image.imageUrl}`}/>
            <div>&hearts; {image.numberOfLikes}</div>
        </Link>;
    }

}
