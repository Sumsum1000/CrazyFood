import { useEffect, useState } from "react";
import { authStore } from "../../Store/_authStore";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "../../Images/Hamburger_icon.png";

export const NavBar = () => {
  const links = ["all", "about", "auth", "logout"]; //"tags"
  const authLinks = ["+", "my-recipes"];

  const { isLogedIn, setLogin, userName, setUserName } = authStore();
  const [isClicked, setIsClicked] = useState(false);
  const [visiblity, setVisibility] = useState("invisible");

  const hamburgerHandler = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      setVisibility("visible");
    } else {
      setVisibility("invisible");
    }
  };

  return (
    <nav className={style["navbar"]}>
      <NavLink key={Math.random()} to="/" className={style["nav-title"]}>
        {/* {" "} */}
        CrazyFood
      </NavLink>
      <p id={style["hello"]}>Hello {userName}</p>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style["active"] : style["no-active"]
        }
      >
        Home
      </NavLink>

      {isLogedIn &&
        authLinks.map((link) => {
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

      {/* [`${style["icon"]} ${attackActive}`].join() */}
      <div className={style["hamburger-container"]}>
        <img onClick={hamburgerHandler} src={hamburgerIcon} />
        <div
          className={[
            `${style["hamburger-container"]} ${style[visiblity]}`,
          ].join()}
        >
          {links.map((link) => {
            return (
              <NavLink key={Math.random()} to={`/${link}`}>
                {link}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
