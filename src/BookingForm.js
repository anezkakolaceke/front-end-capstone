import React, {useState, useContext} from "react";
import { BookingContext, BookingDispatchContext } from "./BookingContext";

function BookingForm(props){
    const availableTimes = useContext(BookingContext);
    const dispatch = useContext(BookingDispatchContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Other");

    const [formData, setFormData] = useState();

    const listTimes =availableTimes.map((item)=>
        <option data-testid="select-option">{item}</option>
    )

    function handleSubmit(e){
        e.preventDefault();
        setFormData({
            date: date,
            time: time,
            numberGuests: guests,
            occasion: occasion
        });
        props.submitFunction(formData);
    }

    function handleDateChange(e){
        dispatch({
            type: "change_date",
            date: e.target.value
        })
        setDate(e.target.value)
    }

    return(
        <>
            <p>Book your table!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-name">Name</label>
                <input
                    type="field"
                    id="res-name"
                    name="res-name"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="res-email">Email</label>
                <input
                    type="email"
                    id="res-email"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="res-phone">Phone number</label>
                <input
                    type="field"
                    id="res-phone"
                    value={phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    required
                />
                <label htmlFor="res-date">Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
                <label htmlFor="res-time">Choose time: </label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {listTimes}
                </select>
                <label htmlFor="guests">Number of guests: </label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occassion: </label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <input
                    id="res-button"
                    aria-label="On Click"
                    type="submit"
                    value="Make your reservation!"
                    disabled={!name || !email || !phone || !date}
                />
            </form>
            
        </>
    )
}

export default BookingForm;