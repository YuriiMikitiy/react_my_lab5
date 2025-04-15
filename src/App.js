import "./App.css";
import { useState, useEffect } from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import Filter from "./components/Filter";

export default function App() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sportsFacilities] = useState([
    "Футбольне поле",
    "Баскетбольний майданчик",
    "Тенісний корт",
    "Волейбольний майданчик",
    "Спортивний зал"
  ]);

  // Завантаження бронювань з localStorage
  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // Збереження бронювань у localStorage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (facility, date, time) => {
    setBookings([
      ...bookings, 
      { 
        id: Date.now(), 
        facility, 
        date, 
        time,
        booked: false,
        userName: "Користувач" // Можна додати форму для введення імені
      }
    ]);
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const toggleBooking = (id) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, booked: !booking.booked } : booking
      )
    );
  };

  return (
    <div className="app">
      <h1>Бронювання спортивних майданчиків</h1>
      <BookingForm onAdd={addBooking} sportsFacilities={sportsFacilities} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      <BookingList
        bookings={bookings}
        onDelete={deleteBooking}
        onToggle={toggleBooking}
        filter={filter}
      />
    </div>
  );
}