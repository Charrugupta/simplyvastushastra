export type ServicePageData = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "online-vastu-consultation",
    title: "Online Vastu Consultation",
    h1: "Online Vastu Consultation with Charru Gupta",
    metaTitle: "Online Vastu Consultation | SimplyVastuShastra — Charru Gupta",
    metaDescription:
      "Get expert online Vastu consultation from Charru Gupta. Video call-based Vastu assessment for homes, offices & businesses across India. No travel needed.",
    intro:
      "Expert Vastu guidance is no longer limited by geography. Charru Gupta's online Vastu consultation delivers the same depth and precision as an in-person site visit — using a structured video call, detailed floor plan analysis, and a comprehensive written report. Clients across Lucknow, Kanpur, Varanasi, Pune, Bangalore, and internationally have benefited from this flexible consultation format.",
    benefits: [
      "Convenient — consult from anywhere in India or abroad, no travel required",
      "Equally effective — video walkthrough captures the same spatial information as in-person visits",
      "Faster turnaround — assessment and report within 3–5 working days",
      "Cost-effective — no travel charges, ideal for properties far from Delhi NCR",
      "Recorded session — video call recording available for future reference",
      "Ideal for UP, Rajasthan, Maharashtra, Karnataka, and international clients",
    ],
    process: [
      {
        step: "Book & Prepare",
        desc: "Book your consultation via WhatsApp or the enquiry form. Share your floor plan (hand-drawn or architectural), property measurements, and the direction of your main entrance.",
      },
      {
        step: "Video Walkthrough",
        desc: "On the scheduled date, do a room-by-room video walkthrough on a 30–45 minute video call. Charru will observe spatial relationships, room usage, and energy zones live.",
      },
      {
        step: "Deep Analysis",
        desc: "Charru spends 2–3 days in detailed Vastu analysis — studying directions, element zones, energy mapping, and identifying both strengths and Vastu doshas in your property.",
      },
      {
        step: "Remedy Report",
        desc: "Receive a detailed written Vastu report covering every room, identified doshas, prioritised no-demolition remedies, placement guidance, colour recommendations, and a remediation timeline.",
      },
      {
        step: "Follow-Up Call",
        desc: "A 30-minute follow-up call to discuss the report, clarify remedies, and answer any questions. Email support available for 30 days post-consultation.",
      },
    ],
    faqs: [
      {
        q: "Is an online Vastu consultation as effective as an in-person visit?",
        a: "Yes, for most residential and smaller commercial properties. The video walkthrough, combined with detailed floor plans and measurements, provides Charru with all the spatial information needed for a thorough analysis. The remedies and report are equally comprehensive.",
      },
      {
        q: "What do I need to prepare for an online Vastu consultation?",
        a: "You will need: (1) A floor plan of your property — architectural drawing or a clear hand-drawn sketch with room labels and approximate dimensions. (2) A compass reading at your main entrance. (3) A stable internet connection for the video call walkthrough.",
      },
      {
        q: "How long does an online Vastu consultation take?",
        a: "The video walkthrough call is typically 30–45 minutes. The detailed analysis and report preparation takes 2–3 working days. A follow-up call of 30 minutes is included.",
      },
      {
        q: "Can I get an online Vastu consultation for a property outside India?",
        a: "Yes. Charru has consulted for NRI clients with properties in the USA, UK, UAE, Canada, Singapore, and Australia. The online format is perfectly suited to international clients.",
      },
    ],
  },
  {
    slug: "home-vastu-consultation",
    title: "Home Vastu Consultation",
    h1: "Home Vastu Consultation — Transform Your Living Space",
    metaTitle: "Home Vastu Consultation in Delhi NCR & UP | SimplyVastuShastra",
    metaDescription:
      "Expert home Vastu consultation by Charru Gupta. In-person Vastu site visits for homes, flats & villas across Delhi, Noida, Gurgaon & all of UP. No demolition approach.",
    intro:
      "Your home is your most important Vastu zone — it influences your family's health, relationships, financial energy, and mental wellbeing every single day. Charru Gupta's home Vastu consultation is a thorough, personalised in-person assessment that identifies every Vastu dosh in your property and prescribes practical, no-demolition remedies. Over 1,000 families across Delhi NCR and Uttar Pradesh have experienced the life-changing impact of a correctly aligned home.",
    benefits: [
      "Comprehensive room-by-room Vastu analysis — bedroom, kitchen, entrance, pooja room, study",
      "Identifies and corrects health-affecting Vastu doshas in your home",
      "Improves family relationships, financial energy, and mental peace",
      "No-demolition approach — 90% of doshas corrected without structural changes",
      "Detailed written report with room-specific remedies and a prioritised action plan",
      "Covers all types: apartments, independent homes, builder floors, villas, and farmhouses",
    ],
    process: [
      {
        step: "Initial Consultation",
        desc: "A 15-minute phone/WhatsApp consultation to understand your home's current challenges, family composition, and primary concerns. This helps Charru prioritise the analysis areas.",
      },
      {
        step: "In-Person Site Visit",
        desc: "Charru visits your home for a 2–3 hour comprehensive site assessment. Using a compass and detailed floor plan, she maps every room against Vastu energy zones, directions, and the 16 Vastu zones of the Vastu Purusha Mandala.",
      },
      {
        step: "Detailed Analysis",
        desc: "Post-visit, Charru spends 1–2 days in deep analysis — correlating the spatial layout with the family's health, financial, and relationship patterns mentioned during the consultation.",
      },
      {
        step: "Remedy Report",
        desc: "A written Vastu report delivered within 3–5 days, covering each room's findings, identified doshas, remedies (colours, crystals, plants, mirrors, elemental additions), and a priority-ordered action plan.",
      },
      {
        step: "Implementation Support",
        desc: "A follow-up call after you've implemented the remedies, plus email/WhatsApp support for 30 days to answer questions during implementation.",
      },
    ],
    faqs: [
      {
        q: "What does a home Vastu site visit cover?",
        a: "A home Vastu visit covers the main entrance direction and energy, living room layout, master bedroom placement and orientation, children's room, kitchen direction and layout, pooja room, toilets, study room, and the property's overall plot shape and surrounding environment.",
      },
      {
        q: "How long does a home Vastu consultation take?",
        a: "The in-person site visit takes 2–3 hours for standard apartments and homes. The full process — including the detailed report — is completed within 5–7 working days from the visit date.",
      },
      {
        q: "Do Vastu remedies require demolition or construction?",
        a: "No. Charru's trademark no-demolition approach resolves 85–90% of Vastu doshas through colour therapy, furniture repositioning, crystal and plant placement, mirror usage, and elemental balancing. Structural changes are only suggested in extreme cases and always as optional recommendations.",
      },
      {
        q: "Is home Vastu consultation available for rented properties?",
        a: "Yes. Rented homes can benefit enormously from Vastu consultation because Charru's no-demolition remedies don't require any permanent changes. All solutions are renter-friendly.",
      },
    ],
  },
  {
    slug: "office-vastu-consultation",
    title: "Office Vastu Consultation",
    h1: "Office Vastu Consultation — Unlock Your Business's Full Potential",
    metaTitle:
      "Office Vastu Consultation in Delhi NCR & Gurgaon | SimplyVastuShastra",
    metaDescription:
      "Expert office Vastu consultation by Charru Gupta. Improve productivity, reduce conflicts & attract growth with commercial Vastu for offices in Delhi, Noida & Gurgaon.",
    intro:
      "Your office's spatial alignment directly impacts team productivity, client relationships, and business growth. An improperly aligned office can cause constant staff conflicts, poor decision-making, and sluggish revenue — while a Vastu-aligned workspace hums with efficiency and positive energy. Charru Gupta's office Vastu consultation combines ancient directional wisdom with modern workspace design to create offices that perform as well as they look.",
    benefits: [
      "Improves team productivity, focus, and collaboration",
      "Reduces workplace conflicts and employee attrition",
      "Optimises the CEO/MD desk direction for stronger decision-making",
      "Aligns cash flow zones for improved financial performance",
      "Enhances client reception areas for better first impressions",
      "Suitable for all office types: corporate, startup, co-working, home office",
    ],
    process: [
      {
        step: "Business Brief",
        desc: "An initial call to understand your business type, team size, current challenges (revenue, team dynamics, client acquisition), and any specific concerns about the workspace.",
      },
      {
        step: "Site Visit",
        desc: "A thorough 3–5 hour office visit covering the main entrance, reception, individual workstations, conference rooms, the CEO/MD cabin, accounts and finance desks, and pantry/kitchen area.",
      },
      {
        step: "Directional Mapping",
        desc: "Charru maps the office against the 16 Vastu energy zones — identifying where productivity zones, financial zones, and conflict zones are located relative to your team's current positions.",
      },
      {
        step: "Optimisation Report",
        desc: "A detailed office Vastu report with team seating recommendations, desk directions, meeting room layouts, reception design tips, colour palette for productivity zones, and elemental additions for specific business goals.",
      },
      {
        step: "Implementation Review",
        desc: "A follow-up visit or video call to review implementation and fine-tune any placements. Ongoing WhatsApp support for 30 days post-consultation.",
      },
    ],
    faqs: [
      {
        q: "Can office Vastu really improve business performance?",
        a: "Yes. The business results from office Vastu are often more immediately measurable than residential Vastu. Charru's clients have reported improved deal conversion rates, lower attrition, and better financial performance within 30–90 days of implementing office Vastu recommendations.",
      },
      {
        q: "What is the most important Vastu factor in an office?",
        a: "The direction the founder/CEO faces while working is the single most important office Vastu factor. The north or east directions are ideal for decision-making and financial growth. The correct direction of the entrance and the placement of the accounts desk are equally critical.",
      },
      {
        q: "Is office Vastu consultation available for rented commercial spaces?",
        a: "Yes. Since Charru's approach avoids structural changes, all remedies — seating rearrangements, colour changes, directional desk placements, elemental additions — work perfectly for rented offices.",
      },
      {
        q: "Does office Vastu cover startups and home offices?",
        a: "Yes. Startups and home offices have unique Vastu needs. The correct setup of a home office in particular is important because the home's overall Vastu and the work space's Vastu must complement each other — Charru provides integrated guidance for both.",
      },
    ],
  },
  {
    slug: "industrial-vastu-consultation",
    title: "Industrial Vastu Consultation",
    h1: "Industrial Vastu Consultation — Align Your Factory for Maximum Productivity",
    metaTitle:
      "Industrial Vastu Consultation in Delhi NCR & UP | SimplyVastuShastra",
    metaDescription:
      "Expert industrial Vastu by Charru Gupta for factories, warehouses & manufacturing units in Delhi NCR & Uttar Pradesh. Reduce breakdowns & improve output.",
    intro:
      "An industrial unit is a complex Vastu environment where the alignment of the main gate, production floor, heavy machinery, stores, management office, and labour rest areas all interact to determine the plant's productivity, safety record, and profitability. Charru Gupta's industrial Vastu consultation is a specialised service for factory owners and industrial unit managers who want to optimise their plant's energy alignment for sustained operational excellence.",
    benefits: [
      "Reduces unexplained machinery breakdowns and production stoppages",
      "Improves labour relations and reduces workforce attrition",
      "Aligns the main gate and dispatch area for smooth material flow",
      "Optimises management office placement for better decision-making",
      "Enhances the factory's financial energy zones for profitability",
      "Covers all industries: manufacturing, textile, food processing, logistics, pharma",
    ],
    process: [
      {
        step: "Industrial Brief",
        desc: "A detailed briefing call covering the industry type, production process, current operational challenges (machinery issues, labour disputes, financial losses), and the factory's history.",
      },
      {
        step: "Site Survey",
        desc: "A comprehensive site survey of the entire industrial unit — main gate, production floor, machinery placement, stores and warehouse, management block, accounts office, canteen, and toilets. A detailed sketch and compass readings are taken.",
      },
      {
        step: "Industrial Vastu Analysis",
        desc: "Charru analyses the factory layout against industrial Vastu principles — including the Pancha Bhuta (five elements) alignment for industrial environments, the correct zones for fire (boilers, furnaces), earth (stores, silos), and air (ventilation, dispatch).",
      },
      {
        step: "Operational Report",
        desc: "A detailed industrial Vastu report with specific recommendations for each section of the plant, including main gate positioning, machinery alignment adjustments, management office reorganisation, elemental corrections, and colour recommendations for worker zones.",
      },
      {
        step: "Implementation Support",
        desc: "On-site implementation support for major recommendations, with follow-up visits to monitor improvements. Monthly check-in support for 60 days post-consultation.",
      },
    ],
    faqs: [
      {
        q: "What is industrial Vastu consultation?",
        a: "Industrial Vastu is the application of Vastu Shastra principles to factories, manufacturing plants, warehouses, and large commercial establishments. It covers the same directional, elemental, and spatial principles as residential Vastu but at the scale of an industrial unit, with specific focus on production flow, safety, and profitability.",
      },
      {
        q: "Can Vastu reduce machinery breakdowns in my factory?",
        a: "Charru has worked with multiple industrial clients who reported a significant reduction in unexplained machinery breakdowns after Vastu realignment. The south-east zone governs fire and electrical energy — incorrect placement of heavy machinery in unfavourable zones is a common cause of mechanical and electrical issues.",
      },
      {
        q: "Is industrial Vastu consultation available outside Delhi NCR?",
        a: "Yes. Charru serves industrial clients across Uttar Pradesh (Ghaziabad, Kanpur, Lucknow, Agra, Meerut), Haryana (Faridabad, Palwal, Manesar), and can also provide online industrial Vastu consultation for factory owners who share detailed layout plans.",
      },
      {
        q: "How much time does an industrial Vastu site visit take?",
        a: "An industrial site visit typically takes 4–8 hours depending on the size of the unit. For very large facilities (10+ acres), multiple visits may be required. A detailed written report is provided within 5–7 working days.",
      },
    ],
  },
];
