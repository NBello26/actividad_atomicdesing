import React from "react";
import { Link } from "react-router-dom";
import Icon from "../atomos/Icon";
import Checkbox from "../atomos/Checkbox";
import Button from "../atomos/button";


export default function HabitCard({ habit, onToggle, onToggleActive, onDelete }) {
  return (
    <div className="habit-card" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "0.5rem" }}>
      <Link to={`/habit/${habit.id}`} style={{ textDecoration: "none", color: "inherit", flex: 1, display: "flex", alignItems: "center" }}>
        <Icon name={habit.icon} size={32} />
        <div style={{ marginLeft: "1rem" }}>
          <h3>{habit.name}</h3>
          <p>{habit.category}</p>
        </div>
      </Link>
      <Checkbox
        checked={habit.completedToday}
        onChange={() => onToggle(habit.id)}
        label="Cumplido hoy"
      />
      <Button onClick={() => onToggleActive(habit.id)}>
        {habit.active ? "Desactivar" : "Activar"}
      </Button>
      <Button onClick={() => onDelete(habit.id)}>Eliminar</Button>
    </div>
  );
}
