import React from 'react';
import './AddHotelView.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { url } from '../../utils/api';

class AddHotelView extends React.Component {
  addHotel = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const token = localStorage.getItem('token');

    const options = {
      headers: {
        'Content-type': 'multipart/form-data',
        'x-access-token': token
      }
    };

    axios
      .post(url + '/hotels', form, options)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

    render() { 
        return ( 
            <div className="form">
                <h1>Add new hotel</h1>
                  <form onSubmit={this.addHotel}>
                    <div className="form-group">
                      <label>Title: <input type="text" className="form-control" name="hotelTitle" placeholder="Hotel name" required /></label>
                    </div>
                    <div className="form-group">
                      <label>Image: <input type="file" name="hotelImage" required/></label>
                    </div>
                    <div className="form-group">
                      <label>Price: <input type="text" className="form-control" name="hotelPrice" placeholder="How much $?" required /></label>
                    </div>
                    <div className="form-group"><label>Type: <select class="form-control" name="hotelType" required>
                          <option selected>Normal</option>
                          <option>Plus</option>
                          <option>Premium</option>
                        </select>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>Location: <input type="text" className="form-control" name="hotelLocation" placeholder="Place name" required/></label>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Add hotel" className="btn btn-primary" />
                    </div>
                  </form>
            </div>
         )
    }
}
 
export default withRouter(AddHotelView);