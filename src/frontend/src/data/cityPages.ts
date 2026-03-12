export type CityPage = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  intro: string;
  services: string[];
  testimonial: { quote: string; name: string; location: string };
  faqs: { q: string; a: string }[];
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "noida",
    name: "Noida",
    region: "Uttar Pradesh",
    tagline:
      "Expert Vastu Consultant in Noida for Home, Office & Industrial Properties",
    intro:
      "Charru Gupta brings 7+ years of Vastu expertise to Noida's vibrant residential and commercial landscape. From the bustling sectors of Sector 75, Sector 137, and Noida Extension to luxury high-rises along the Expressway, she has guided 200+ Noida families and businesses toward harmony and prosperity. As a Noida-based Vastu expert, Charru combines traditional Vastu Shastra principles with practical, no-demolition remedies suited to modern apartments and offices.",
    services: [
      "Residential Vastu for apartments, builder floors & independent homes",
      "Commercial & office Vastu for businesses in Noida sectors",
      "Industrial Vastu for factories and warehouses in Noida",
      "New property selection and directional analysis",
    ],
    testimonial: {
      quote:
        "After Charru ji's Vastu consultation for our Sector 75 flat, we noticed a positive shift in family harmony and my business income improved within 45 days. Highly recommended for anyone in Noida.",
      name: "Rajesh Sharma",
      location: "Sector 75, Noida",
    },
    faqs: [
      {
        q: "Who is the best Vastu consultant in Noida?",
        a: "Charru Gupta of SimplyVastuShastra is widely regarded as a top Vastu consultant in Noida, with 7+ years of experience, 1000+ successful consultations, and a proven no-demolition approach that respects modern apartment living.",
      },
      {
        q: "Does Charru Gupta visit Noida for in-person Vastu consultation?",
        a: "Yes. Charru provides in-person site visits across all major Noida sectors — Sector 18, 44, 75, 93, 137, Noida Extension, and Expressway areas. Online consultations are also available for clients who prefer remote assessments.",
      },
      {
        q: "How much does a Vastu consultation in Noida cost?",
        a: "Consultation fees vary based on property type (residential, commercial, industrial) and the scope of work. Contact us via WhatsApp or the enquiry form to get a personalised quote for your Noida property.",
      },
      {
        q: "Can Vastu remedies be applied to rented flats in Noida?",
        a: "Absolutely. Most of Charru's no-demolition remedies — including colour therapy, mirror placement, crystal placement, and elemental balancing — can be applied without any structural changes, making them perfect for rented or builder flats in Noida.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi NCR",
    tagline:
      "Trusted Vastu Consultant in Delhi for Homes, Offices & Commercial Spaces",
    intro:
      "Delhi's diverse architectural fabric — from South Delhi's bungalows to East Delhi's apartments and Dwarka's high-rises — presents unique Vastu challenges that demand a seasoned expert. Charru Gupta has worked across all Delhi zones, delivering personalised Vastu solutions for families, professionals, and entrepreneurs. Her approach harmonises ancient Vastu wisdom with Delhi's fast-paced urban lifestyle, creating spaces that radiate positive energy and support growth.",
    services: [
      "Vastu for South Delhi, North Delhi, East Delhi & West Delhi homes",
      "Office and showroom Vastu for Delhi commercial properties",
      "Vastu consultation for Delhi government housing & DDA flats",
      "Pre-purchase Vastu analysis for Delhi properties",
    ],
    testimonial: {
      quote:
        "We moved into our South Delhi home two years ago with persistent problems — constant arguments, health issues, financial stress. After Charru ji's Vastu corrections, the atmosphere changed completely within a month.",
      name: "Priya Malhotra",
      location: "South Delhi",
    },
    faqs: [
      {
        q: "What areas of Delhi does Charru Gupta serve?",
        a: "Charru serves all of Delhi including South Delhi, North Delhi, East Delhi, West Delhi, Dwarka, Rohini, Pitampura, Lajpat Nagar, Greater Kailash, Vasant Kunj, Janakpuri, Mayur Vihar, and all other Delhi localities.",
      },
      {
        q: "Is Vastu consultation available for DDA flats in Delhi?",
        a: "Yes. Charru has extensive experience with DDA flats and LIG/MIG housing societies. Her no-demolition approach works within the constraints of these properties to maximise Vastu compliance through arrangement, colours, and elemental balancing.",
      },
      {
        q: "How long does a Vastu site visit in Delhi take?",
        a: "A typical residential site visit takes 2–3 hours. Commercial property visits can take 3–5 hours depending on size. A detailed written report with remedies is provided within 2–3 working days.",
      },
      {
        q: "Can Vastu consultation be done online for Delhi properties?",
        a: "Yes. For Delhi clients who prefer remote consultations, Charru offers comprehensive online Vastu assessments using floor plans and a video walkthrough of your property.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    region: "Delhi NCR",
    tagline:
      "Professional Vastu Consultant in Gurgaon & Gurugram for Corporate & Residential Spaces",
    intro:
      "Gurgaon's booming corporate and residential scene demands Vastu expertise that understands both luxury penthouses and Grade-A office parks. Charru Gupta has served 100+ clients across Gurgaon's top sectors — DLF City, Golf Course Road, Sohna Road, and Dwarka Expressway. Her corporate Vastu consultations have helped businesses improve team productivity and client acquisition, while her residential work has transformed homes in Gurgaon's premium condominiums.",
    services: [
      "Corporate Vastu for Gurgaon's office parks and co-working spaces",
      "Residential Vastu for high-rise apartments & villas in Gurgaon",
      "Vastu for new office interiors and corporate HQ setup",
      "Retail and showroom Vastu in Gurgaon commercial districts",
    ],
    testimonial: {
      quote:
        "Our IT company on Golf Course Road was struggling with employee attrition and deal closures. Charru ji's office Vastu recommendations — mostly rearrangements and minor décor changes — made a noticeable difference in six weeks.",
      name: "Vikram Anand",
      location: "DLF Cyber City, Gurgaon",
    },
    faqs: [
      {
        q: "Is there a Vastu consultant in Gurgaon for offices?",
        a: "Yes. Charru Gupta specialises in corporate Vastu for Gurgaon's office environments, including open-plan offices, cabins, conference rooms, reception areas, and co-working spaces across DLF Cyber City, Golf Course Road, and Sector 29.",
      },
      {
        q: "Does Vastu apply to rented office spaces in Gurgaon?",
        a: "Absolutely. Charru's no-demolition Vastu approach is specifically designed for rented commercial spaces — using furniture placement, directional corrections, elemental balancing, and décor — no permanent changes required.",
      },
      {
        q: "Can Vastu help improve business at my Gurgaon startup?",
        a: "Many of Charru's clients in Gurgaon have reported improved deal flows, reduced team conflicts, and better financial performance after Vastu alignment. The key factors — direction of the founder's desk, cash counter placement, and entrance energy — are addressed in every commercial consultation.",
      },
      {
        q: "Does Charru Gupta serve the Sohna Road and Dwarka Expressway areas of Gurgaon?",
        a: "Yes. Charru serves all of Gurgaon including DLF Phase 1–5, Sohna Road, Southern Peripheral Road, Dwarka Expressway corridor, and the new sectors of New Gurgaon (Sectors 58–115).",
      },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    region: "Uttar Pradesh",
    tagline:
      "Vastu Consultant in Greater Noida for Residential & Commercial Properties",
    intro:
      "Greater Noida's planned townships, wide roads, and affordable housing make it one of the fastest-growing regions in the NCR. Charru Gupta has an in-depth understanding of Greater Noida's layout — from Gaur City to Knowledge Park, Tech Zone to Omicron sectors. She has helped hundreds of families in Greater Noida's residential societies achieve peace, prosperity, and health through scientifically aligned Vastu solutions.",
    services: [
      "Vastu for Gaur City, Omicron, and Greater Noida West apartments",
      "Commercial Vastu for Knowledge Park and Tech Zone offices",
      "Plot and under-construction property Vastu advice",
      "Industrial Vastu for Greater Noida's manufacturing belt",
    ],
    testimonial: {
      quote:
        "We bought a new flat in Gaur City and consulted Charru ji before moving in. Her pre-possession Vastu recommendations helped us set up the home perfectly from day one. Best investment we made.",
      name: "Neha Agarwal",
      location: "Gaur City, Greater Noida West",
    },
    faqs: [
      {
        q: "Does Charru Gupta provide Vastu consultation in Greater Noida?",
        a: "Yes. Charru offers both in-person site visits and online consultations across Greater Noida — covering Gaur City, Omicron sectors, Knowledge Park, Alpha, Beta, Gamma, Delta sectors, and Yamuna Expressway areas.",
      },
      {
        q: "Is Vastu important before buying a flat in Greater Noida?",
        a: "Pre-purchase Vastu analysis is one of the most valuable consultations. Charru can review floor plans, analyse directions, and highlight potential energy zones before you finalise your property — saving you from making a costly mistake.",
      },
      {
        q: "What Vastu issues are common in Greater Noida flats?",
        a: "Corner plot effects, north-east toilet placements, west-facing entrances, and improper kitchen directions are the most frequently reported Vastu issues in Greater Noida societies. Most are correctable without demolition.",
      },
      {
        q: "Can Vastu help with delayed possession stress in Greater Noida?",
        a: "Charru can analyse your existing home with Vastu corrections to reduce stress, and advise on the new property's floor plan simultaneously. Many clients have found that addressing Vastu in their current home speeds up life improvements including pending property issues.",
      },
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    region: "Uttar Pradesh",
    tagline:
      "Vastu Consultant in Ghaziabad for Homes, Industries & Commercial Properties",
    intro:
      "Ghaziabad — often called the gateway to Uttar Pradesh — is a city of diverse properties: from Indirapuram's modern apartments to Raj Nagar's independent bungalows and Loni's industrial corridors. Charru Gupta has extensive experience serving Ghaziabad's mixed residential and industrial landscape, offering Vastu solutions that balance family wellbeing with business prosperity.",
    services: [
      "Home Vastu for Indirapuram, Raj Nagar & Vaishali apartments",
      "Industrial Vastu for Ghaziabad's manufacturing units",
      "Vastu for shops and commercial establishments in Ghaziabad",
      "Directional corrections for Ghaziabad independent homes",
    ],
    testimonial: {
      quote:
        "My factory in Ghaziabad was facing machinery breakdowns and labour disputes for two years. After Charru ji visited and made specific directional changes at the main gate and production floor, things stabilised within 60 days.",
      name: "Suresh Gupta",
      location: "Industrial Area, Ghaziabad",
    },
    faqs: [
      {
        q: "Who is the best Vastu consultant in Ghaziabad?",
        a: "Charru Gupta of SimplyVastuShastra is highly recommended for Ghaziabad, with deep experience in both residential and industrial Vastu for properties across Indirapuram, Raj Nagar, Vasundhara, and the GT Road industrial belt.",
      },
      {
        q: "Does Charru Gupta provide industrial Vastu in Ghaziabad?",
        a: "Yes. Industrial Vastu is a specialised offering — covering factory layout, main gate direction, production floor design, stores and office placement, and the energy zones that affect workforce productivity and machinery performance.",
      },
      {
        q: "Is online Vastu consultation available for Ghaziabad properties?",
        a: "Yes. Clients in Ghaziabad can opt for online consultation using floor plans and a video walkthrough, which is equally effective for residential properties. Industrial and large commercial spaces benefit more from in-person visits.",
      },
      {
        q: "What areas of Ghaziabad does Charru Gupta serve?",
        a: "Charru serves all of Ghaziabad including Indirapuram, Vasundhara, Raj Nagar Extension, Vaishali, Kaushambi, Loni, Modinagar, Muradnagar, and the industrial areas of Sahibabad.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    region: "Delhi NCR",
    tagline:
      "Vastu Consultant in Faridabad for Homes, Offices & Industrial Properties",
    intro:
      "Faridabad, Haryana's largest city and an industrial powerhouse of Delhi NCR, offers a unique mix of residential neighbourhoods, commercial hubs, and large industrial zones. Charru Gupta brings her no-demolition Vastu expertise to Faridabad's diverse landscape — from NIT Faridabad's residential sectors to the industrial estates of Sector 24 and the growing sectors along Mathura Road.",
    services: [
      "Residential Vastu for NIT Faridabad & sector-based homes",
      "Industrial Vastu for Faridabad's manufacturing and production units",
      "Vastu for commercial shops and offices in Faridabad",
      "New construction Vastu planning for Faridabad properties",
    ],
    testimonial: {
      quote:
        "My retail shop in Sector 12 Faridabad had very low footfall despite a prime location. Charru ji identified a Vastu issue with the entrance and cash counter placement. After corrections, footfall improved significantly within a month.",
      name: "Amit Bansal",
      location: "Sector 12, Faridabad",
    },
    faqs: [
      {
        q: "Is there a Vastu consultant in Faridabad?",
        a: "Yes. Charru Gupta provides both in-person and online Vastu consultations for Faridabad, covering residential properties in NIT sectors, commercial spaces on Mathura Road, and industrial units in Sector 24 and surrounding industrial estates.",
      },
      {
        q: "What Vastu issues are common in Faridabad homes?",
        a: "South-facing plots, kitchen in the north-east, and master bedroom in the south-east are among the most common Vastu concerns in Faridabad properties. Charru addresses these without structural changes.",
      },
      {
        q: "Does Charru Gupta serve the Ballabhgarh area of Faridabad?",
        a: "Yes. Charru's services extend to all parts of Faridabad district, including Ballabhgarh, Old Faridabad, NIT, and the newer sectors developed along the Agra Canal.",
      },
      {
        q: "Can Vastu consultation be combined for a home and factory in Faridabad?",
        a: "Yes. Many business-owner clients combine residential and commercial/industrial consultations into a single visit. Charru offers a combined package for home + business Vastu for Faridabad clients.",
      },
    ],
  },
  {
    slug: "dwarka",
    name: "Dwarka, Delhi",
    region: "Delhi NCR",
    tagline: "Expert Vastu Consultant in Dwarka Delhi — All 23 Sectors Served",
    intro:
      "Dwarka — Delhi's largest residential sub-city — is home to hundreds of housing societies spread across 23 sectors. Charru Gupta has worked extensively across Dwarka's high-density apartment complexes, helping families resolve persistent issues related to health, finances, and relationships through targeted Vastu interventions. Her familiarity with Dwarka's building typologies — from DDA flats to premium societies on Dwarka Expressway — makes her the go-to Vastu expert for Dwarka residents.",
    services: [
      "Vastu for DDA flats and housing societies in all 23 Dwarka sectors",
      "Vastu consultation for properties on Dwarka Expressway",
      "Home Vastu for independent houses and builder floors in Dwarka",
      "Online Vastu consultation for Dwarka properties",
    ],
    testimonial: {
      quote:
        "Our Dwarka Sector 10 flat was giving us persistent health problems. Charru ji visited and identified three critical Vastu issues. After following her remedies — which required no demolition — health improved remarkably in six weeks.",
      name: "Dr. Sunita Arora",
      location: "Sector 10, Dwarka, Delhi",
    },
    faqs: [
      {
        q: "Is there a Vastu consultant in Dwarka, Delhi?",
        a: "Yes. Charru Gupta provides in-person Vastu consultations across all 23 Dwarka sectors, from Sector 1 to Sector 23, and along the Dwarka Expressway. She is among the most sought-after Vastu consultants in Dwarka.",
      },
      {
        q: "What are common Vastu issues in Dwarka DDA flats?",
        a: "Standard DDA flat layouts often have north-facing toilets, kitchen in the north-east, and master bedrooms in the north or east — all of which can be corrected without demolition through colour therapy, furniture repositioning, and elemental adjustments.",
      },
      {
        q: "Does Charru Gupta serve Dwarka Expressway properties in Gurugram?",
        a: "Yes. Charru serves properties on both the Delhi and Gurugram sides of the Dwarka Expressway, including Sectors 108–115 of Gurugram and all Dwarka sectors adjacent to the expressway.",
      },
      {
        q: "How is Vastu consultation done for high-rise apartments in Dwarka?",
        a: "For high-rise apartments, Charru reviews the flat's individual floor plan along with its position within the building (north vs south wing, floor level, corner vs mid-unit). She also considers the building's orientation and main gate direction.",
      },
    ],
  },
  {
    slug: "rohini",
    name: "Rohini, Delhi",
    region: "Delhi NCR",
    tagline:
      "Vastu Consultant in Rohini Delhi — Residential & Commercial Vastu Expert",
    intro:
      "Rohini, one of Delhi's most densely populated and well-planned sub-cities, spans 22 sectors and houses a vibrant mix of DDA colonies, private builders, commercial markets, and industrial areas. Charru Gupta has deep experience consulting for Rohini's varied property types — from DDA MIG flats in Sectors 13–17 to commercial properties on the Rohini Ring Road and industrial units in Sector 32.",
    services: [
      "Vastu for DDA flats and housing societies in Rohini sectors",
      "Commercial Vastu for markets and offices along Rohini Ring Road",
      "Vastu for builder floors and independent homes in Rohini",
      "Online consultations for Rohini and Pitampura properties",
    ],
    testimonial: {
      quote:
        "I was sceptical about Vastu initially, but after months of financial stress and health issues in our Rohini Sector 16 flat, we decided to try it. Charru ji's no-nonsense, science-backed approach convinced me. Three months later, I can say it works.",
      name: "Rajiv Saxena",
      location: "Sector 16, Rohini, Delhi",
    },
    faqs: [
      {
        q: "Does Charru Gupta provide Vastu consultation in Rohini, Delhi?",
        a: "Yes. Charru serves all Rohini sectors (1–22), Pitampura, Mangolpuri, and surrounding areas of North-West Delhi. Both in-person visits and online consultations are available.",
      },
      {
        q: "What are typical Vastu concerns for Rohini apartments?",
        a: "In Rohini's DDA colonies, common Vastu challenges include south-west facing entrances, west zone kitchens, and children's rooms in the south-east. Charru addresses all these with her proven no-demolition methods.",
      },
      {
        q: "Can Vastu help improve studies for children in Rohini?",
        a: "Yes. Study room and study desk direction is one of the most requested Vastu consultations. The north-east and east directions are ideal for children's study — Charru will assess your existing setup and provide practical adjustments.",
      },
      {
        q: "Is Vastu consultation available for commercial properties in Pitampura?",
        a: "Yes. Charru covers Pitampura and the entire North-West Delhi commercial belt, including office spaces on Netaji Subhash Place and the Pitampura IT sector.",
      },
    ],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    region: "Uttar Pradesh",
    tagline:
      "Vastu Consultant in Lucknow — Online & In-Person Vastu Consultation in UP",
    intro:
      "Lucknow — the 'City of Nawabs' — is experiencing rapid real estate growth with new townships in Gomti Nagar, Hazratganj, and Aliganj transforming into modern residential and commercial hubs. Charru Gupta provides both online and in-person Vastu consultations for Lucknow, bringing the same expert-level guidance that Delhi NCR clients have trusted for years. Her online consultation process is thorough, convenient, and just as effective as an in-person visit.",
    services: [
      "Online Vastu consultation for Lucknow homes and apartments",
      "In-person Vastu site visits across Gomti Nagar and Hazratganj",
      "Commercial Vastu for Lucknow businesses and showrooms",
      "Vastu for new construction projects in Lucknow",
    ],
    testimonial: {
      quote:
        "Being in Lucknow, I was worried about getting expert Vastu guidance. Charru ji's online consultation was just as thorough as I'd hoped — she reviewed our floor plans, did a video walkthrough, and provided detailed remedies. The results have been wonderful.",
      name: "Kavita Singh",
      location: "Gomti Nagar, Lucknow",
    },
    faqs: [
      {
        q: "Can I get a Vastu consultation in Lucknow online?",
        a: "Yes. Charru Gupta offers comprehensive online Vastu consultations for Lucknow via video call. You share your floor plans and do a brief video walkthrough of your property. The assessment and remedy report are as detailed as an in-person consultation.",
      },
      {
        q: "Does Charru Gupta visit Lucknow for in-person consultations?",
        a: "Charru visits Lucknow for in-person consultations on request. Scheduled visits are available with advance booking. Online consultation is recommended for faster service.",
      },
      {
        q: "What areas of Lucknow does the Vastu consultation cover?",
        a: "Charru serves all major Lucknow localities — Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Faizabad Road, Alambagh, Mahanagar, and new townships on Kanpur Road and Sultanpur Road.",
      },
      {
        q: "Is Vastu consultation beneficial for Lucknow's new housing projects?",
        a: "Absolutely. Pre-possession Vastu review for new LDA or private builder flats in Lucknow is extremely valuable. Charru can help you choose the right unit from available options and plan your interior setup for maximum Vastu compliance.",
      },
    ],
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    region: "Uttar Pradesh",
    tagline:
      "Vastu Consultant in Kanpur — Online Vastu Consultation for Uttar Pradesh",
    intro:
      "Kanpur — UP's industrial and commercial hub — blends traditional residential neighbourhoods with modern commercial districts and large-scale industrial zones. Charru Gupta's Vastu consultation services are available for Kanpur via both online and in-person formats. Whether it's a home in Civil Lines, an office on The Mall, or a textile factory in Panki Industrial Area, her expertise covers every property type Kanpur has to offer.",
    services: [
      "Online Vastu consultation for Kanpur residences and apartments",
      "Industrial Vastu for Kanpur's manufacturing and textile units",
      "Commercial Vastu for offices and showrooms in Kanpur",
      "Vastu analysis for new residential projects in Kanpur",
    ],
    testimonial: {
      quote:
        "Our textile unit in Panki was facing production delays and labour issues. After Charru ji's industrial Vastu consultation (conducted online using detailed factory layout plans), we made specific corrections that turned things around in two months.",
      name: "Ramesh Agarwal",
      location: "Panki Industrial Area, Kanpur",
    },
    faqs: [
      {
        q: "Is Vastu consultation available for Kanpur properties online?",
        a: "Yes. Charru offers a full online Vastu consultation service for Kanpur. Using your floor plans, measurements, and a video call walkthrough, she delivers a comprehensive Vastu analysis and remedy plan — without you needing to travel or wait for an in-person visit.",
      },
      {
        q: "What types of Kanpur properties can be consulted for Vastu?",
        a: "All property types — residential homes and apartments in Civil Lines, Kidwai Nagar, and Swaroop Nagar; commercial offices in Naveen Market and The Mall; and industrial units in Panki, Fazalganj, and Dada Nagar — are covered.",
      },
      {
        q: "Is industrial Vastu consultation different for Kanpur factories?",
        a: "Yes. Industrial Vastu for Kanpur's manufacturing and textile units involves analysis of the main gate direction, production floor layout, boiler and machinery placement, stores and dispatch areas, and the management office — each following specific Vastu principles for maximum efficiency.",
      },
      {
        q: "How do I book an online Vastu consultation for my Kanpur property?",
        a: "Contact Charru via WhatsApp at +91 9871718653 or through the consultation form on this website. You will need to share your floor plan and a brief video walkthrough of the property.",
      },
    ],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    region: "Uttar Pradesh",
    tagline:
      "Vastu Consultant in Varanasi — Expert Vastu Guidance for the City of Light",
    intro:
      "Varanasi — one of the world's oldest living cities — is a place of profound spiritual energy and complex architectural heritage. Charru Gupta offers specialised Vastu consultations for Varanasi's unique blend of ancient havelis, modern apartments, and commercial establishments near the ghats and beyond. Her deep understanding of Vastu's spiritual and scientific foundations makes her particularly well-suited to guide Varanasi's residents toward aligned, harmonious living.",
    services: [
      "Online Vastu consultation for Varanasi homes and havelis",
      "Vastu for modern apartments and new constructions in Varanasi",
      "Commercial Vastu for businesses in Sigra and Lanka areas",
      "Vastu guidance for new property buyers in Varanasi",
    ],
    testimonial: {
      quote:
        "In a city as spiritually charged as Varanasi, Vastu becomes even more meaningful. Charru ji's consultation for our home near BHU combined Vastu science with sensitivity to our spiritual values. Truly a unique and transformative experience.",
      name: "Prof. Arjun Tripathi",
      location: "BHU Area, Varanasi",
    },
    faqs: [
      {
        q: "Is online Vastu consultation available for Varanasi?",
        a: "Yes. Charru Gupta's online consultation service is available for all Varanasi properties — from homes near the ghats to modern apartments in Sigra, Lanka, and Cantonment areas. Online consultations are fully detailed and include a written remedy report.",
      },
      {
        q: "Does Vastu have special significance in Varanasi?",
        a: "Varanasi is one of the most sacred cities in India — its very existence is an expression of cosmic alignment. Vastu Shastra aligns beautifully with Varanasi's spiritual ethos, and applying Vastu principles in this city is considered especially auspicious.",
      },
      {
        q: "Can Vastu consultation help with property selection in Varanasi?",
        a: "Yes. Pre-purchase Vastu analysis is highly recommended in Varanasi where property layouts, facing directions, and proximity to religious sites all have Vastu implications. Charru provides plot and flat analysis to help you choose wisely.",
      },
      {
        q: "Does Charru Gupta visit Varanasi for in-person consultations?",
        a: "Scheduled in-person visits to Varanasi are available on request with advance booking. Online consultations are the most efficient option for Varanasi clients and deliver equally thorough results.",
      },
    ],
  },
  {
    slug: "noida-extension",
    name: "Noida Extension",
    region: "Uttar Pradesh",
    tagline: "Vastu Consultant in Noida Extension & Greater Noida West",
    intro:
      "Noida Extension — officially Greater Noida West — has emerged as one of the most sought-after affordable housing destinations in the NCR, with thousands of families moving into new high-rise societies every year. Charru Gupta is highly experienced with Noida Extension's layout, having consulted for hundreds of families in Gaur City, Supertech Eco Village, ATS Greens, and other marquee societies. Her pre-possession Vastu guidance helps buyers make the most of their investment from day one.",
    services: [
      "Pre-possession Vastu analysis for Noida Extension flats",
      "Vastu for high-rise apartments in Gaur City and neighbouring societies",
      "Interior setup Vastu guidance for new Noida Extension homes",
      "Online Vastu consultation for Noida Extension properties",
    ],
    testimonial: {
      quote:
        "We consulted Charru ji before taking possession of our ATS Greens flat in Noida Extension. She reviewed the floor plan, identified the ideal unit from our shortlist, and gave detailed setup recommendations. We are so happy we did this before moving in.",
      name: "Pooja & Deepak Verma",
      location: "ATS Greens, Noida Extension",
    },
    faqs: [
      {
        q: "Is Vastu consultation available for Noida Extension (Greater Noida West)?",
        a: "Yes. Charru Gupta serves Noida Extension — Greater Noida West — comprehensively, covering all major societies on Bisrakh Road, Noida Extension Main Road, and the Gaur City township.",
      },
      {
        q: "Is pre-possession Vastu consultation worth it for Noida Extension?",
        a: "Absolutely. Pre-possession consultation allows you to choose the best available unit (direction, floor, wing), plan your furniture layout optimally, and identify any Vastu concerns in the floor plan before spending on interiors.",
      },
      {
        q: "What are common Vastu issues in Noida Extension high-rises?",
        a: "South-facing balconies being used as the main entrance, toilets in the north-east zone, and kitchen placements in the north are among the most common issues Charru resolves for Noida Extension clients.",
      },
      {
        q: "Does Charru Gupta visit Noida Extension for in-person Vastu consultations?",
        a: "Yes. In-person site visits to Noida Extension are available. Online consultations using floor plans and a video walkthrough are also available and work exceptionally well for pre-possession consultations.",
      },
    ],
  },
];
