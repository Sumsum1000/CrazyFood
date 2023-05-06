import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from "./app.module.scss";

import { Home } from "./Pages/HomePage/Home";
import { SharedComponent } from "./Components/SharedComponent/SharedComponent";
import { RecipeCard } from "./Components/Recipe/RecipeCard";
import { About } from "./Pages/About/About";
import { Tags } from "./Pages/Tags/Tags";
import { All } from "./Pages/All/All";
import { RecipeDetails } from "./Components/RecipeDetails/RecipeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style["container"]}>
      <div className={style["side-l"]} />
      <div className={style["main"]}>
        <Router>
          <Routes>
            <Route path="/" element={<SharedComponent />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tags/:tag" element={<Tags />} />
              <Route path="/all" element={<All />} />
              <Route path="/all/:id" element={<RecipeDetails />} />
            </Route>
          </Routes>
        </Router>
      </div>
      <div className={style["side-r"]} />
    </div>
  );
}

export default App;
