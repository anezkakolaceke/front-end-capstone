import { render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';
import Main, {initializeTimes, trythis, updateTimes} from './Main';
import { BrowserRouter } from 'react-router-dom';

test('Renders the BookingForm', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book your table!");
  expect(headingElement).toBeInTheDocument();
});


test('Initialize times correctly', () => {
  expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
})

test('Update times correctly', () => {
  const initialState = initializeTimes();
  const updateAction = {
    type: "change_date",
    date: "2024-06-13"
  }
  const updateState = updateTimes(initialState, updateAction);

  expect(updateState).toEqual(["17:00", "19:00", "20:00", "21:00", "22:00"])
})