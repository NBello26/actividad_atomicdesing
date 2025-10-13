export default function Icon({ name, size = 24 }) {
  const icons = {
    water: "💧",
    sleep: "😴",
    walk: "🚶‍♂️",
    health: "❤️",
    exercise: "🏋️",
    food: "🍎",
  };

  return <span style={{ fontSize: size }}>{icons[name] || "❓"}</span>;
}
