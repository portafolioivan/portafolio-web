import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function About() {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
    { name: 'Python', level: 80, color: 'bg-sky-600' },
  ];

  const experiences = [
    {
      year: '2023 - Presente',
      title: 'Desarrollador Full Stack Senior',
      company: 'Tech Innovations Inc.',
      description:
        'Liderando proyectos de IA integración y desarrollo de aplicaciones empresariales escalables.'
    },
    {
      year: '2021 - 2023',
      title: 'Desarrollador Frontend',
      company: 'Digital Solutions SA',
      description:
        'Desarrollo de interfaces de usuario modernas y optimización de performance en aplicaciones web.'
    },
    {
      year: '2019 - 2021',
      title: 'Desarrollador Web Junior',
      company: 'Startup Creativa',
      description:
        'Implementación de soluciones web responsive y colaboración en proyectos de e-commerce.'
    }
  ];

  const values = [
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Código Limpio',
      description: 'Mantenibilidad y escalabilidad como prioridad en cada línea escrita.'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Innovación Constante',
      description: 'Siempre explorando nuevas tecnologías y mejores prácticas.'
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'Soluciones Creativas',
      description: 'Enfoque en resolver problemas complejos con ideas simples y efectivas.'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Trabajo en Equipo',
      description: 'Comunicación efectiva y colaboración para alcanzar objetivos comunes.'
    }
  ];

  return (
    <section className="min-h-screen py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre <span className="text-primary">Mí</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Apasionado desarrollador con más de 5 años de experiencia creando soluciones digitales innovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Perfil */}
          <div className="space-y-8">
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src="./hombre.png"
                      alt="Ivan Mansilla"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-content px-4 py-2 rounded-full font-semibold">
                    Disponible
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-2">Ivan Mansilla</h2>
                  <p className="text-primary text-lg mb-3">Desarrollador Full Stack</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="badge badge-primary">React</span>
                    <span className="badge badge-secondary">Node.js</span>
                    <span className="badge badge-accent">TypeScript</span>
                    <span className="badge badge-neutral">IA</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-base-content/70 leading-relaxed">
                Mi pasión por la tecnología comenzó desde joven, y he dedicado mi carrera a transformar ideas complejas
                en soluciones digitales elegantes y funcionales. Me especializo en crear experiencias de usuario
                excepcionales y arquitecturas backend robustas.
              </p>
            </div>

            {/* Habilidades */}
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Mis Habilidades</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experiencia + valores */}
          <div className="space-y-8">
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Experiencia Profesional</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="badge badge-primary badge-outline mb-2">{exp.year}</div>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-base-content/70">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Mi Filosofía</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-base-200 hover:bg-base-300 transition-all duration-300"
                  >
                    <div className="text-primary mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-sm text-base-content/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6">¿Interesado en trabajar juntos?</p>
          <Link to="/contact" className="btn btn-primary btn-lg px-8">
            Contáctame
            </Link>

        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-base-100/50 rounded-lg">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-sm text-base-content/60">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

export default About;
