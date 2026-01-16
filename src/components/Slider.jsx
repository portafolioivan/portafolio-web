import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
  FiGithub,
  FiYoutube
} from "react-icons/fi";

function Slider() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/", icon: FiHome },
    { label: "Sobre mí", path: "/about", icon: FiUser },
    { label: "Proyectos", path: "/projects", icon: FiBriefcase },
    { label: "Contacto", path: "/contact", icon: FiMail },
  ];

  return (
    <aside className="h-screen w-80 bg-base-100 shadow-xl flex flex-col fixed left-0 top-0 overflow-hidden">
      {/* Logo Section - Mejor espaciado y alineación */}
      <div className="px-8 py-8 border-b border-base-300/30">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-bold text-base-content">Portafolio <span className="text-primary">Ivan</span></h1>
            <p className="text-xs text-base-content/60">Desarrollo web moderno</p>
          </div>
        </div>
      </div>

      {/* Navigation - Más profesional con indicadores activos */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-4 pl-3">
            Navegación
          </h2>
          <ul className="space-y-2">
            {menuItems.map(({ label, path, icon: Icon }) => {
              const isActive = location.pathname === path;

              return (
                <li key={path}>
                  <button
                    onClick={() => navigate(path)}
                    className={`
                      w-full
                      flex items-center gap-4
                      px-4 py-3
                      cursor-pointer
                      rounded-xl
                      transition-all duration-300
                      select-none
                      relative
                      group
                      ${
                        isActive
                          ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-sm"
                          : "text-base-content/70 hover:bg-base-200 hover:text-base-content hover:shadow-sm"
                      }
                    `}
                  >
                    {/* Indicador activo sutil */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"></div>
                    )}
                    
                    <div className={`
                      p-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? "bg-primary/10" 
                        : "group-hover:bg-base-300/50"
                      }
                    `}>
                      <Icon 
                        size={20} 
                        className={isActive ? "text-primary" : "text-base-content/60"}
                      />
                    </div>
                    
                    <span className="text-base font-medium">
                      {label}
                    </span>
                    
                    {/* Flecha indicadora en hover */}
                    {!isActive && (
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="mt-8">
            <h2 className="text-xs uppercase tracking-wider text-base-content/50 font-semibold mb-4 pl-3">
                Redes
            </h2>
            <div className="flex gap-3 pl-3">
                {[
                { 
                    name: "GitHub", 
                    icon: <FiGithub />, 
                    url: "https://github.com/tuusuario" 
                },
                { 
                    name: "YouTube", 
                    icon: <FiYoutube />, 
                    url: "https://youtube.com/tucanal" 
                },
                { 
                    name: "Correo", 
                    icon: <FiMail />, 
                    url: "mailto:tuemail@ejemplo.com" 
                }
                ].map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-base-200 hover:bg-base-300 transition-all duration-300 hover:scale-105 hover:shadow-md group"
                    title={social.name}
                >
                    <div className="text-lg text-base-content/70 group-hover:text-primary transition-colors">
                    {social.icon}
                    </div>
                </a>
                ))}
            </div>
        </div>
      </nav>

      {/* Footer - Más elegante */}
      <footer className="px-6 py-6 border-t border-base-300/30 bg-base-200/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-base-content/60">
              © {new Date().getFullYear()}
            </p>
            <p className="text-xs text-base-content/40">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </aside>
  );
}

export default Slider;