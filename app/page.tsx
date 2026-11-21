const torneos = [
  {
    nombre: "Torneo de ejemplo",
    estado: "Finalizado",
    clasificacion: [
      { equipo: "Equipo A", pj: 3, pts: 7, gf: 8, gc: 3 },
      { equipo: "Equipo B", pj: 3, pts: 5, gf: 6, gc: 4 },
      { equipo: "Equipo C", pj: 3, pts: 4, gf: 5, gc: 6 },
      { equipo: "Equipo D", pj: 3, pts: 0, gf: 2, gc: 8 },
    ],
    partidos: [
      { local: "Equipo A", visitante: "Equipo B", gl: 3, gv: 1 },
      { local: "Equipo C", visitante: "Equipo D", gl: 4, gv: 0 },
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Resultados de torneos</h1>

      {torneos.map((t) => (
        <section key={t.nombre} className="mb-10">
          <h2 className="text-xl font-semibold">{t.nombre}</h2>
          <p className="mb-3 text-sm text-gray-500">{t.estado}</p>

          <table className="mb-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-1">Equipo</th>
                <th>PJ</th>
                <th>Pts</th>
                <th>GF</th>
                <th>GC</th>
              </tr>
            </thead>
            <tbody>
              {t.clasificacion.map((c) => (
                <tr key={c.equipo} className="border-b">
                  <td className="py-1">{c.equipo}</td>
                  <td>{c.pj}</td>
                  <td>{c.pts}</td>
                  <td>{c.gf}</td>
                  <td>{c.gc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="text-sm">
            {t.partidos.map((p, i) => (
              <li key={i} className="py-1">
                {p.local} {p.gl} - {p.gv} {p.visitante}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}