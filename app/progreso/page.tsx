import Menu from "../Menu";
import { temporadas } from "../datos";

export default function Progreso() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <Menu />
      <h1 className="mb-6 text-3xl font-bold">Progreso</h1>
      {temporadas.map((t) => (
        <article key={t.temporada} className="mb-6 border-b pb-4">
          <h2 className="font-semibold">{t.temporada}</h2>
          <p className="text-sm text-gray-500">
            {t.liga} · Puesto: {t.puesto}
          </p>
          <p className="mt-2 text-sm">{t.nota}</p>
        </article>
      ))}
    </main>
  );
}