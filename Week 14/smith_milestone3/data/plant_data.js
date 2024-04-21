import PlantCategory from "../models/plantcategories";

// TODO: Add more categories
// Figure out which work don't then 
// Figure out how you are going to make
// them work.

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
  new PlantCategory(
    3,  // Id
    "South Carolina Plants", 
    "South Carolina Plants", 
    "distributions/sca/plants?", // It seems using the API distribution ID works as well, but it had duplicate results 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3059441.jpg&f=1&nofb=1&ipt=439eb113b4a0bd715c634c6167eec4bd199414ee6616ca01dd75b6cea337fe20&ipo=images"
  ),
  new PlantCategory(
    5,
    "Christmas Island Plants",
    "Christmas Island Plants",
    "distributions/xms/plants?",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colbybrownphotography.com%2Fwp-content%2Fuploads%2F2015%2F05%2FLily-Beach-Cove-Christmas-Island.jpg&f=1&nofb=1&ipt=f749c0518fbc18fb8dbcbf0f4029728b53bfb70bc9ed46fcf7b6f17bc60df21c&ipo=images"
  ),
  new PlantCategory(
    6,
    "Japan Plants",
    "Japan Plants",
    "distributions/jap/plants?page=3&",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colbybrownphotography.com%2Fwp-content%2Fuploads%2F2015%2F05%2FLily-Beach-Cove-Christmas-Island.jpg&f=1&nofb=1&ipt=f749c0518fbc18fb8dbcbf0f4029728b53bfb70bc9ed46fcf7b6f17bc60df21c&ipo=images"
  ),
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
