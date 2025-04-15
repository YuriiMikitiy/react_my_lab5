import React from "react";

export default function Booking({ booking, onDelete, onToggle }) {
  return (
    <div className={`booking ${booking.booked ? 'booked': ''}`}>
      <input
        type="checkbox"
        checked={booking.booked}
        onChange={() => onToggle(booking.id)}
      />
      <div className="booking-info">
        <h3>{booking.facility}</h3>
        <p>Дата: {booking.date}</p>
        <p>Час: {booking.time}</p>
        <p>Статус: {booking.booked ? "Заброньовано" : "Очікує підтвердження"}</p>
      </div>
      <button onClick={() => onDelete(booking.id)}>Скасувати</button>
    </div>
  );
}