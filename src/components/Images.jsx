import React from 'react';

import { fetchImages, generateImage } from 'src/utils';

const baseUrl = 'https://acandodogapi.azurewebsites.net/';

export default class Images extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animal: props.animal,
            images: []
        };
    }

    componentDidMount() {
        fetchImages(this.state.animal)
            .then((data) => data.json())
            .then((images) => {
                this.setState({
                    images
                });
            });
    }

    render() {
        return <React.Fragment>
            <h2>These are all the awesome Holy Animals you will ever need</h2>

            <div className="flex-container">
                {this.state.images.map((image) => generateImage(image, true))}
            </div>
        </React.Fragment>;
    }

}
