export const removeItem = (nameToRemove, arr, remove) => {
  let temp;
  for (let element of arr) {
    if (element === nameToRemove) {
      temp = element;
      const updatedList = arr.filter((element) => element !== nameToRemove);
      remove(updatedList);
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
