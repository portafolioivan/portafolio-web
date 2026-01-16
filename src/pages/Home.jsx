import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 sm:px-10 py-10">
      <div className="max-w-4xl w-full space-y-8">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Portafolio{" "}
          <span className="text-primary">
            Ivan
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-base-content/70">
          Desarrollo web moderno · JavaScript · IA · UI/UX
        </h2>

        {/* Description */}
        <div className="space-y-6 text-base-content/70">
          <p className="text-lg md:text-xl leading-relaxed">
            Este proyecto fue creado como un portafolio personal y
            una plataforma pensada para desarrolladores. Aquí
            comparto mis proyectos reales, experiencias y
            soluciones aplicadas en el desarrollo web moderno,
            utilizando tecnologías como React, TailwindCSS y
            herramientas de inteligencia artificial.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            El objetivo principal es dar a conocer mi trabajo
            profesional, documentar procesos de desarrollo y
            ayudar a programadores principiantes a entender cómo
            integrar la IA en su flujo de trabajo, mejorar su
            productividad y construir aplicaciones web escalables
            con buenas prácticas.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Este espacio también funciona como un laboratorio de
            ideas donde se muestran proyectos, experimentos,
            dashboards y recursos útiles para quienes están dando
            sus primeros pasos en el mundo del desarrollo web.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-6">
          <button
            className="btn btn-primary btn-lg px-8"
            onClick={() => navigate("/projects")}
          >
            Ver Proyectos
          </button>

          <button
            className="btn btn-outline btn-lg px-8"
            onClick={() => navigate("/contact")}
          >
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;