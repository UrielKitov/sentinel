import Menu from "../Menu";
import { palmares } from "../datos";

export default function Palmares() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <Menu />
      <h1 className="mb-6 text-3xl font-bold">Palmarés</h1>
      <ul className="text-sm">
        {palmares.map((p, i) => (
          <li key={i} className="border-b py-2">
            🏆 {p.titulo} <span className="text-gray-500">({p.temporada})</span>
          </li>
        ))}
      </ul>
    </main>
  );
}