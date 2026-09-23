import { useEffect, useState } from "react";
import { FaBars, FaLinkedin, FaTimes } from "react-icons/fa";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            SH
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            Sebastian Hernandez
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Secciones">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://www.linkedin.com/in/sebastian-scarpetta-developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contactar
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Secciones">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={close}
              className="mt-2 rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contactar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
