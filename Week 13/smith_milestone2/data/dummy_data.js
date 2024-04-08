import News from "../models/news";

// local static news data used throughout the app
export const NEWS = [
  new News(
    1,
    "USNews",
    "Nvidia's New AI Chip to Be Priced at Over $30,000",
    "March 19, 2024",
    "Arsheeya Bajwa",
    "CNBC",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2022%2F11%2FNVIDIA-RTX-4000-Series-Mobility-GPUs-Feature-Image.jpg&f=1&nofb=1&ipt=35822b9c7103ef2e3e1c3f45bc3adf2219dcb9f4fff9504018baaf8c025849a0&ipo=images",
    "Chip designer Nvidia's latest Blackwell B200 artificial intelligence chip will cost between $30,000 and $40,000, CEO Jensen Huang told CNBC on Tuesday."
  ),
  new News(
    2,
    "USNews",
    "After years of ransomware attacks, health-care defenses still fail",
    "March 19, 2024",
    "Joseph Menn",
    "The Washington Post",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1k9K9x.img?w=768&h=513&m=6",
    "Federal officials and industry executives have known for years that the U.S. health-care system was one of the critical industries most vulnerable to hacking but failed to make the improvements that might have stopped attacks like the one that has crippled pharmacists and other medical providers for three weeks."
  ),
  new News(
    3,
    "USNews",
    "Voyager 1 is 15 billion miles from home and broken. Here's how NASA is trying to fix it",
    "March 19, 2024",
    "George Petras",
    "USA TODAY",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/18/USAT/73020721007-promovoyager-001.jpg?crop=3555,1250,x122,y374&width=1920&height=675&format=pjpg&auto=webp&quality=60",
    "A scrambled computer signal may be the key that helps NASA engineers resume data transmission from the distant Voyager 1, a spacecraft that was launched in 1977 and now, 15 billion miles from home, is the farthest a human-made object has traveled from Earth."
  ),
  new News(
    4,
    "USNews",
    "SpaceX comes close to completing test flight but loses spacecraft near end",
    "March 14, 2024",
    "Marcia Dunn",
    "AP News",
    "https://dims.apnews.com/dims4/default/eb0c692/2147483647/strip/true/crop/6000x3998+0+1/resize/800x533!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fef%2F86%2Fbc48f38512a4d68c2c1a73b48100%2Ff02b35e7324445b1bb313c6f3251e06d",
    "SpaceX came close to completing an hour long test flight of its mega rocket on its third try Thursday, but the spacecraft was lost as it descended back to Earth."
  ),
  new News(
    5,
    "USNews",
    "US officials to brief senators Wednesday on threats posed by TikTok, aide says",
    "March 18, 2024",
    "David Shepardson",
    "Reuters",
    "https://www.reuters.com/resizer/v2/RH65VKRAGZJQJGRDHD3U6MOF64.jpg?auth=f2433fe4d2c8c446334840b03df472f20b15d6e3ec130cc70fe94ff049e97848&width=960&quality=80",
    "U.S. national security officials will hold a closed-door briefing on Wednesday for senators on the Commerce and Intelligence committees on threats posed by Chinese-owned short video app TikTok, a committee aide told Reuters on Monday."
  ),
  new News(
    6,
    "WorldNews",
    "Hong Kong passes tough security law fought by protesters for years",
    "March 19, 2024",
    "Kelly Ng",
    "BBC Chinese",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1576B/production/_132951978_4cc65c7f00a989d609193b5136cd7599039f4e440_0_4368_29121000x667.jpg.webp",
    "Hong Kong has passed a tough security law which authorities say is necessary for stability, but which critics fear will further erode civil liberties."
  ),
  new News(
    7,
    "WorldNews",
    "'Only God can change this place': Haitians see no end to spiralling violence",
    "March 18, 2024",
    "Will Grant",
    "BBC News",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/DCFF/production/_132957565_port-au-prince.jpg.webp",
    "Residents of Petionville, a wealthier area of of the city, are shaken after their most violent day so far in the country's spiralling security crisis."
  ),
  new News(
    8,
    "WorldNews",
    "Ukraine war: Thousands of children to be evacuated from Belgorod after strikes",
    "March 19, 2024",
    "Emily Atkinson",
    "BBC News",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7F68/production/_132961623_b6a838e40afce5cc57b854d9e4c24ae87d5dff630_9_5415_30461000x563.jpg.webp",
    "Belgorod governor Vyacheslav Gladkov said three people, including a child, were injured in the latest attacks, while part of the region - which borders Ukraine - was without power."
  ),
  new News(
    9,
    "WorldNews",
    "Irish policeman charged with false imprisonment",
    "March 19, 2024",
    "Aoife Moore",
    "BBC News",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/cb8b/live/4847bac0-e5f6-11ee-aa59-41b5da6b18dc.jpg.webp",
    "A garda (Irish police) sergeant has been charged with the false imprisonment of a woman, perverting the course of justice and burglary."
  ),
  new News(
    10,
    "WorldNews",
    "South Sudan heatwave: Extreme weather shuts schools and cuts power",
    "March 18, 2024",
    "Nichola Mandil",
    "BBC News",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/AE6F/production/_132955644_gettyimages-148966739.jpg.webp",
    "All schools have been ordered to close in South Sudan, as it prepares for a heatwave in which temperatures could reach an exceptional 45C (113F)."
  ),
  new News(
    11,
    "MMANews",
    "Mark Coleman released from hospital, back in the gym as recovery from house fire continues",
    "March 18, 2024",
    "Damon Martin",
    "MMA Fighting",
    "https://cdn.vox-cdn.com/thumbor/KQLNinQjCP0f-UlVU1P9J_W1-1g=/0x0:1290x1085/920x613/filters:focal(542x440:748x646):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73215646/IMG_2864.0.jpg",
    "UFC legend Mark Coleman has not only been released from the hospital, but he wasted no time returning to the gym following a tragic house fire that nearly cost him his life."
  ),
  new News(
    12,
    "MMANews",
    "Jose Aldo returns from retirement to face Jonathan Martinez at UFC 301 in Brazil",
    "March 17, 2024",
    "Damon Martin",
    "MMA Fighting",
    "https://cdn.vox-cdn.com/thumbor/bDoPPqDwmumkGJFfy5FKVUQdQmM=/0x0:5259x3506/920x613/filters:focal(2729x635:3569x1475):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73213275/1416150707.0.jpg",
    "Jose Aldo will end his nearly two-year retirement to make his return at UFC 301 when he faces Jonathan Martinez in a bantamweight bout on May 4 in Rio de Janeiro, Brazil."
  ),
  new News(
    13,
    "MMANews",
    "Daniel Cormier says Islam Makhachev is more dangerous than Khabib Nurmagomedov was during his prime",
    "March 18, 2024",
    "Drake Riggs",
    "MMA Fighting",
    "https://cdn.vox-cdn.com/thumbor/22Z_gVxSJRexZaU9EpcqFUC2h60=/0x0:2485x1683/920x613/filters:focal(1078x493:1474x889):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73214757/1052227532.0.jpg",
    "Although the current UFC lightweight champion Makhachev is still in the midst of his reign over the division, he's arguably already alongside his mentor and longtime teammate Nurmagomedov in the conversation as two 155-pound all-time greats. The latter of which is considered by many as the very best ever to do it, and for some, that's across any weight class."
  ),
  new News(
    14,
    "MMANews",
    "UFC 300 trailer released featuring Alex Pereira, Jamahal Hill, and the rest of the loaded fight card",
    "March 12, 2024",
    "Jed Meshew",
    "MMA Fighting",
    "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_sm/s3/2023-11/111523-hero-where-we-stand-lhw-alex-pereira_GettyImages-1788663456.jpg?h=d1cb525d&itok=J7fFpTz1",
    "On April 13, UFC 300 takes place in Las Vegas, headlined by a light heavyweight title fight between Alex Pereira and Jamahal Hill, and featuring a truly ludicrous lineup of matchups. And in the official trailer for this upcoming event, the UFC leaned into that, showcasing not just the main and co-main event fighters, but also featuring a number of the other former champions that make up the fight card."
  ),
  new News(
    15,
    "MMANews",
    "Robert Whittaker wants Sean Strickland in Perth this summer: That would be the bee's knees",
    "February 29, 2024",
    "Jed Meshew",
    "MMA Fighting",
    "https://cdn.vox-cdn.com/thumbor/oMKjN6bpyP0dmw_m9LgUceuWiUQ=/0x0:4947x3298/920x613/filters:focal(1391x257:2181x1047):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73173531/2019351717.0.jpg",
    "At UFC 298, Whittaker got back in the win column with a hard-fought unanimous decision win over Paulo Costa. The win is Whittaker's first since getting stopped by Dricus du Plessis at UFC 290, and the man affectionately dubbed “Bobby Knuckles” by fans was pleased with his ability to rebound from one of the more deflating performances of his career."
  ),
];