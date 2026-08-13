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
    slug: "rockwall",
    name: "Rockwall",
    county: "Rockwall County",
    heroKicker: "Rockwall County · Our Home Base",
    metaTitle: "Wedding Hair & Makeup Rockwall, TX — No Travel Fee",
    metaDescription:
      "On-location bridal hair & makeup in Rockwall starting at $150. No travel fee — Elizabeth comes to The Castle, Parrish House, or your venue. Book your date today.",
    intro: [
      "Looking for on-location wedding hair and makeup in Rockwall, TX? Beauty on Demand is based right here. Elizabeth Nerbun brings the salon to you — your home, your hotel suite, or your venue's bridal room — so your wedding morning starts calmly, with the people you love, instead of in a salon chair across town.",
      "Rockwall is where Elizabeth lives and works, which means no long drive and no rushed arrival: she is set up and ready before the day gets away from you. Licensed since 2002 and a certified instructor since 2013, she builds every look around you — soft and romantic, sleek and modern, or effortlessly boho — and keeps your whole party on schedule from the first photo through the last dance.",
    ],
    venuesIntro:
      "Rockwall offers everything from a lakefront resort ballroom to a historic mansion downtown. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "The Castle at Rockwall",
        blurb:
          "A one-of-a-kind venue with more than 8,000 square feet of dramatic, castle-inspired architecture, hosting up to 350 guests — a striking setting that pairs beautifully with a bolder, more editorial bridal look.",
      },
      {
        name: "The Parrish House",
        blurb:
          "A charming historic mansion venue for up to 160 guests, full of warm woodwork and natural light — an ideal backdrop for soft, romantic hair and makeup.",
      },
      {
        name: "Hilton Dallas/Rockwall Lakefront",
        blurb:
          "Overlooking Lake Ray Hubbard, with an outdoor pergola for ceremonies and an elegant ballroom for the reception. Getting ready in your suite here makes for an unhurried, all-in-one wedding morning.",
      },
      {
        name: "Little Wren Weddings & Events",
        blurb:
          "Just over half a mile from historic downtown Rockwall, with both indoor and outdoor space — a favorite for couples who want something intimate close to home.",
      },
    ],
    travelNote:
      "Rockwall is home base, so there's no travel fee at all — you get the full on-location experience with none of the added cost.",
    nearbyTowns: ["Heath", "Fate", "Royse City", "Rowlett"],
  },
  {
    slug: "royse-city",
    name: "Royse City",
    county: "Rockwall County",
    heroKicker: "Rockwall County · Estate & Castle Country",
    metaTitle: "Wedding Hair & Makeup Royse City, TX — On-Location Service",
    metaDescription:
      "Bridal hair & makeup delivered to your Royse City venue — The Pearl at Sabine Creek, Castle Waterford & more. Starting at $150. Check availability today.",
    intro: [
      "Planning your day and looking for on-location wedding hair and makeup in Royse City, TX? Beauty on Demand travels to you. Just up I-30 from Rockwall, Royse City has quietly become one of the most interesting venue corners in the area — colonial mansions, an Irish-inspired castle, and classic country barns all within a few miles of each other.",
      "Elizabeth Nerbun arrives at whichever getting-ready spot suits your day and builds each look to match the setting — softer and more romantic for the estate venues, richer and more dramatic for the castle. Your bridal party stays coordinated and on time, and your look is made to hold through a full Texas day and evening.",
    ],
    venuesIntro:
      "Royse City packs a surprising range of venues into a small footprint. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "The Pearl at Sabine Creek",
        blurb:
          "A colonial-style mansion set on eight wooded acres — elegant, private, and made for soft, timeless bridal looks.",
      },
      {
        name: "Castle Waterford",
        blurb:
          "Eleven acres built around authentic Irish castle architecture, with stonework and dramatic interiors that carry a bolder, more romantic look beautifully.",
      },
      {
        name: "Country Charm Events",
        blurb:
          "A relaxed barn-and-outdoor venue built for intimate weddings of up to about 120 guests — a warm, unfussy setting for a natural bridal look.",
      },
    ],
    travelNote:
      "Royse City is about 15 minutes northeast of Rockwall on I-30 — comfortably in our core service area at a low, flat travel fee.",
    nearbyTowns: ["Fate", "Rockwall", "Caddo Mills", "Greenville"],
  },
  {
    slug: "forney",
    name: "Forney",
    county: "Kaufman County",
    heroKicker: "Kaufman County · Just South of Rockwall",
    metaTitle: "Wedding Hair & Makeup Forney, TX — We Come to You",
    metaDescription:
      "On-location bridal hair & makeup in Forney starting at $150. We travel to The Delanie Venue, The Ritz on Buffalo Creek & more. Get a custom quote.",
    intro: [
      "Looking for on-location wedding hair and makeup in Forney, TX? Beauty on Demand comes to you. A short drive south of Rockwall, Forney has grown into one of the most appealing wedding spots in Kaufman County — and Elizabeth Nerbun brings the full salon experience straight to your getting-ready suite.",
      "Forney's venues lean bright and light-filled, which is a gift for photographs and a real consideration for makeup. Elizabeth finishes each look to read beautifully in that kind of light rather than washing out in it, keeps your wedding party coordinated, and makes sure the morning stays calm and on schedule.",
    ],
    venuesIntro:
      "Forney's venues range from a glass-walled greenhouse to a family-run creekside facility. Elizabeth serves brides getting ready at:",
    venues: [
      {
        name: "The Delanie Venue",
        blurb:
          "A greenhouse-inspired venue whose glass reception hall seats up to 280 beneath floor-to-ceiling windows. It has two getting-ready suites — one fitted with proper beauty stations — which makes for an especially smooth on-location morning.",
      },
      {
        name: "The Ritz on Buffalo Creek",
        blurb:
          "A family owned and operated wedding and event facility about 20 miles east of Dallas, offering a warm, personal setting for ceremonies and receptions.",
      },
    ],
    travelNote:
      "Forney is roughly 20 minutes south of Rockwall, well inside our core service area with a flat travel fee based on distance.",
    nearbyTowns: ["Terrell", "Heath", "Rockwall", "Crandall"],
  },
  {
    slug: "heath",
    name: "Heath",
    county: "Rockwall County",
    heroKicker: "Rockwall County · On Lake Ray Hubbard",
    metaTitle: "Wedding Hair & Makeup Heath, TX — Lakeside Bridal Beauty",
    metaDescription:
      "On-location bridal hair & makeup in Heath, TX — minutes from Rockwall with minimal travel fee. Hidden Creek Events & more. Starting at $150. Book now.",
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
    metaTitle: "Wedding Hair & Makeup Quinlan, TX — White Sparrow Barn Artist",
    metaDescription:
      "Getting married at The White Sparrow Barn? On-location bridal hair & makeup starting at $150. Elizabeth comes to your suite so your morning stays relaxed. Book today.",
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
      "Quinlan is about 35 minutes southeast of Rockwall. Elizabeth is glad to travel for your White Sparrow wedding — a flat travel fee based on distance from Rockwall keeps the full cost clear from the start.",
    nearbyTowns: ["Greenville", "Caddo Mills", "West Tawakoni", "Lake Tawakoni"],
  },
  {
    slug: "terrell",
    name: "Terrell",
    county: "Kaufman County",
    heroKicker: "Kaufman County · Barn & Estate Country",
    metaTitle: "Wedding Hair & Makeup Terrell, TX — Barn & Estate Venues",
    metaDescription:
      "On-location bridal hair & makeup for Terrell barn weddings — HR Ranch, The Establishment, Chandelier Farms & more. From $150. Check date availability.",
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
      "Terrell is about 25 minutes south of Rockwall — comfortably within our core service area, with a flat travel fee based on distance from Rockwall.",
    nearbyTowns: ["Forney", "Kaufman", "Crandall", "Rockwall"],
  },
  {
    slug: "greenville",
    name: "Greenville",
    county: "Hunt County",
    heroKicker: "Hunt County · Along the I-30 Corridor",
    metaTitle: "Wedding Hair & Makeup Greenville, TX — Ranch & Barn Weddings",
    metaDescription:
      "On-location bridal hair & makeup in Greenville, TX. We travel to On The Rock, Under The Wildwood & more. Starting at $150 — get your custom quote.",
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
      "Greenville is about 30 minutes northeast of Rockwall via I-30. Elizabeth is happy to travel for your wedding, with a flat travel fee based on distance from Rockwall.",
    nearbyTowns: ["Caddo Mills", "Commerce", "Quinlan", "Campbell"],
  },
  {
    slug: "sulphur-springs",
    name: "Sulphur Springs",
    county: "Hopkins County",
    heroKicker: "Hopkins County · East Texas",
    metaTitle: "Wedding Hair & Makeup Sulphur Springs, TX — East Texas Weddings",
    metaDescription:
      "On-location bridal hair & makeup in Sulphur Springs — The Black Oak, Country Club & more. From $150 with flat travel fee. Book your East Texas wedding today.",
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
      "Sulphur Springs is about an hour east of Rockwall on I-30 — well within Elizabeth's travel range, with a flat travel fee based on distance from Rockwall so you always know the full cost.",
    nearbyTowns: ["Como", "Cumby", "Winnsboro", "Mount Vernon"],
  },
  {
    slug: "princeton",
    name: "Princeton",
    county: "Collin County",
    heroKicker: "Collin County · Near Lake Lavon & McKinney",
    metaTitle: "Wedding Hair & Makeup Princeton, TX — Magnolia Creek & Lake Lavon",
    metaDescription:
      "Princeton bride? On-location hair & makeup starting at $150 — we come to Magnolia Creek Ranch, Bethsaida Ranch & your venue. Licensed since 2002. Book your date.",
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
      "Princeton is about 40 minutes north of Rockwall. Elizabeth happily travels throughout Collin County, with a flat travel fee based on distance from Rockwall.",
    nearbyTowns: ["McKinney", "Farmersville", "Wylie", "Lavon"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const citySlugs = cities.map((c) => c.slug);

/** Map a town display name (e.g. "Royse City") to its city-page slug, if one exists. */
const townToSlug = new Map(cities.map((c) => [c.name, c.slug]));

export function getTownSlug(townName: string): string | undefined {
  return townToSlug.get(townName);
}
