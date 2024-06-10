import React, {useState} from "react";

function BookingForm(){
    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Other");

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    const listTimes =availableTimes.map((item)=>
        <option>{item}</option>
    )

    return(
        <>
            <form>
                <label for="res-date">Choose date: </label>
                <input 
                    type="date" 
                    id="res-date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                />
                <label for="res-time">Choose time: </label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {listTimes}
                </select>
                <label for="guests">Number of guests: </label>
                <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label for="occasion">Occassion: </label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <input type="submit" value="Make your reservation!" />
            </form>
        </>
    )
}

export default BookingForm;