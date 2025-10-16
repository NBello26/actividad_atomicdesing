import React from "react";
export default function PanelResumen({ habits }) {
  const totalHabits = habits.length;
  const completedToday = habits.filter(h => h.completedToday).length;

  return (
    <div style={{ padding: "1rem", backgroundColor: "#f0f0f0", marginBottom: "1rem" }}>
      <strong>Resumen:</strong> {completedToday} de {totalHabits} hábitos cumplidos hoy.
    </div>
  );
}
