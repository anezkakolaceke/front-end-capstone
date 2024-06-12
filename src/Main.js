import Homepage from './Homepage'
import BookingPage from './BookingPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, {useReducer} from 'react'
import { BookingContext, BookingDispatchContext } from './BookingContext'

function Main(){

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <BookingContext.Provider value={availableTimes}>
            <BookingDispatchContext.Provider value={dispatch}>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
            </BookingDispatchContext.Provider>
        </BookingContext.Provider>
    )
}

function updateTimes(availableTimes, action){
    switch (action.type){
        case "change_date": {
            if (action.date === "2024-06-13")
                return initializeTimes;
            else
                return initializeTimes;
        }
        default: {
            return availableTimes;
        }
    }
}

const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export default Main;