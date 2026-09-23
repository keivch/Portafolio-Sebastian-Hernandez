import { useState } from "react";
import { FaCheck, FaCopy, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const contactos = [
  {
    icon: <FaPhoneAlt />,
    label: "Teléfono",
    value: "+57 3245770426",
    displayValue: "+57 324 577 0426",
    href: "tel:+573245770426",
    copyable: true,
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sebastianscarpetta19@gmail.com",
    displayValue: "sebastianscarpetta19@gmail.com",
    href: "mailto:sebastianscarpetta19@gmail.com",
    copyable: true,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/sebastian-scarpetta-developer",
    displayValue: "sebastian-scarpetta-developer",
    href: "https://www.linkedin.com/in/sebastian-scarpetta-developer",
    copyable: false,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Ubicación",
    value: "Palmira, Valle del Cauca, Colombia",
    displayValue: "Palmira, Valle del Cauca",
    href: null,
    copyable: false,
  },
];

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(index);
      window.setTimeout(() => setCopiedItem(null), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 px-5 pb-10 pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-blue-600 to-sky-500 px-7 py-10 text-white sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Contacto</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hablemos de tu próximo proyecto
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-50 sm:text-base">
              Estoy disponible para oportunidades full-time, colaboraciones y proyectos freelance.
              Respondo en promedio en menos de 24 horas.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Disponible para nuevos proyectos
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sebastianscarpetta19@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                <FaEnvelope />
                Enviar email
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-scarpetta-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          <ul className="divide-y divide-slate-100">
            {contactos.map((contacto, index) => (
              <li key={contacto.label} className="flex items-center gap-4 px-6 py-5 sm:px-8">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  {contacto.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {contacto.label}
                  </p>
                  {contacto.href ? (
                    <a
                      href={contacto.href}
                      target={contacto.href.startsWith("http") ? "_blank" : undefined}
                      rel={contacto.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-0.5 block truncate text-sm font-semibold text-slate-900 hover:text-blue-700"
                    >
                      {contacto.displayValue}
                    </a>
                  ) : (
                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-900">
                      {contacto.displayValue}
                    </p>
                  )}
                  {copiedItem === index && (
                    <p className="mt-1 text-xs font-medium text-emerald-600">Copiado</p>
                  )}
                </div>
                {contacto.copyable && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contacto.value, index)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
                    aria-label={`Copiar ${contacto.label}`}
                  >
                    {copiedItem === index ? <FaCheck className="text-emerald-600" /> : <FaCopy />}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-2 py-8 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>Sebastian Hernandez Scarpetta · Desarrollador de software</p>
        <p>Palmira, Colombia</p>
      </footer>
    </section>
  );
}
