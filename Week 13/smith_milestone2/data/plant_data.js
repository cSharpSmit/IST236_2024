import PlantCategory from "../models/plantcategories";

// Category data with a name and type to define each,
// Additionally an image url used for the grid tiles,
// And the API parameter that is used for in the API call
export const PLANT_CATEGORIES = [
  new PlantCategory(
    1,
    "Tallest Trees", // Name
    "Tallest Trees", // Type
    "plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&", // API Parameter, below is the image url
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FXlozuFcVl08ZgR0UNMBZ2kEPt8UVovry5bQVHTcRlb0.jpg%3Fauto%3Dwebp%26s%3D940caa481f7df563e5600ffd37b0e5c3b59ec756&f=1&nofb=1&ipt=6005147a95671be964efed0d9bc4d70923b5766e357b3ff855bbd211401a7c9c&ipo=images"
  ),
  // new PlantCategory(
  //   2,
  //   "Succulents",
  //   "Plants with parts that are thickened and fleshy, usually to retain water in arid climates or soil conditions.",
  //   "https://example.com/images/succulents.jpg"
  // ),
  // new PlantCategory(
  //   3,
  //   "Cacti",
  //   "Ancient group of plants with true roots, stems, and complex leaves and that reproduce by spores.",
  //   "https://example.com/images/ferns.jpg"
  // ),
];

// Exporting the array for use in the application
export default PLANT_CATEGORIES;
