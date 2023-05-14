import { useEffect } from "react";
import { authStore } from "../../Store/_authStore";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const links = ["+", "all", "about", "auth", "logout"]; //"tags"

  const { isLogedIn, setLogin, userName, setUserName } = authStore();

  // useEffect(() => {

  // }, [userName])

  return (
    <nav className={style["navbar"]}>
      <NavLink key={Math.random()} to="/" className={style["nav-title"]}>
        {" "}
        CrazyFood
      </NavLink>
      <p>Hello {userName}</p>
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
