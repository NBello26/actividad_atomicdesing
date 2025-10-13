import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../atomos/button";
import Input from "../atomos/Input";

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !icon) return;
    onAdd({ name, category, icon, completedToday: false, id: Date.now() });
    setName("");
    setCategory("");
    setIcon("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nombre hábito"
      />
      <Input
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Categoría"
      />
      <Input
        value={icon}
        onChange={e => setIcon(e.target.value)}
        placeholder="Icono (ej: water, sleep)"
      />
      <Button type="submit">Agregar hábito</Button>
    </form>
  );
}
