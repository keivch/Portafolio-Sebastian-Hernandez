import { FaComments, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { MdGroups, MdPsychologyAlt } from "react-icons/md";

const grupos = [
  {
    categoria: "Metodologías y equipo",
    detalle: "Cómo organizo el trabajo cuando el proyecto es compartido.",
    habilidades: [
      { nombre: "Scrum", icono: <MdGroups /> },
      { nombre: "Trabajo colaborativo", icono: <GiTeamIdea /> },
      { nombre: "Resolución de conflictos", icono: <MdPsychologyAlt /> },
    ],
  },
  {
    categoria: "Habilidades blandas",
    detalle: "Lo que sostengo en el día a día con clientes y compañeros.",
    habilidades: [
      { nombre: "Comunicación efectiva", icono: <FaComments /> },
      { nombre: "Proactividad", icono: <FaLightbulb /> },
      { nombre: "Responsabilidad", icono: <FaUsers /> },
      { nombre: "Adaptabilidad", icono: <FaHandshake /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Forma de trabajo</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Cómo colaboro en un equipo
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Además del código, aplico prácticas de equipo y habilidades que hacen que un proyecto avance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {grupos.map((grupo) => (
            <article key={grupo.categoria} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">{grupo.categoria}</h3>
              <p className="mt-2 text-sm text-slate-500">{grupo.detalle}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {grupo.habilidades.map((habilidad) => (
                  <li
                    key={habilidad.nombre}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-lg text-blue-600 shadow-sm">
                      {habilidad.icono}
                    </span>
                    {habilidad.nombre}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
