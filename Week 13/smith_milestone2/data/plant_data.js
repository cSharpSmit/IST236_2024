import PlantCategory from "../models/plantcategories";

// Category data with a name and type to define each,
// Additionally an image url used for the grid tiles,
// And the API parameter that is used for in the API call
export const PLANT_CATEGORIES = [
  new PlantCategory(
    1, // Id
    "Portugal Plants", // Name
    "Portugal Plants", // Type
    "distributions/por/plants?", // API Parameter, below is the image url
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large%2Fportuguese-flower-w-bolasini.jpg&f=1&nofb=1&ipt=7475032dbdcad86d8ecdf8cbf67e2dc9a5085995430307b5f8de37163b30e86f&ipo=images"
  ),
  new PlantCategory(
    2,  // Id
    "Angola Plants", // Name
    "Angola Plants", // Type
    "distributions/ang/plants?", // API Parameter, below is the image url
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.andersonexpeditions.com%2Fwp-content%2Fuploads%2F2019%2F01%2Flaunching-niassa-and-angola.jpg&f=1&nofb=1&ipt=3b2e696b146f072282f21089257eb16165159c501992ac5068726fd54553dcab&ipo=images"
  ),
  // new PlantCategory(
  //   2,  // Id
  //   "Yemen Plants", 
  //   "Yemen Plants", 
  //   "distributions/24/plants?", // It seems using the API distribution ID works as well, but it had duplicate results 
  //   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.andersonexpeditions.com%2Fwp-content%2Fuploads%2F2019%2F01%2Flaunching-niassa-and-angola.jpg&f=1&nofb=1&ipt=3b2e696b146f072282f21089257eb16165159c501992ac5068726fd54553dcab&ipo=images"
  // ),
  // new PlantCategory(
  //   ,
  //   "Tallest Trees",
  //   "Tallest Trees",
  //   "plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&",
  //   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FXlozuFcVl08ZgR0UNMBZ2kEPt8UVovry5bQVHTcRlb0.jpg%3Fauto%3Dwebp%26s%3D940caa481f7df563e5600ffd37b0e5c3b59ec756&f=1&nofb=1&ipt=6005147a95671be964efed0d9bc4d70923b5766e357b3ff855bbd211401a7c9c&ipo=images"
  // ),
  // new PlantCategory(
  //   ,
  //   "Succulents",
  //   "",
  //   "",
  //   ""
  // ),
  // new PlantCategory(
  //   ,
  //   "Cacti",
  //   "",
  //   "",
  //   "",
  // ),
];

// Exporting the array for use in the application
export default PLANT_CATEGORIES;
