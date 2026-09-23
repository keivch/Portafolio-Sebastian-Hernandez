import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import nicelook from "../assets/niceloook.png";
import bomberos from "../assets/bomberos.png";
import afh from "../assets/afh2.png";
import landing from "../assets/afhlanding.png";
import diepal from "../assets/diepal.png";

const proyectos = [
  {
    titulo: "AFH - Landing page",
    imagen: landing,
    rol: "Frontend",
    descripcion:
      "Diseño y desarrollo de la página corporativa para la empresa AFH Metalmecánicos.",
    link: "https://www.afhmetalmecanico.com/",
    tecnologias: ["Next.js"],
  },
  {
    titulo: "Nicelook",
    imagen: nicelook,
    rol: "Backend",
    descripcion:
      "Backend de una aplicación web para la gestión integral de la peluquería Stylos (Palmira). Con Python, Django y PostgreSQL construí una API REST para el calendario de citas, inventario, nómina y reportes financieros.",
    link: "https://github.com/juanpalacios20/backend_nicelook.git",
    tecnologias: ["Python", "Django", "PostgreSQL", "API REST"],
  },
  {
    titulo: "AFH Metalmecánico",
    imagen: afh,
    rol: "Backend",
    descripcion:
      "Diseño de base de datos y API REST para inventario de herramientas y solicitudes de retiro, con generación de PDF. Incluye módulos de cotizaciones, finanzas y reportes.",
    link: "https://github.com/keivch/Back_Afh.git",
    tecnologias: ["API REST", "Base de datos", "PDF", "Inventario"],
  },
  {
    titulo: "Sistema para bomberos",
    imagen: bomberos,
    rol: "Full stack",
    descripcion:
      "Aplicación para los bomberos de la ciudad. Registra horas trabajadas mediante QR o huella digital, con Spring Boot como microservicio del sistema biométrico.",
    link: "https://github.com/Skx18/bomberos_flask.git",
    tecnologias: ["Spring Boot", "Flask", "QR", "Biometría"],
  },
  {
    titulo: "Página web Diepal",
    imagen: diepal,
    rol: "Mantenimiento web",
    descripcion:
      "Mantenimiento, actualización y optimización del sitio institucional de DIEPAL. Organicé contenidos, ajusté WordPress, Elementor y CSS, y mejoré rendimiento, accesibilidad y SEO.",
    link: "https://diepal.palmira.unal.edu.co/",
    tecnologias: ["WordPress", "Elementor", "CSS", "SEO"],
  },
];

function esRepositorio(link) {
  return link.includes("github.com");
}

export default function Experience() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!modalImage) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setModalImage(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalImage]);

  return (
    <section id="proyectos" className="scroll-mt-24 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Proyectos</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trabajo que puedo mostrar
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Sitios, APIs y sistemas en los que participé: desde páginas corporativas hasta
            gestión de inventario, citas y registro de personal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {proyectos.map((proyecto, index) => {
            const destacado = index === 0;
            return (
              <article
                key={proyecto.titulo}
                className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                  destacado ? "lg:col-span-2" : ""
                }`}
              >
                <div className={destacado ? "lg:grid lg:grid-cols-5" : ""}>
                  <button
                    type="button"
                    onClick={() => setModalImage(proyecto.imagen)}
                    className={`group relative block h-full w-full bg-slate-100 text-left ${
                      destacado ? "lg:col-span-3 lg:min-h-[22rem]" : ""
                    }`}
                    aria-label={`Ampliar imagen de ${proyecto.titulo}`}
                  >
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] ${
                        destacado ? "h-64 sm:h-80 lg:h-full lg:min-h-[22rem]" : "h-52"
                      }`}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                      {proyecto.rol}
                    </span>
                  </button>

                  <div className={`flex flex-col p-6 sm:p-8 ${destacado ? "lg:col-span-2" : ""}`}>
                    <h3 className="text-xl font-bold text-slate-900">{proyecto.titulo}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {proyecto.descripcion}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={proyecto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      {esRepositorio(proyecto.link) ? "Ver repositorio" : "Ver sitio"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
          onClick={() => setModalImage(null)}
          role="presentation"
        >
          <div className="relative max-h-full max-w-6xl" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Imagen del proyecto">
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 shadow-lg"
              aria-label="Cerrar imagen"
            >
              <FaTimes />
            </button>
            <img src={modalImage} alt="Vista ampliada del proyecto" className="max-h-[85vh] w-full rounded-2xl object-contain bg-white" />
          </div>
        </div>
      )}
    </section>
  );
}
