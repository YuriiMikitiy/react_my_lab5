import React from "react";

export default function Filter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        Всі
      </button>
      <button
        className={currentFilter === "booked" ? "active" : ""}
        onClick={() => onFilterChange("booked")}
      >
        Заброньовані
      </button>
      <button
        className={currentFilter === "active" ? "active" : ""}
        onClick={() => onFilterChange("active")}
      >
        Очікуючі
      </button>
    </div>
  );
}