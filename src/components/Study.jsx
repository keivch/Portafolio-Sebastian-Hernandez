import { FaAward, FaCalendarAlt, FaCertificate, FaCheck, FaGraduationCap, FaUniversity } from "react-icons/fa";

const estudios = [
  {
    tipo: "Carrera universitaria",
    titulo: "Tecnología en Desarrollo de Software",
    institucion: "Universidad del Valle",
    periodo: "2022 - 2025",
    estado: "Finalizado",
    descripcion:
      "Formación integral en desarrollo de software, bases de datos, ingeniería de software y metodologías ágiles.",
    icono: <FaGraduationCap />,
    habilidades: ["Programación", "Bases de datos", "Ingeniería de software", "Metodologías ágiles"],
  },
  {
    tipo: "Certificación",
    titulo: "Desarrollo de Software",
    institucion: "Oracle",
    periodo: "2023",
    estado: "Completado",
    descripcion: "Certificación especializada en desarrollo de software.",
    icono: <FaCertificate />,
    habilidades: ["Oracle Database", "Java", "SQL", "Desarrollo empresarial"],
  },
];

const logros = [
  { texto: "Promedio académico destacado", icono: <FaAward /> },
  { texto: "Participación en proyectos reales", icono: <FaCheck /> },
  { texto: "Certificación internacional", icono: <FaCertificate /> },
];

export default function Study() {
  return (
    <section id="formacion" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Formación</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Estudios y certificación
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Trayectoria académica que respalda el trabajo en desarrollo de software.
          </p>
        </div>

        <ol className="relative space-y-5 border-l border-blue-200 pl-6 sm:pl-8">
          {estudios.map((estudio) => (
            <li key={estudio.titulo} className="relative">
              <span className="absolute top-6 -left-10 grid h-8 w-8 place-items-center rounded-full border border-blue-100 bg-white text-sm text-blue-600 shadow-sm sm:-left-12">
                {estudio.icono}
              </span>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
                      {estudio.tipo}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">{estudio.titulo}</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {estudio.estado}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <FaUniversity className="text-slate-400" />
                    {estudio.institucion}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCalendarAlt className="text-slate-400" />
                    {estudio.periodo}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{estudio.descripcion}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {estudio.habilidades.map((habilidad) => (
                    <li
                      key={habilidad}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {habilidad}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {logros.map((logro) => (
            <li
              key={logro.texto}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600">
                {logro.icono}
              </span>
              {logro.texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
