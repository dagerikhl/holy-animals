import React from 'react';

import { Link } from '@reach/router/index';

import { fetchImages, generateImage } from 'src/utils';

export default class Image extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            animal: props.animal,
            id: props.id,
            image: {}
        };
    }

    componentDidMount() {
        fetchImages(this.state.animal)
            .then((data) => data.json())
            .then((images) => images.filter((image) => image.id === this.state.id))
            .then((images) => {
                this.setState({
                    image: images[0]
                });
            });
    }

    render() {
        if (!this.state.image) {
            return null;
        }

        return <section className="animal-container">
            {generateImage(this.state.image)}

            <Link to="/" className="link">- Back to Home</Link>
        </section>;
    }

}
