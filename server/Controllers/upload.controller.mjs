import { StatusCodes } from "http-status-codes";
import path from "path";
import { fileURLToPath } from "url";
import { BadRequestError } from "../errors/bad-request.mjs";

export const uploadRecipeImage = async (req, res) => {
  // If no file
  if (!req.files) {
    throw new BadRequestError("Must provide an image");
  }

  console.log("req: ", req.files);
  const recipeImage = req.files.image;
  console.log("recipeImage: ", recipeImage);

  // if file not image
  //   if (!recipeImage.mimetype.startsWith("image")) {
  //     throw new BadRequestError("The file is not an image");
  //   }
  //If image size bigger then...
  //   const maxSize = 5000;
  //   if (req.file.image > 5000) {
  //     throw new BadRequestError(`File is bigger then ${maxSize}`);
  //   }

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${recipeImage.name}`
  );
  await recipeImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `uploads/${recipeImage.name}` } });
};
