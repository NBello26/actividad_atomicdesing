// Importa el hook useState para manejar el estado local del componente
import { useState } from "react";

// Importa componentes para la interfaz: Header (plantilla), HabitList (organismo), PanelResumen (página)
import Header from "../plantillas/Header";
import HabitList from "../organismos/HabitList";
import PanelResumen from "../paginas/PanelResumen";

// Define un arreglo inicial de hábitos con sus propiedades
const initialHabits = [
  { id: 1, name: "Beber 2L de agua", category: "salud", icon: "water", completedToday: false, active: true },
  { id: 2, name: "Dormir 8 horas", category: "salud", icon: "sleep", completedToday: false, active: true },
  { id: 3, name: "Caminar 10,000 pasos", category: "ejercicio", icon: "walk", completedToday: false, active: true },
];

// Componente principal que representa la página de la lista de hábitos
export default function HabitListPage() {
  // useState para guardar y actualizar la lista de hábitos en el estado del componente
  const [habits, setHabits] = useState(initialHabits);

  // Función para alternar el estado 'completedToday' de un hábito (marcar como completado o no)
  const toggleCompleted = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completedToday: !habit.completedToday } : habit
    ));
  };

  // Función para alternar el estado 'active' de un hábito (activar o desactivar el hábito)
  const toggleActive = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, active: !habit.active } : habit
    ));
  };

  // Función para eliminar un hábito de la lista, filtrando por id
  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  // Filtra los hábitos activos (aquellos que están marcados como activos)
  const activeHabits = habits.filter(habit => habit.active);

  // Cuenta cuántos hábitos activos están completados hoy
  const completedCount = activeHabits.filter(habit => habit.completedToday).length;

  // Renderiza el componente:
  // - Header mostrando la cantidad de hábitos completados
  // - PanelResumen con la lista de hábitos activos
  // - HabitList con la lista activa y funciones para alternar y eliminar hábitos
  return (
    <>
      <Header completedCount={completedCount} />
      <PanelResumen habits={activeHabits} />
      <HabitList
        habits={activeHabits}
        onToggle={toggleCompleted}
        onToggleActive={toggleActive}
        onDelete={deleteHabit}
      />
    </>
  );
}
