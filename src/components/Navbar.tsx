import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Sobre mí", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Habilidades", path: "/skills" },
  { name: "Contacto", path: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#92b7d6] shadow-md">
      {/* Contenedor centrado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white text-slate-900 font-semibold hover:text-slate-700"
          >
            <Home className="h-7 w-7" />
            <span className="hidden sm:block text-xl">Inicio</span>
          </Link>

          {/* Desktop menu (DESDE laptop) */}
          <ul className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
               <NavLink
  to={item.path}
  className={({ isActive }) =>
    `
    text-xl font-medium text-white
    transition
    hover:text-slate-500
    [text-shadow:1px_1px_2px_#000000]
    ${isActive ? "underline underline-offset-8 font-semibold" : ""}
    `
  }
>
  {item.name}
</NavLink>

              </li>
            ))}
          </ul>

          {/* Mobile button (SOLO móvil / tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900 p-2 rounded-md hover:bg-white/20"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#92b7d6]/95 border-t border-white/30">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    block rounded-lg px-4 py-3 text-slate-900 transition
                    hover:bg-white/30
                    ${isActive ? "bg-white/40 font-semibold" : ""}
                    `
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
