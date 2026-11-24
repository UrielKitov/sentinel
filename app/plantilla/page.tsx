import Menu from "../Menu";
import { plantilla } from "../datos";

export default function Plantilla() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <Menu />
      <h1 className="mb-6 text-3xl font-bold">Plantilla</h1>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-1">Nombre</th>
            <th>Posición</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {plantilla.map((j) => (
            <tr key={j.nombre} className="border-b">
              <td className="py-1">{j.nombre}</td>
              <td>{j.posicion}</td>
              <td>{j.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}