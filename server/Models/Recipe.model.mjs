import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a recipe name"],
    trim: true,
    maxlength: [20, "name cant be more than 20 characters"],
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Must provide a recipe details"],
    trim: true,
    // maxlength: [1000, "description cant be more than 1000 characters"],
  },
  prepTime: {
    type: Number,
    required: false,
    trim: true,
    maxlength: [22, "preperation time cant be more than 5 characters"],
  },
  cookTime: {
    type: Number,
    required: false,
    trim: true,
    maxlength: [22, "cook time cant be more than 5 characters"],
  },
  tags: {
    type: [{ type: String }],
    required: [true, "Must provide at list one tag"],
    trim: true,
  },
  ingredients: {
    type: [{ type: String }],
    required: [true, "Must provide at list one ingrediant"],
    trim: true,
  },
  instructions: {
    type: [{ type: String }],
    required: [true, "Must provide at list one instruction"],
    trim: true,
  },
  image: {
    type: String,
    // required: [true, "Must provide an image"],
  },
});

export const Recipe = mongoose.model("Recipe", RecipeSchema);

// {
//     "name": "Shakshuka",
//     "description": "A home-made classic hamburger is a true taste sensation that's hard to beat. With a juicy, flavorful beef patty, fresh toppings, and a soft, toasted bun, every bite is a burst of deliciousness that will leave you wanting more. The key to a tasty burger is starting with high-quality ingredients. Fresh, locally-sourced beef is essential for a juicy and flavorful patty. When seasoned with just the right amount of salt and pepper, the natural flavors of the beef shine through. The toppings are also important for adding texture and flavor to the burger. Crisp lettuce, juicy tomato slices, and thinly sliced onions all add freshness and crunch. A slice of melted cheese takes the burger to the next level, adding a creamy and savory element to each bite. And let's not forget the bun. A soft, toasted bun holds everything together and adds a subtle sweetness that complements the savory flavors of the burger. The combination of all these elements creates a perfect balance of flavors and textures that make a classic hamburger truly delicious. What's great about a home-made burger is that you can customize it to your liking. In the end, a home-made classic hamburger is not just a meal, but an experience.",
//     "prepTime": 27,
//     "cookTime": 35,
//     "tags": ["beef", "dinner"],
//     "ingradients": ["High-quality ground beef (e.g. chuck or sirloin)", "Salt and pepper for seasoning", "Lettuce", "Tomato slices", "Soft, toasted bun (store-bought or homemade)", "Condiments (e.g. ketchup, mustard, mayo) - optional"],
//     "instructions": ["Preheat a grill or skillet over medium-high heat.", "Form the ground beef into patties, making them slightly larger than the diameter of the bun. Season both sides of each patty with salt and pepper.", "Grill or cook the patties for 3-4 minutes per side, or until they are cooked to your desired level of doneness." , "Add a slice of cheese to each patty and continue cooking until the cheese is melted.", "While the patties are cooking, toast the buns until they are lightly browned.", "Assemble the burger by placing the patty on the bottom bun, followed by lettuce, tomato, and onion. Add condiments if desired.", "Place the top bun on the burger and serve immediately."]
// }
