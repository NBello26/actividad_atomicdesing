import React from "react";
import HabitCard from "../moleculas/HabitCard";

export default function HabitList({ habits, onToggle, onToggleActive, onDelete }) {
  return (
    <div>
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onToggleActive={onToggleActive}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

