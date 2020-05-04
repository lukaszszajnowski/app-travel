import React from 'react';
import axios from 'axios';

class HotelView extends React.Component {
    state = {
        hotel: {
            title: null,
            price: null,
            description: null,
            wifi: null,
            image: null
        }
    }

    componentDidMount() {
        const API = 'https://nodejs-mysql-it-academy.herokuapp.com/hotels/';

        axios.get(API + this.props.match.params.id).then(response => {
            this.setState({
                hotel: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { title, price, description, wifi, image} = this.state.hotel;
        return (
            <div>
                <ul>
                    <li>{title}</li>
                    <li><img src={image} /></li>
                    <li>{price}</li>
                    <li>{description}</li>
                    <li>{wifi}</li>
                </ul>
            </div>
        );
    }
}

export default HotelView;