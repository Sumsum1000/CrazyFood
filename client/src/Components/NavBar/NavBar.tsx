import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const links = ["all", "tags", "about"];

  return (
    <nav className={style["navbar"]}>
      <NavLink key={Math.random()} to="/" className={style["nav-title"]}>
        {" "}
        CrazyFood
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Home
      </NavLink>
      {links.map((link) => {
        return (
          <NavLink
            key={Math.random()}
            to={`/${link}`}
            className={({ isActive }) =>
              isActive ? style["active"] : style["no-active"]
            }
          >
            {link}
          </NavLink>
        );
      })}
    </nav>
  );
};
