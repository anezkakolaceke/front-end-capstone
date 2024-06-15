import Homepage from './Homepage.js'
import BookingPage from './BookingPage.js'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, {useReducer} from 'react'
import { BookingContext, BookingDispatchContext } from './BookingContext.js'
import {fetchAPI} from '../API/API.js'
import ConfirmedBooking from './ConfirmedBooking.js'

function Main(){

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    
    return (
        <BookingContext.Provider value={availableTimes}>
            <BookingDispatchContext.Provider value={dispatch}>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
                </Routes>
            </BookingDispatchContext.Provider>
        </BookingContext.Provider>
    )
}

export function updateTimes(availableTimes, action){
    switch (action.type){
        case "change_date": {
            return fetchAPI(new Date(action.date));
        }
        default: {
            return availableTimes;
        }
    }
}

export function initializeTimes(){
    return fetchAPI(new Date());
}

export default Main;