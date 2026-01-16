import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Projects() {
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      category: 'fullstack',
      description:
        'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel administrativo.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 45,
      forks: 12,
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'frontend',
      description:
        'Dashboard interactivo para análisis de datos con gráficos en tiempo real y filtros avanzados.',
      tags: ['React', 'Chart.js', 'Tailwind', 'TypeScript'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 32,
      forks: 8,
      featured: true
    },
    {
      id: 3,
      title: 'API REST Segura',
      category: 'backend',
      description:
        'API robusta con autenticación JWT, documentación Swagger y sistema de caché Redis.',
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: null,
      stars: 28,
      forks: 5,
      featured: false
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'featured', label: 'Destacados' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects =
    filter === 'todos'
      ? projects
      : filter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mis <span className="text-primary">Proyectos</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Una colección de mis trabajos más recientes y desafiantes
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium ${
                filter === category.id
                  ? 'bg-primary text-primary-content'
                  : 'bg-base-200 hover:bg-base-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`bg-base-100 rounded-2xl overflow-hidden shadow-lg ${
                project.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Imagen */}
              <div className="h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="badge badge-outline">{project.category}</span>
                </div>

                <p className="text-base-content/70 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="badge badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {project.forks}
                  </span>
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline flex-1 gap-2"
                  >
                    <FaGithub />
                    Código
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary flex-1 gap-2"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-base-200 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
          <p className="text-lg text-base-content/70 mb-6">
            Hablemos y hagámoslo realidad.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg px-8">
            Contáctame
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
