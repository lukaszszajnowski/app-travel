import React from 'react';
import './MainContainer.scss';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';

const MainContainer = (props) => {
  
    return (
      <div className="main-container">
        <Sidebar convertPrice={props.convertPrice} currencySymbol={props.currencySymbol}/>
        <div className="hotels">
          <div className="tools" style={{width: '100%'}}>
          <form>
            <select onChange={props.convertPrice} className="form-control">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="PLN">PLN</option>
                        <option value="CHF">CHF</option>
              </select>
              </form>
            <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} className="form-control"/>
          </div>
          {props.data.map((hotel) => {
            return (
              <div className="hotel" key={hotel.id}>
                <img src={hotel.image} alt={hotel.title} />
                <div className="hotel__info">
                  <Link to={"hotel/" + hotel.id}>
                    <span className="hotel-name">{hotel.title}</span>
                  </Link>
                  <p>{hotel.location}</p>
            <span className="hotel-price">{hotel.price}{props.currencySymbol}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default MainContainer;