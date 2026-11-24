import Link from "next/link";

export default function Menu() {
  const enlaces = [
    { href: "/", texto: "Inicio" },
    { href: "/plantilla", texto: "Plantilla" },
    { href: "/progreso", texto: "Progreso" },
    { href: "/palmares", texto: "Palmarés" },
  ];

  return (
    <nav className="mb-8 flex flex-wrap gap-4 border-b pb-3 text-sm font-medium">
      {enlaces.map((e) => (
        <Link key={e.href} href={e.href} className="hover:underline">
          {e.texto}
        </Link>
      ))}
    </nav>
  );
}