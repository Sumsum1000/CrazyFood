import { useEffect, useRef, useState } from "react";
import style from "./Auth.module.scss";
import axios from "axios";
import { authStore } from "../../Store/_authStore";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();
  const loginEmaildRef = useRef();
  const loginPasswordRef = useRef();

  const { isLogedIn, setLogin, userName, setUserName, token, setToken } =
    authStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = "error";
  const [isError, setIsError] = useState(false);

  const BASE_URL = "http://localhost:8080/api/v1";

  const errors = [{ emptyField: "Fill in email and password" }];

  const submitRegisterHandler = (e) => {
    e.preventDefault();

    const name = registerNameRef.current.value;
    const password = registerPasswordRef.current.value;
    const email = registerEmailRef.current.value;

    axios
      .post(`${BASE_URL}/auth/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        login(email, password);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();

    const email = loginEmaildRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      const token = await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email, password) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    const { token } = response.data;
    const userName = response.data.user.name; //const userPassword = response.data.user.password;
    //const userEmail = response.data.user.email;
    setToken(token);
    setLogin(true);

    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);

    setUserName(localStorage.getItem("userName"));
    navigate("/");
    return token;
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
    setUserName("guest");
  };

  return (
    <div className={style["form-container"]}>
      <form
        className={style["register-container"]}
        onClick={submitRegisterHandler}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            ref={registerNameRef}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="Registerassword"
            type="text"
            name="password"
            placeholder="Enter password"
            ref={registerPasswordRef}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="registerEmail"
            type="email"
            name="email"
            placeholder="Enter email"
            ref={registerEmailRef}
          />
        </div>
        <input className={style["btn"]} type="submit" value="Register" />
      </form>

      {/* Login */}
      <div className={style["login-container"]}>
        <form onClick={submitLoginHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="loginEmail"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              ref={loginEmaildRef}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="loginPassword"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              ref={loginPasswordRef}
            />
          </div>
          <input className={style["btn"]} type="submit" value="Login" />
        </form>
      </div>
      {isError && <p>{errorMsg}</p>}
    </div>
  );
};
