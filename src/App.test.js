import { queryByAttribute, render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';
import Main, {initializeTimes, trythis, updateTimes} from './Main';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

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

test("Check name attributes", () => {
  const result = render(<BookingForm />);
  const nameEl = getById(result.container, "res-name")
  expect(nameEl).toHaveAttribute("required");
})

test("Check email attributes", () => {
  const result = render(<BookingForm />);
  const element = getById(result.container, "res-email")
  expect(element).toHaveAttribute("required");
})

test("Check phone attributes", () => {
  const result = render(<BookingForm />);
  const element = getById(result.container, "res-phone")
  expect(element).toHaveAttribute("required");
})

test("Check date attributes", () => {
  const result = render(<BookingForm />);
  const element = getById(result.container, "res-date")
  expect(element).toHaveAttribute("required");
})

test("Check button attributes", () => {
  const result = render(<BookingForm />);
  const element = getById(result.container, "res-button")
  expect(element).toHaveAttribute("disabled");
})

test("Check number of guests attributes", () => {
  const result = render(<BookingForm />);
  const element = getById(result.container, "guests")
  expect(element).toHaveAttribute("min");
  expect(element).toHaveAttribute("max");
})

const getById = queryByAttribute.bind(null, 'id');