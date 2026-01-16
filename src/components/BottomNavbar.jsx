import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

function BottomNavbar() {
  return (
    <nav
      className="
        fixed 
        bottom-0 
        left-0 
        w-full 
        h-16 
        bg-base-100 
        border-t 
        border-base-300 
        flex 
        justify-around 
        items-center 
        lg:hidden 
        z-50
      "
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-primary" : "text-base-content/60"
          }`
        }
      >
        <FiHome size={22} />
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-primary" : "text-base-content/60"
          }`
        }
      >
        <FiUser size={22} />
        Sobre mí
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-primary" : "text-base-content/60"
          }`
        }
      >
        <FiBriefcase size={22} />
        Proyectos
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-primary" : "text-base-content/60"
          }`
        }
      >
        <FiMail size={22} />
        Contacto
      </NavLink>
    </nav>
  );
}

export default BottomNavbar;
