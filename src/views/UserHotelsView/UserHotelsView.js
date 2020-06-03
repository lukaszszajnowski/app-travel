import React, { useEffect } from 'react';
import Hotel from '../../components/Hotel/Hotel';
import Preloader from '../../components/Preloader/Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { getUserHotels } from '../../store/actions/hotels-actions';

const UserHotelsView = () => {
        const hotels = useSelector((state) => state.userHotels);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getUserHotels());
        }, []);

        return ( 
            <div>
                <div>
                    {hotels.length ? (
                        hotels.map((hotel) => <Hotel data={hotel} />)
                    ) : (
                        <Preloader />
                    )
                }
                </div>
            </div>
         );
    }
 
export default UserHotelsView;