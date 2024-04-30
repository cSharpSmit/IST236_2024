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
    2,  
    "Angola Plants", 
    "Angola Plants", 
    "distributions/ang/plants?", 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.andersonexpeditions.com%2Fwp-content%2Fuploads%2F2019%2F01%2Flaunching-niassa-and-angola.jpg&f=1&nofb=1&ipt=3b2e696b146f072282f21089257eb16165159c501992ac5068726fd54553dcab&ipo=images"
  ),
  new PlantCategory(
    3,  
    "South Carolina Plants", 
    "South Carolina Plants", 
    "distributions/sca/plants?", 
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3059441.jpg&f=1&nofb=1&ipt=439eb113b4a0bd715c634c6167eec4bd199414ee6616ca01dd75b6cea337fe20&ipo=images"
  ),
  new PlantCategory(
    4,
    "Christmas Island Plants",
    "Christmas Island Plants",
    "distributions/xms/plants?",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colbybrownphotography.com%2Fwp-content%2Fuploads%2F2015%2F05%2FLily-Beach-Cove-Christmas-Island.jpg&f=1&nofb=1&ipt=f749c0518fbc18fb8dbcbf0f4029728b53bfb70bc9ed46fcf7b6f17bc60df21c&ipo=images"
  ),
  new PlantCategory(
    5,
    "Japan Plants",
    "Japan Plants",
    "distributions/jap/plants?page=3&",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F43613.jpg&f=1&nofb=1&ipt=cdadf7fce16e5b458fd972548a4b938fc73ae27cd793edb1a9b3370acb1c7700&ipo=images"
  ),
];

// Exporting the array for use in the application
export default PLANT_CATEGORIES;
