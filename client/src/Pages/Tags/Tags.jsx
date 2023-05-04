import axios from "axios";

export const Tags = () => {
  const { recipes, setRecipes } = recipesStore();

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `http://localhost:8080/api/v1/recipes/tag/${currentTag}`,
  //   }).then((data) => setRecipes(data.data.recipes));
  // }, []);

  return <div>Tags</div>;
};
