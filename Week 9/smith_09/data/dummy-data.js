import Country from "../models/countries";
import VacationLocation from "../models/vacationlocations";

// Country Item data includes the country ID, name, color, and url for an image of their flag
export const COUNTRIES = [
  new Country(
    "c1",
    "Portugal",
    "#00875f",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fflagpedia.net%2Fdata%2Fflags%2Fultra%2Fpt.png&f=1&nofb=1&ipt=920cc7932dda0112da02a6755997fe410dfa3dc078e78cf87bc58f2ab79f467d&ipo=images"
  ), 
  new Country(
    "c2",
    "Ireland",
    "#009a49",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeimageslive.co.uk%2Ffiles%2Fimages009%2Firishflag.jpg&f=1&nofb=1&ipt=98a54e1cb4581122e140587363005f9b078106a4f7fae3661f26b13c501f3848&ipo=images"
  ), 
  new Country(
    "c3",
    "United Arab Emirates",
    "#d4af37",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4215855.jpg&f=1&nofb=1&ipt=5f0793ee53367366a75e7cb430f75f3adcd13abdb334a9ce3523636362809bb1&ipo=images"
  ), 
  new Country(
    "c4",
    "Spain",
    "#c60b1e",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F9%2F9a%2FFlag_of_Spain.svg%2F1200px-Flag_of_Spain.svg.png&f=1&nofb=1&ipt=768dcb580abe7690eff9b09ae7b7b099d129e8cfdfe6f2e2600a45ae3f08b183&ipo=images"
  ), 
  new Country(
    "c5",
    "Monaco",
    "#f2a0a1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F05%2FMonaco-Flag.png&f=1&nofb=1&ipt=bed596243e39bc67716d3a9789ebde30a5e0a39a745cead21f92a892e079c570&ipo=images"
  ), 
  new Country(
    "c6",
    "Belize",
    "#30d5c8",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4205201.jpg&f=1&nofb=1&ipt=59688a11ee6b8980d8506a448147312b36af0a5e8f37d57d42da81416e521426&ipo=images"
  ), 
  new Country(
    "c7",
    "Italy",
    "#808000",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F0%2F03%2FFlag_of_Italy.svg%2F1920px-Flag_of_Italy.svg.png&f=1&nofb=1&ipt=0e962c886374192717588fad407a6f316e36b991fd2ee3e82a6c70989f148ca1&ipo=images"
  ), 
  new Country(
    "c8",
    "Greece",
    "#357ec7",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.theflagman.co.uk%2Fwp-content%2Fuploads%2F2017%2F03%2Fflag-of-Greece.jpg&f=1&nofb=1&ipt=8b090bf747802f7e0bb938183faae0875cc29e4201104ca318f5eab57413ebb6&ipo=images"
  ), 
  new Country(
    "c9",
    "Mexico",
    "#e4007c",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F17%2FFlag_of_Mexico.png&f=1&nofb=1&ipt=0534b146d593334f5f2ab630e09c3631b116faea26277e9f2880ba7ced7aa9a6&ipo=images"
  ), 
  new Country(
    "c10",
    "Argentina",
    "#74acdf",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F250000%2Fvelka%2Fargentina-flag.jpg&f=1&nofb=1&ipt=148e916e0899d64d5e1282cfa3662fed79499b31a2f0792ef53f0bb4cad0c5d6&ipo=images"
  ), 
];

