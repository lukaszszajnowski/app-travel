import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourites } from '../../store/actions/hotels-actions';

const FavouriteView = () => {
    const [inputValue, setInputValue] = useState('');
    const hotels = useSelector((state) => {
        return state.favourites
    });
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const removeHotel = (id) => {
        dispatch(removeFromFavourites(id))
    }

    return (
        <div>
            <h1>Favourite list</h1>
            <input type="text" onChange={handleChange} />

            {
                hotels.filter((hotel) => {
                    return hotel.title.toLowerCase().includes(inputValue.toLowerCase()) 
                }).map((hotel) => {
                    return <p onClick={() => { removeHotel(hotel.id) }}>{hotel.title}</p>
                })
            }
        </div>
    )
}

export default FavouriteView;