import { useEffect, useState } from "react";
import { FaCode, FaEnvelope, FaHeart, FaLinkedin, FaRocket } from "react-icons/fa";
import perfil from "../assets/perfil.jpg";

const roles = [
  "Desarrollador Full Stack",
  "Desarrollador Backend",
  "Desarrollador Frontend",
  "Desarrollador web",
];

const highlights = [
  { icon: <FaCode />, text: "Desarrollo full stack" },
  { icon: <FaRocket />, text: "Soluciones escalables" },
  { icon: <FaHeart />, text: "Código claro y mantenible" },
];

const snapshot = [
  { value: "5", label: "Proyectos reales" },
  { value: "Full stack", label: "Web, APIs y datos" },
  { value: "2025", label: "Graduación Univalle" },
  { value: "Palmira", label: "Valle del Cauca" },
];

export default function Header() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="scroll-mt-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute top-32 -left-16 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-14 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible para oportunidades
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Desarrollador de software
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sebastian Hernandez
              <span className="block text-blue-600">Scarpetta</span>
            </h1>

            <p className="mt-5">
              <span
                key={currentRole}
                className="role-in inline-flex rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white"
              >
                {roles[currentRole]}
              </span>
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Construyo productos web de punta a punta: interfaces claras, APIs y bases de datos
              pensadas para proyectos reales. Me enfoco en soluciones eficientes, escalables y de
              alta calidad, con tecnologías modernas y buenas prácticas.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Ver proyectos
              </a>
              <a
                href="mailto:sebastianscarpetta19@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
              >
                <FaEnvelope className="text-blue-600" />
                Escribirme
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-scarpetta-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
              >
                <FaLinkedin className="text-blue-600" />
                LinkedIn
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700"
                >
                  <span className="text-blue-600">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200 via-white to-sky-100" />
              <img
                src={perfil}
                alt="Sebastian Hernandez Scarpetta, desarrollador de software"
                className="relative h-[26rem] w-full rounded-[1.7rem] border-4 border-white object-cover object-top shadow-xl"
              />
              <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Abierto a nuevos proyectos</p>
                  <p className="text-xs text-slate-500">Palmira, Valle del Cauca · Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="bg-white px-5 py-6">
              <dt className="text-2xl font-extrabold tracking-tight text-slate-900">{item.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
