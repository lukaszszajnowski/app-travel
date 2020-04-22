import React from 'react';
import axios from 'axios';
import './AddHotel.scss';

class AddHotel extends React.Component {
    state = {
        title: null,
        image: null,
        price: null,
        type: 'Normal',
        location: null
    }

    setValue = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    addNewHotel = () => {
        const body = {
            title: this.state.title,
            image: this.state.image,
            price: this.state.price,
            type: this.state.type,
            location: this.state.location
        }
        axios.post('https://nodejs-mysql-it-academy.herokuapp.com/add-hotel', body).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        if(!this.props.show){
            return null;
        }

        return (
            <div className="add-container">
                <form className="form-group">
                    <input type="text" className="form-control" placeholder="Title" onChange={(event) => {this.setValue('title', event.target.value)}} />
                    <input type="text" className="form-control" placeholder="Image" onChange={(event) => {this.setValue('image', event.target.value)}}/>
                    <input type="text" className="form-control" placeholder="Price" onChange={(event) => {this.setValue('price', event.target.value)}}/>
                    <select className="form-control form-control-sm" onChange={(event) => {this.setValue('type', event.target.value)}}>
                        <option>Normal</option>
                        <option>Plus</option>
                        <option>Premium</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Location" onChange={(event) => {this.setValue('location', event.target.value)}} />
                    <input type="button" className="form-control" value="Add" onClick={this.addNewHotel}/>
                </form>
            </div>
        )
    }
}

export default AddHotel;