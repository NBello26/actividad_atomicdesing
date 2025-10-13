export default function Header({ completedCount }) {
  return (
    <header className="header">
      <h1>Mis Hábitos</h1>
      <div>Hábitos cumplidos hoy: {completedCount}</div>
    </header>
  );
}
