import React from "react";
import BookingForm from "./BookingForm";
import { submitAPI } from "../API/API";
import { useNavigate } from "react-router-dom";


function BookingPage(){

    const navigate = useNavigate();

    const submitForm = ((formData) => {
        if(submitAPI(formData))
            navigate("/confirmation")
    });

    return (
        <main>
            <BookingForm submitFunction={submitForm}/>
        </main>
    )
}


export default BookingPage;