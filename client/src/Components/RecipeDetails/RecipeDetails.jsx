import { FC, useEffect, useState } from "react";
import style from "./RecipeDetails..module.scss";
import { useParams } from "react-router-dom";
import { recipesArr } from "../../TempData";
import { recipesStore } from "../../Store/_store";
import { currentRecipeStore } from "../../Store/_store";

export const RecipeDetails = ({ details }) => {
  const { currentRecipe, setCurrentRecipe } = currentRecipeStore();

  useEffect(() => {
    console.log("currentRecipe!! ", currentRecipe.instructions);
  }, [currentRecipe]);

  return (
    <>
      <h2 className={style["details-title"]}>{currentRecipe.name}</h2>
      <div className={style["details-container"]}>
        {/* <h1>ID: {coctailId}</h1> */}
        <div className={style["left-container"]}>
          <div className={style["img-container"]}>
            <img src={recipesArr[0].img} />
          </div>
        </div>
        <div className={style["right-container"]}>
          <section>
            <p>{currentRecipe.description}</p>
          </section>
        </div>

        {/* Ingrediants section */}
        <section className={style["ingrediants-container"]}>
          <h3>Ingradients</h3>
          <ul>
            {currentRecipe ? (
              currentRecipe.ingradients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })
            ) : (
              <h1>Wating</h1>
            )}
          </ul>

          {/* Instructions section */}
          <h3>Instructions</h3>
          <ul>
            {currentRecipe ? (
              currentRecipe.instructions.map((step) => {
                return <li>{step}</li>;
              })
            ) : (
              <h1>Wating</h1>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};

// export const RecipeDetails = () => {
//   const { id } = useParams();
//   const [coctailId, setCoctailId] = useState("");

//   const { currentRecipe, setCurrentRecipe } = recipesStore((state) => state);

//   // useEffect(() => {
//   //   id ? setCoctailId(id) : null;
//   // }, [id]);

//   useEffect(() => {
//     console.log("currentRecipe ", currentRecipe);
//   }, [currentRecipe]);

//   return (
//     <>
//       <h2 className={style["details-title"]}>Hamburger</h2>
//       <div className={style["details-container"]}>
//         {/* <h1>ID: {coctailId}</h1> */}
//         <div className={style["left-container"]}>
//           <div className={style["img-container"]}>
//             <img src={recipesArr[0].img} />
//           </div>
//         </div>
//         <div className={style["right-container"]}>
//           <section>
//             <p>
//               A home-made classic hamburger is a true taste sensation that's
//               hard to beat. With a juicy, flavorful beef patty, fresh toppings,
//               and a soft, toasted bun, every bite is a burst of deliciousness
//               that will leave you wanting more. The key to a tasty burger is
//               starting with high-quality ingredients. Fresh, locally-sourced
//               beef is essential for a juicy and flavorful patty. When seasoned
//               with just the right amount of salt and pepper, the natural flavors
//               of the beef shine through. The toppings are also important for
//               adding texture and flavor to the burger. Crisp lettuce, juicy
//               tomato slices, and thinly sliced onions all add freshness and
//               crunch. A slice of melted cheese takes the burger to the next
//               level, adding a creamy and savory element to each bite. And let's
//               not forget the bun. A soft, toasted bun holds everything together
//               and adds a subtle sweetness that complements the savory flavors of
//               the burger. The combination of all these elements creates a
//               perfect balance of flavors and textures that make a classic
//               hamburger truly delicious. What's great about a home-made burger
//               is that you can customize it to your liking. In the end, a
//               home-made classic hamburger is not just a meal, but an experience.
//             </p>
//           </section>
//         </div>

//         {/* Ingrediants section */}
//         <section className={style["ingrediants-container"]}>
//           <h3>Ingradients</h3>
//           <ul>
//             <li>High-quality ground beef (e.g. chuck or sirloin)</li>
//             <li>Salt and pepper for seasoning</li>
//             <li>Lettuce</li>
//             <li>Tomato slices</li>
//             <li>Soft, toasted bun (store-bought or homemade)</li>
//             <li>Condiments (e.g. ketchup, mustard, mayo) - optional</li>
//           </ul>

//           {/* Ingrediants section */}
//           <h3>Instructions</h3>
//           <ul>
//             <li>Preheat a grill or skillet over medium-high heat.</li>
//             <li>
//               Form the ground beef into patties, making them slightly larger
//               than the diameter of the bun. Season both sides of each patty with
//               salt and pepper.
//             </li>
//             <li>
//               Grill or cook the patties for 3-4 minutes per side, or until they
//               are cooked to your desired level of doneness.
//             </li>
//             <li>
//               Add a slice of cheese to each patty and continue cooking until the
//               cheese is melted.
//             </li>
//             <li>
//               While the patties are cooking, toast the buns until they are
//               lightly browned.
//             </li>
//             <li>
//               Assemble the burger by placing the patty on the bottom bun,
//               followed by lettuce, tomato, and onion. Add condiments if desired.
//             </li>
//             <li>Place the top bun on the burger and serve immediately.</li>
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };
