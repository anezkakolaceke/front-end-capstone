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
  expect(initializeTimes().length).toBeGreaterThan(0);
})

test('Update times correctly', () => {
  const initialState = initializeTimes();
  const updateAction = {
    type: "change_date",
    date: "2024-06-14"
  }
  const updateState = updateTimes(initialState, updateAction);

  expect(updateState).toEqual(["17:00", "17:30", "18:30", "19:30", "20:00", "21:30", "22:00"])
})