import { useEffect, useState } from "react";
import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "../../Images/Hamburger_icon.png";
import { authStore } from "../../Store/_authStore";

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

  // useEffect(() => {
  //   const x = localStorage.getItem("userName");
  //   const y = localStorage.getItem("useriD");
  //   if (x !== "" && x !== undefined && x !== null) {
  //     setUserName(x);
  //   }
  // }, []);

  useEffect(() => {
    // Watch for changes in local storage and update the state accordingly
    const handleStorageChange = () => {
      // Update the state based on the new value in local storage
      const updatedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setLogin(updatedIsLoggedIn);
      const updatedUserName = localStorage.getItem("userName");
      setUserName(updatedUserName);
    };

    // Attach the event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [setLogin, setUserName]);

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
              key={crypto.randomUUID()}
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
            key={crypto.randomUUID()}
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
              <NavLink key={crypto.randomUUID()} to={`/${link}`}>
                {link}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
