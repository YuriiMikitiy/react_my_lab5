import React from "react";
import Booking from "./Booking";

export default function BookingList({ bookings, onDelete, onToggle, filter }) {
  const filteredBookings = bookings.filter((booking) => {
    if (filter === "booked") return booking.booked;
    if (filter === "active") return !booking.booked;
    return true;
  });

  return (
    <div className="booking-list">
      {filteredBookings.length > 0 ? (
        filteredBookings.map(booking => (
          <Booking
            key={booking.id}
            booking={booking}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <p>Немає бронювань</p>
      )}
    </div>
  );
}