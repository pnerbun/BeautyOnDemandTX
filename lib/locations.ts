export interface Venue {
  name: string;
  blurb: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  /** Short kicker shown above the H1, e.g. "Rockwall County" */
  heroKicker: string;
  /** Plain title — the layout template appends " | Beauty on Demand" */
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraphs. The first must contain the primary keyword early. */
  intro: string[];
  venuesIntro: string;
  venues: Venue[];
  travelNote: string;
  nearbyTowns: string[];
}

export const cities: City[] = [
  {
    slug: "heath",
    name: "Heath",
    county: "Rockwall County",
    heroKicker: "Rockwall County · On Lake Ray Hubbard",
    metaTitle: "Wedding Hair & Makeup Heath, TX",
    metaDescription:
      "On-location wedding hair and makeup in Heath, TX. Elizabeth Nerbun comes to your home, hotel, or lakeside venue like Hidden Creek Events for a flawless day.",
    intro: [
      "Looking for on-location wedding hair and makeup in Heath, TX? Beauty on Demand brings the salon to you. Elizabeth Nerbun arrives at your home, hotel, or wedding venue so you can get ready surrounded by the people you love — no salon chair, no rushing across town on your wedding morning. Heath sits just minutes from our Rockwall home base, which makes for an easy, unhurried start to one of the prettiest lakeside settings in the DFW area.",
      "Whether you're planning an intimate lake-house ceremony or a full wedding-party celebration, Elizabeth builds every look around you — romantic and soft, sleek and modern, or effortlessly boho. Licensed since 2002 and a certified instructor since 2013, she has the experience to keep your morning calm and on schedule, and your look photo-ready from the first photo to the last dance.",
    ],
    venuesIntro:
      "Heath and the Lake Ray Hubbard shoreline are home to some of the most sought-after wedding settings east of Dallas. Elizabeth regularly serves brides getting ready for ceremonies at:",
    venues: [
      {
        name: "Hidden Creek Events",
        blurb:
          "Tucked into the woods of Heath, this all-inclusive venue pairs a vintage-style barn with a tree-lined ceremony path and open-air gazebo, hosting up to 300 guests. Its two onsite dressing suites are an ideal getting-ready spot for on-location hair and makeup.",
      },
    ],
    travelNote:
      "Because Heath is right next door to Rockwall, you get our full on-location service with minimal travel — leaving more of your budget for the day itself.",
    nearbyTowns: ["Rockwall", "McLendon-Chisholm", "Sunnyvale", "Forney"],
  },
  {
    slug: "quinlan",
    name: "Quinlan",
    county: "Hunt County",
    heroKicker: "Hunt County · Home of The White Sparrow",
    metaTitle: "Wedding Hair & Makeup Quinlan, TX",
    metaDescription:
      "On-location wedding hair and makeup in Quinlan, TX. Elizabeth Nerbun travels to The White Sparrow Barn so your bridal look is ready before the first photo.",
    intro: [
      "Searching for on-location wedding hair and makeup in Quinlan, TX? Beauty on Demand comes to you. Quinlan draws couples from all over the country thanks to The White Sparrow Barn, and Elizabeth Nerbun makes the morning effortless by arriving wherever you're getting ready — the bridal suite, your rental, or a nearby hotel — so you never have to leave your wedding party behind.",
      "Destination weddings deserve a destination experience. Elizabeth tailors each look to photograph beautifully under the barn's airy, whitewashed light, and keeps your whole party coordinated and on schedule. From a soft romantic glow to a bold, editorial finish, your look is built to last from the ceremony through the final sparkler send-off.",
    ],
    venuesIntro:
      "Quinlan punches well above its size as a wedding destination, anchored by one of the most photographed barns in Texas. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "The White Sparrow Barn",
        blurb:
          "A nationally known, family-owned venue set in an open field of towering oaks. Its whitewashed interiors, soaring vaulted ceilings, and dressing suites make it a dream backdrop — and a perfect getting-ready spot for on-location bridal hair and makeup, hosting up to 200 guests.",
      },
    ],
    travelNote:
      "Quinlan is about 35 minutes southeast of Rockwall. Elizabeth is glad to travel for your White Sparrow wedding — a travel fee based on distance is quoted up front at booking, so there are never any surprises.",
    nearbyTowns: ["Greenville", "Caddo Mills", "West Tawakoni", "Lake Tawakoni"],
  },
  {
    slug: "terrell",
    name: "Terrell",
    county: "Kaufman County",
    heroKicker: "Kaufman County · Barn & Estate Country",
    metaTitle: "Wedding Hair & Makeup Terrell, TX",
    metaDescription:
      "On-location wedding hair and makeup in Terrell, TX. Elizabeth Nerbun travels to barn and estate venues like HR Ranch, The Establishment, and Chandelier Farms.",
    intro: [
      "Need on-location wedding hair and makeup in Terrell, TX? Beauty on Demand delivers salon-quality bridal beauty right to your venue. Terrell and the surrounding Kaufman County countryside have become one of the fastest-growing wedding corridors east of Dallas, and Elizabeth Nerbun comes to you — so you can spend your morning relaxing with your bridesmaids instead of driving to an appointment.",
      "With looks designed around your vision and the warm Texas light these barn and estate venues are known for, Elizabeth keeps your wedding party coordinated, camera-ready, and right on time. Whether your style leans rustic-romantic or polished and modern, every detail is built to hold up through a full day of celebrating.",
    ],
    venuesIntro:
      "Terrell is home to a standout cluster of barn and estate venues. Elizabeth regularly serves brides getting ready at:",
    venues: [
      {
        name: "HR Ranch",
        blurb:
          "One of the newest and most popular outdoor venues in the area, with a barn structure and water on the property for a relaxed, picturesque Texas-ranch setting.",
      },
      {
        name: "The Establishment Barn",
        blurb:
          "Set in the Able Springs community, this newly built 7,500-square-foot barn blends an aged farmhouse feel with modern amenities, 1800s leaded glass, and hand-crafted doors.",
      },
      {
        name: "Chandelier Farms",
        blurb:
          "A luxury East Texas estate influenced by European craftsmanship — an elevated 'barn-luxe' setting for couples who want something truly refined.",
      },
    ],
    travelNote:
      "Terrell is about 25 minutes south of Rockwall — comfortably within our core service area. A modest travel fee based on your venue's distance is quoted up front at booking.",
    nearbyTowns: ["Forney", "Kaufman", "Crandall", "Rockwall"],
  },
  {
    slug: "greenville",
    name: "Greenville",
    county: "Hunt County",
    heroKicker: "Hunt County · Along the I-30 Corridor",
    metaTitle: "Wedding Hair & Makeup Greenville, TX",
    metaDescription:
      "On-location wedding hair and makeup in Greenville, TX. Elizabeth Nerbun travels to ranch and barn venues like On The Rock and Under The Wildwood for your day.",
    intro: [
      "Planning your wedding day and searching for on-location hair and makeup in Greenville, TX? Beauty on Demand comes to you. A short drive northeast of Rockwall along I-30, Greenville is surrounded by working ranches and rustic barn venues that make for unforgettable country weddings — and Elizabeth Nerbun brings the full salon experience right to your getting-ready suite.",
      "Elizabeth designs each look to suit you and the golden, wide-open light these ranch venues are famous for, keeping your bridal party coordinated and your morning running smoothly. Romantic, natural, bold, or boho — your look is crafted to stay flawless from the first photo through the last dance.",
    ],
    venuesIntro:
      "Greenville and the surrounding Hunt County countryside offer a wealth of ranch and barn venues. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "On The Rock Wedding Barn",
        blurb:
          "Set on a 7-acre working cattle ranch (Retazo Ranch), this transformed barn-chapel features a dreamy pond, bonfire, and indoor and outdoor reception space for up to 200 guests.",
      },
      {
        name: "Under The Wildwood",
        blurb:
          "A spacious indoor-and-outdoor venue for up to 250 guests, with a large covered patio, bridal and groom suites, and a catering kitchen.",
      },
      {
        name: "Davis & Grey Farms",
        blurb:
          "A popular farm setting among Greenville-area couples for romantic, rustic outdoor ceremonies and receptions.",
      },
    ],
    travelNote:
      "Greenville is about 30 minutes northeast of Rockwall via I-30. Elizabeth is happy to travel for your wedding — a travel fee based on distance is quoted up front at booking.",
    nearbyTowns: ["Caddo Mills", "Commerce", "Quinlan", "Campbell"],
  },
  {
    slug: "sulphur-springs",
    name: "Sulphur Springs",
    county: "Hopkins County",
    heroKicker: "Hopkins County · East Texas",
    metaTitle: "Wedding Hair & Makeup Sulphur Springs, TX",
    metaDescription:
      "On-location wedding hair and makeup in Sulphur Springs, TX. Elizabeth Nerbun travels to venues like The Black Oak and Sulphur Springs Country Club for your day.",
    intro: [
      "Looking for on-location wedding hair and makeup in Sulphur Springs, TX? Beauty on Demand travels to you. Set in the rolling dairy country of Hopkins County, Sulphur Springs offers a beautiful East Texas backdrop for weddings — and Elizabeth Nerbun makes your morning easy by bringing the salon to your getting-ready location, wherever that may be.",
      "Elizabeth tailors every look to you and keeps your wedding party coordinated and on schedule, so your day feels calm from the very first photo. Whether your style is soft and romantic or polished and modern, your hair and makeup are built to last through a full day and evening of celebrating.",
    ],
    venuesIntro:
      "Sulphur Springs offers a range of venues from rustic-elegant barns to a classic country club. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "The Black Oak",
        blurb:
          "The area's premier wedding venue, just minutes from Interstate 30, blending rustic warmth with elegant, polished details.",
      },
      {
        name: "Sulphur Springs Country Club",
        blurb:
          "A modern ballroom with a hint of rustic charm, surrounded by a championship golf course and lakes, with an outdoor deck for dancing.",
      },
      {
        name: "Hopkins County Regional Civic Center",
        blurb:
          "The largest venue in the area, with flexible indoor and outdoor space able to host weddings of nearly any size.",
      },
      {
        name: "The Oaks Bed & Breakfast",
        blurb:
          "A charming choice for intimate weddings, with a Secret Garden ceremony space and indoor-outdoor reception areas.",
      },
    ],
    travelNote:
      "Sulphur Springs is about an hour east of Rockwall on I-30 — well within Elizabeth's travel range. A travel fee based on distance is added at booking and quoted up front, so you always know the full cost.",
    nearbyTowns: ["Como", "Cumby", "Winnsboro", "Mount Vernon"],
  },
  {
    slug: "princeton",
    name: "Princeton",
    county: "Collin County",
    heroKicker: "Collin County · Near Lake Lavon & McKinney",
    metaTitle: "Wedding Hair & Makeup Princeton, TX",
    metaDescription:
      "On-location wedding hair and makeup in Princeton, TX. Elizabeth Nerbun travels to venues like Magnolia Creek Ranch and Bethsaida Ranch for your wedding day.",
    intro: [
      "Searching for on-location wedding hair and makeup in Princeton, TX? Beauty on Demand brings the salon to you. Just north of Rockwall near Lake Lavon and historic McKinney, Princeton sits in one of the fastest-growing corners of Collin County, surrounded by intimate ranch and farm venues — and Elizabeth Nerbun arrives wherever you're getting ready so your morning stays calm and unhurried.",
      "Elizabeth designs each look around your vision and keeps your whole party coordinated and camera-ready, right on your wedding-morning timeline. From a soft, natural glow to a bolder editorial finish, your hair and makeup are crafted to photograph beautifully and hold up all day and night.",
    ],
    venuesIntro:
      "Princeton and the surrounding Lake Lavon area are dotted with charming ranch and farm venues. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "Magnolia Creek Ranch",
        blurb:
          "Twelve private acres just 15 minutes east of McKinney, with an indoor-outdoor setup ideal for small to mid-size weddings of up to 130 guests.",
      },
      {
        name: "Bethsaida Ranch",
        blurb:
          "A rustic barn venue on the east side of Lake Lavon in nearby Farmersville, set among rolling hills and gorgeous sunsets.",
      },
    ],
    travelNote:
      "Princeton is about 40 minutes north of Rockwall. Elizabeth happily travels throughout Collin County — a travel fee based on distance is quoted up front at booking.",
    nearbyTowns: ["McKinney", "Farmersville", "Wylie", "Lavon"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const citySlugs = cities.map((c) => c.slug);
