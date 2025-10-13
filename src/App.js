import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitListPage from "./componentes/paginas/HabitListPage";
import HabitDetail from "./componentes/paginas/HabitDetail";
import { useState } from "react";

const initialHabits = [
  { id: 1, name: "Beber 2L de agua", category: "salud", icon: "water", completedToday: false, active: true },
  { id: 2, name: "Dormir 8 horas", category: "salud", icon: "sleep", completedToday: false, active: true },
  { id: 3, name: "Caminar 10,000 pasos", category: "ejercicio", icon: "walk", completedToday: false, active: true },
];

export default function App() {
  const [habits, setHabits] = useState(initialHabits);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HabitListPage habits={habits} setHabits={setHabits} />}
        />
        <Route
          path="/habit/:id"
          element={<HabitDetailWrapper habits={habits} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Helper para pasar el hábito correcto a HabitDetail según id de URL
function HabitDetailWrapper({ habits }) {
  const { id } = useParams();
  const habit = habits.find(h => h.id === Number(id));
  if (!habit) return <div>Hábito no encontrado</div>;
  return <HabitDetail habit={habit} />;
}