import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const removeItem = (nameToRemove, arr, updateState) => {
  for (let element of arr) {
    if (element === nameToRemove) {
      const updatedList = arr.filter((element) => element !== nameToRemove);
      updateState(updatedList);
    }
  }
};

export const addItem = (ref, add) => {
  if (ref.current.value !== "") {
    add(ref.current.value);
    ref.current.value = "";
    console.log("Gredient added");
  } else {
    console.log("No grediant to add");
  }
};

export const resetRecipe = (nameRef, descriptioneRef, resetIng, resetIns) => {
  nameRef.current.value = "";
  descriptioneRef.current.value = "";
  resetIng();
  resetIns();
};

// export const postRecipe = async (newRecipe) => {
//   console.log("post newRecipe ", newRecipe);
//   try {
//     axios
//       .post(`${BASE_URL}/recipes`, newRecipe)
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// };

export const postRecipe = async (newRecipe) => {
  const userId = localStorage.getItem("userId");
  try {
    axios
      .post(`${BASE_URL}/recipes/user-email/${userId}`, newRecipe)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
};

const patchRecipe = async (BASE_URL, id, recipe) => {
  axios
    .patch(`${BASE_URL}/recipes/${id}`, recipe)
    .then((response) => {
      console.log("response: ", response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const checkboxHandler = (e, arr, setTags) => {
  if (!arr.includes(e.target.value) && e.target.checked) {
    setTags([...arr, e.target.value]);
  }
  if (arr.includes(e.target.value) && e.target.checked === false) {
    const i = arr.indexOf(e.target.value);
    arr.splice(i, 1);
  }
  console.log("arr ", arr);
};

// export const getRecipe = async () => {
//   try {
//     axios
//       .patch(`${BASE_URL}/recipes/${recipeId}`)
//       .then(function (response) {
//         console.log("getRecipe: ", response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// };
