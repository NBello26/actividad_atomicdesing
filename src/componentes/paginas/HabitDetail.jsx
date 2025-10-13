import { useState } from "react";

export default function HabitDetail({ habit }) {
  // Datos simulados mínimos
  const [history] = useState([
    { date: "2025-10-10", done: true },
    { date: "2025-10-11", done: false },
    { date: "2025-10-12", done: true },
  ]);

  const consejos = [
    "Mantén un horario regular.",
    "No te exijas demasiado.",
    "Recuerda hidratarte bien.",
  ];

  return (
    <div>
      <h2>{habit.name}</h2>
      <p>Categoría: {habit.category}</p>

      <h3>Historial</h3>
      <ul>
        {history.map((day, i) => (
          <li key={i}>
            {day.date}: {day.done ? "✅ Cumplido" : "❌ No cumplido"}
          </li>
        ))}
      </ul>

      <h3>Consejos</h3>
      <ul>
        {consejos.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
