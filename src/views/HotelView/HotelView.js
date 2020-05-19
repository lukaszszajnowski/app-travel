import React from 'react';
import './HotelView.scss';
import axios from 'axios';
import { connect } from 'react-redux';

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
    
        axios
          .get(API + this.props.match.params.id)
          .then((response) => {
            this.setState({
              hotel: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

    render() {
        const { title, price, description, wifi, image } = this.state.hotel;
        return (
            <div className="container">
                    {this.props.savedText}
                    <h2>{title}</h2>
                    <img className="hotel-photo" src={image} alt={image} />
                    <div className="container-hotel-info">
                        <div className="hotel-info">Price: <span className="hotel-price">{price}</span></div>
                        <div className="hotel-info">Rating: {description}</div>
                        <div className="hotel-info">WIFI: {wifi ? "YES" : "NO"}</div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      savedText: state.text,
    };
  };
  
  export default connect(mapStateToProps)(HotelView);