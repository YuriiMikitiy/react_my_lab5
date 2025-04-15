import { useState } from "react";

export default function BookingForm({ onAdd, sportsFacilities }) {
  const [facility, setFacility] = useState(sportsFacilities[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date.trim() && time.trim()) {
      onAdd(facility, date, time);
      setDate("");
      setTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <select 
        value={facility}
        onChange={(e) => setFacility(e.target.value)}
      >
        {sportsFacilities.map((facility) => (
          <option key={facility} value={facility}>{facility}</option>
        ))}
      </select>
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      
      <button type="submit">Забронювати</button>
    </form>
  );
}