import { useMemo, useState } from "react";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaDatabase,
  FaJava,
  FaAmazon,
  FaNodeJs,
  FaGithub,
  FaFlask,
  FaHtml5,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiKotlin, SiDjango, SiNextdotjs } from "react-icons/si";

const tecnologias = [
  { nombre: "JavaScript", icono: <SiJavascript />, tono: "text-amber-500", categoria: "Frontend" },
  { nombre: "React", icono: <FaReact />, tono: "text-sky-500", categoria: "Frontend" },
  { nombre: "Next.js", icono: <SiNextdotjs />, tono: "text-slate-800", categoria: "Frontend" },
  { nombre: "Angular", icono: <FaAngular />, tono: "text-red-500", categoria: "Frontend" },
  { nombre: "HTML5", icono: <FaHtml5 />, tono: "text-orange-500", categoria: "Frontend" },
  { nombre: "Tailwind CSS", icono: <SiTailwindcss />, tono: "text-cyan-500", categoria: "Frontend" },
  { nombre: "Python", icono: <FaPython />, tono: "text-blue-600", categoria: "Backend" },
  { nombre: "Django", icono: <SiDjango />, tono: "text-green-700", categoria: "Backend" },
  { nombre: "Flask", icono: <FaFlask />, tono: "text-slate-700", categoria: "Backend" },
  { nombre: "Java · Spring Boot", icono: <FaJava />, tono: "text-orange-600", categoria: "Backend" },
  { nombre: "Node.js", icono: <FaNodeJs />, tono: "text-green-600", categoria: "Backend" },
  {
    nombre: "Bases de datos",
    descripcion: "PostgreSQL, SQLite, MariaDB, MongoDB",
    icono: <FaDatabase />,
    tono: "text-indigo-600",
    categoria: "Datos",
  },
  { nombre: "Kotlin", icono: <SiKotlin />, tono: "text-purple-600", categoria: "Móvil" },
  { nombre: "Docker", icono: <FaDocker />, tono: "text-sky-600", categoria: "DevOps" },
  { nombre: "AWS · EC2", icono: <FaAmazon />, tono: "text-amber-600", categoria: "Nube" },
  { nombre: "GitHub", icono: <FaGithub />, tono: "text-slate-800", categoria: "Herramientas" },
];

const grupos = ["Frontend", "Backend", "Datos", "Móvil", "DevOps", "Nube", "Herramientas"];

export default function Technologies() {
  const [filtro, setFiltro] = useState("Todas");

  const visibles = useMemo(() => {
    if (filtro === "Todas") return grupos;
    return grupos.filter((grupo) => grupo === filtro);
  }, [filtro]);

  return (
    <section id="tecnologias" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Stack</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tecnologías con las que trabajo
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Organizadas por capa para ver de un vistazo frontend, backend, datos e infraestructura.
            </p>
          </div>
          <p className="text-sm font-medium text-slate-500">{tecnologias.length} herramientas</p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar tecnologías">
          {["Todas", ...grupos].map((grupo) => {
            const activo = filtro === grupo;
            return (
              <button
                key={grupo}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setFiltro(grupo)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activo
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                {grupo}
              </button>
            );
          })}
        </div>

        <div className="space-y-10">
          {visibles.map((grupo) => {
            const items = tecnologias.filter((tech) => tech.categoria === grupo);
            return (
              <div key={grupo}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {grupo}
                </h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((tech) => (
                    <li
                      key={tech.nombre}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                    >
                      <div className={`text-3xl ${tech.tono}`}>{tech.icono}</div>
                      <p className="mt-3 text-sm font-semibold text-slate-900">{tech.nombre}</p>
                      {tech.descripcion && (
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{tech.descripcion}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
