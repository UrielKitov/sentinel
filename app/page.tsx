import Menu from "./Menu";
import { equipo, publicaciones } from "./datos";

export default function Home() {
  const ordenadas = [...publicaciones].sort((a, b) =>
    b.fecha.localeCompare(a.fecha)
  );

  return (
    <main className="mx-auto max-w-2xl p-6">
      <Menu />
      <h1 className="text-3xl font-bold">{equipo.nombre}</h1>
      <p className="mb-8 text-gray-500">{equipo.lema}</p>

      <h2 className="mb-4 text-xl font-semibold">Últimas publicaciones</h2>
      {ordenadas.map((p) => (
        <article key={p.titulo} className="mb-6 border-b pb-4">
          <h3 className="font-semibold">{p.titulo}</h3>
          <p className="mb-2 text-xs text-gray-500">{p.fecha}</p>
          <p className="text-sm">{p.texto}</p>
        </article>
      ))}
    </main>
  );
}