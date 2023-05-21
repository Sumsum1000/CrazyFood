import { authStore } from "../../Store/_authStore";
import style from "./Logout.module.scss";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const { isLogedIn, setLogin, userName, setUserName, token, setToken } =
    authStore();

  const yesHandler = () => {
    setLogin(false);
    localStorage.removeItem("token");
    setUserName("guest");
    navigate("/");
  };

  const noHandler = () => {
    navigate(-1);
  };

  return (
    <div className={style["logout-container"]}>
      <p>Do you realy want to logout?</p>
      <button onClick={yesHandler}>yes</button>
      <button onClick={noHandler}>no</button>
    </div>
  );
};
