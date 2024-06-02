import Homepage from './Homepage'
import BookingPage from './BookingPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function Main(){
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    )
}

export default Main;