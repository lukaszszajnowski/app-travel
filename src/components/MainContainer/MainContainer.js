import React from 'react';
import './MainContainer.scss';
import Sidebar from '../Sidebar/Sidebar';
import Hotel from '../Hotel/Hotel';
import Preloader from '../Preloader/Preloader';

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

          {props.data.length > 0 ? (
            props.data.map((hotel, index) => {
            return <Hotel data={hotel} key={index} convertPrice={props.convertPrice} currencySymbol={props.currencySymbol}/>
          })
          ) : (
            <Preloader />
          )
        }
          
      
        </div>
      </div>
    );
}

export default MainContainer;