// Vacation Location Item data includes the vacation location ID, country ID, name, Average cost, year founded, rating, url for an image of the vacation location, and description
export const VACATIONLOCATIONS = [
  new VacationLocation(
    "v1",
    "c1",
    "Algarve",
    "$1,200",
    "1249",
    4.8,
    "https://images.ctfassets.net/i3kf1olze1gn/2AwHGCiI8m4C2AC00Y28xq/048deef19fa8f32537c4008418a4c19b/GettyImages-1278723304.jpg",
    "Known for its stunning beaches, scenic cliffs, and vibrant seaside towns."
  ),
  new VacationLocation(
    "v2",
    "c2",
    "Dublin",
    "$1,500",
    "841",
    4.3,
    "https://www.nationsonline.org/gallery/Ireland/Gratton-Bridge-Dublin.jpg",
    "Ireland's capital, rich in history, culture, and known for its lively pubs and friendly locals."
  ),
  new VacationLocation(
    "v3",
    "c3",
    "Dubai",
    "$2,500",
    "1833",
    5.0,
    "https://www.travelandleisure.com/thmb/k53-FUyx7Uyg1CzpuTuMSZXvY64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dubai-DUBAITG1123-17390625954c4be3902a440d8fffde67.jpg",
    "A futuristic city known for luxury shopping, ultramodern architecture, and a lively nightlife scene."
  ),
  new VacationLocation(
    "v4",
    "c4",
    "Barcelona",
    "$1,800",
    "1st century BC",
    3.8,
    "https://traveler.marriott.com/wp-content/uploads/2022/12/sunset-city-view-from-park-guell-barcelona-spain.jpg",
    "Famous for its unique architecture, fantastic beaches, and vibrant street life."
  ),
  new VacationLocation(
    "v5",
    "c5",
    "Monte Carlo",
    "$4,000",
    "1866",
    4.0,
    "https://imageio.forbes.com/specials-images/imageserve/64871cf1ba8550e41fd8baa2/Monaco-Monte-Carlo-sea-view/960x0.jpg?format=jpg&width=960",
    "Known for its upscale casinos, yacht-lined harbor, and prestigious Grand Prix motor race."
  ),
  new VacationLocation(
    "v6",
    "c6",
    "Ambergris Caye",
    "$1,300",
    "20th century",
    3.2,
    "https://www.anywhere.com/img-a/belize/destinations/ambergris-caye/ambergis-caye.jpg?w=760",
    "Belize's largest island, known for its water sports, scuba diving, and vibrant marine life."
  ),
  new VacationLocation(
    "v7",
    "c7",
    "Tuscany",
    "$2,000",
    "8th century BC",
    4.3,
    "https://a.cdn-hotels.com/gdcs/production106/d163/4b471f72-c206-4d80-bed3-bb0742fa389e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    "Renowned for its picturesque landscapes, rich history, art, and famous culinary tradition."
  ),
  new VacationLocation(
    "v8",
    "c8",
    "Santorini",
    "$2,200",
    "3600 years ago",
    4.9,
    "https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    "Famous for dramatic views, stunning sunsets, and its white, cubiform houses."
  ),
  new VacationLocation(
    "v9",
    "c9",
    "Cancun",
    "$1,400",
    "1970",
    3.9,
    "https://www.travelandleisure.com/thmb/PBJrUp0YamzwxQafTkfuCIAmR-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-nightlife-aerial-CANCUNMX0124-a071af4a61c5400f92db4875b234d24b.jpg",
    "Known for its beaches, numerous resorts, and nightlife."
  ),
  new VacationLocation(
    "v10",
    "c10",
    "Buenos Aires",
    "$1,000",
    "1536",
    3.7,
    "https://lp-cms-production.imgix.net/2021-09/La%20Boca%2C%20Buenos%20Aires%2C%20Argentina.jpg",
    "The cosmopolitan capital known for its vibrant culture, tango, steak, and historic sites."
  ),
  new VacationLocation(
    "v11",
    "c1",
    "Lisbon",
    "$1,500",
    "205 BC",
    4.3,
    "https://www.brunswickgroup.com/media/8384/lisbon.jpg",
    "Lisbon combines ancient heritage with modern vibrancy, known for its iconic trams and picturesque views."
  ),
  new VacationLocation(
    "v12",
    "c2",
    "Cork",
    "$1,300",
    1200,
    4.2,
    "https://assets3.thrillist.com/v1/image/3110788/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
    "A culinary and musical gem, Cork is the gateway to Ireland's scenic Wild Atlantic Way."
  ),
  new VacationLocation(
    "v13",
    "c3",
    "Abu Dhabi",
    "$2,400",
    "1761",
    5.0,
    "https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    "Abu Dhabi blends modernity with tradition, offering skyscrapers, beautiful mosques, and waterfronts."
  ),
  new VacationLocation(
    "v14",
    "c4",
    "Madrid",
    "$1,700",
    "9th century",
    4.3,
    "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg",
    "Spain's capital, rich in art, culture, and history, famous for its elegant streets and parks."
  ),
  new VacationLocation(
    "v15",
    "c5",
    "Monaco-Ville",
    "$3,800",
    "1215",
    4.7,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/da/e4/e6/20180721-115742-2-largejpg.jpg?w=600&h=400&s=1",
    "The historic heart of Monaco, known for its medieval architecture and panoramic Mediterranean views."
  ),
  new VacationLocation(
    "v16",
    "c6",
    "Caye Caulker",
    "$1,000",
    "AD 600",
    4.6,
    "https://www.btia.org/wp-content/uploads/2022/09/caye-caulker-banner.jpg",
    "A relaxed Caribbean island famous for its coral reefs, marine life."
  ),
  new VacationLocation(
    "v17",
    "c7",
    "Rome",
    "$2,100",
    "753 BC",
    4.8,
    "https://images.edrawmind.com/article/history-of-rome/800_530.jpg",
    "Home to ancient ruins, the Vatican, and unparalleled art, Rome is a living museum."
  ),
  new VacationLocation(
    "v18",
    "c8",
    "Athens",
    "$1,900",
    "3000 BC",
    4.9,
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-502036215-1561036618.jpg?resize=2048:*",
    "The cradle of Western civilization, Athens boasts historic landmarks like the Acropolis."
  ),
  new VacationLocation(
    "v19",
    "c9",
    "Mexico City",
    "$1,500",
    "1325",
    3.3,
    "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920",
    "A cultural hotspot with ancient heritage, vibrant streets, and rich culinary scenes."
  ),
  new VacationLocation(
    "v20",
    "c10",
    "Mendoza",
    "$1,100",
    "1561",
    3.5,
    "https://media.istockphoto.com/id/1283856800/photo/sunrise-in-water-reservoir-between-mountains.jpg?s=612x612&w=0&k=20&c=jFTPGKm0wpQeCgujhzYp4KaujuykDiOpfrxcxN4c6k0=",
    "The heart of Argentina's wine country, Mendoza is framed by the stunning Andes Mountains."
  ),
];
