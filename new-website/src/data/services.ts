export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: "paint-finishing" | "conveyors-handling" | "structural-piping" | "plant-operations";
  categoryName: string;
  summary: string;
  description: string;
  scopeOfWork: string[];
  keyFeatures: string[];
  imageFolder: string;
  images: string[];
  featured?: boolean;
}

export const serviceCategories = [
  { id: "paint-finishing", name: "Paint Finishing Systems", description: "Automotive-grade spray booths, curing ovens, PT/CED dip tanks, and robotic painting automation." },
  { id: "conveyors-handling", name: "Conveyors & Material Handling", description: "Power & Free systems, heavy floor conveyors, automated drop sections, and skid transfers." },
  { id: "structural-piping", name: "Structural Fabrication & Piping", description: "Heavy MS structures up to 400+ tons, process piping, industrial ventilation ducting, and chimneys." },
  { id: "plant-operations", name: "Plant Operations & Maintenance", description: "Turnkey factory relocations, rapid-turnaround shutdown overhauls, skilled manpower, and EHS." },
] as const;

export const servicesData: ServiceItem[] = [
  // 1. MS Structures
  {
    slug: "ms-structures",
    title: "Heavy MS Structural Fabrication & Erection",
    shortTitle: "MS Structures",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Engineering, shop fabrication, and high-altitude erection of heavy mild steel structures up to 400+ tons for automotive and industrial plants.",
    description: "UNIQUE ENGINEERS provides end-to-end mild steel structural solutions engineered to withstand severe industrial loads, vibration, and environmental demands. From heavy mezzanine floors and conveyor support headers to multi-tier paint shop structural networks, our certified team handles detailed layout engineering, precision fabrication, sandblasting/primer treatment, and high-altitude crane erection with zero safety incidents.",
    scopeOfWork: [
      "Fabrication & erection of heavy structural steel up to 400+ metric tons",
      "Mezzanine floors, equipment support platforms, and building trusses",
      "Conveyor bridge structures, overhead track headers, and cross-bracing",
      "Certified full-penetration welding per AWS and IS standards",
      "Precision alignment using optical and digital surveying instruments",
    ],
    keyFeatures: ["Tested & Certified Welders (Arc, TIG, MIG)", "High-capacity mobile crane rigging", "Heavy structural capacity up to 400T+", "Paint-shop grade surface finishing"],
    imageFolder: "ms_structures",
    images: ["/images/services/ms_structures/1.png", "/images/services/ms_structures/2.png", "/images/services/ms_structures/3.png", "/images/services/ms_structures/4.png"],
    featured: true,
  },

  // 2. Process Tanks and Tunnel
  {
    slug: "process-tanks-and-tunnel",
    title: "Process Tanks & Continuous Spray Tunnels",
    shortTitle: "Process Tanks & Tunnels",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Turnkey installation of Pre-Treatment (PT), Cathodic Electrodeposition (CED/ED) dip tanks, spray tunnels, and chemical circulation loops.",
    description: "Surface pre-treatment and electrodeposition form the chemical foundation of automotive corrosion resistance. We execute complete installation of stainless steel (SS 304/316L) and mild steel rubber-lined PT/CED tanks, continuous process tunnels, spray risers, high-pressure header manifolds, heating/cooling heat exchanger coils, and continuous sludge extraction weir systems.",
    scopeOfWork: [
      "Erection of multi-stage PT/CED tanks with rubber / FRP linings",
      "Fabrication & installation of spray tunnels with vapor seal vestibules",
      "Chemical circulation piping, heat exchanger skids, and filter presses",
      "Weir level automated mechanisms and continuous D-Sludge integration",
      "Hydrostatic leak testing and passivated chemical cleaning",
    ],
    keyFeatures: ["Corrosion-resistant SS 316L & lined builds", "Integrated spray headers & quick-release nozzles", "Tight vapor and moisture seal containment", "Comprehensive hydrostatic leak testing"],
    imageFolder: "tanks_tunnels",
    images: ["/images/services/tanks_tunnels/1.png", "/images/services/tanks_tunnels/2.png", "/images/services/tanks_tunnels/3.png", "/images/services/tanks_tunnels/4.png"],
    featured: true,
  },

  // 3. Ducting
  {
    slug: "ducting",
    title: "Industrial Ventilation, Exhaust & Supply Ducting",
    shortTitle: "Ducting Systems",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Heavy-duty sheet metal fabrication and crane-assisted installation of high-volume exhaust, supply, and conditioned air ducting.",
    description: "Industrial paint shops require precise air balance and laminar airflow to eliminate particulate contamination. UNIQUE ENGINEERS designs, fabricates, and erects heavy-gauge galvanized iron (GI), mild steel (MS), and stainless steel ductwork for fresh air supply units (ASU), oven exhaust, paint mist extraction, and recirculation systems (ARU).",
    scopeOfWork: [
      "Fabrication of heavy-gauge GI, MS, and SS ducting up to 3mm+ thickness",
      "Fresh air supply ducting from Air Supply Units (ASU) with filter housings",
      "High-temperature exhaust ducting for curing ovens with thermal insulation",
      "Crane erection up to and above plant roof level",
      "Aerodynamic transition pieces, dampers, expansion joints, and test ports",
    ],
    keyFeatures: ["Low air-leakage Class C/D standard construction", "High-temperature thermal lagging", "Anti-vibration flexible duct connections", "Crane-assisted rooftop rigging"],
    imageFolder: "ducting",
    images: ["/images/services/ducting/1.png", "/images/services/ducting/2.png", "/images/services/ducting/3.png", "/images/services/ducting/4.png"],
    featured: true,
  },

  // 4. Chimney
  {
    slug: "chimney",
    title: "Industrial Exhaust Chimneys & Stacks",
    shortTitle: "Industrial Chimneys",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "High-altitude fabrication, guying, and heavy crane erection of industrial exhaust chimneys above plant roof lines.",
    description: "Discharging volatile organic compounds (VOCs) and high-temperature combustion exhaust safely away from factory breathing zones requires structural chimneys engineered for high wind loads, thermal expansion, and seismic stability. We manufacture and erect self-supporting and guyed steel chimneys with lightning arrestors, sampling platforms, and aviation warning lights.",
    scopeOfWork: [
      "Shop fabrication of rolled shell sections in MS and Corten steel",
      "High-altitude multi-crane tandem erection over existing roofs",
      "Structural guy wire tensioning, foundation anchor bolting, and grouting",
      "Installation of external monkey ladders, rest platforms, and CEMS test ports",
      "High-temperature heat-resistant paint coating and aviation markings",
    ],
    keyFeatures: ["Engineered for heavy cyclonic wind and seismic loads", "Turnkey tandem crane lifting", "Integrated sampling platforms & EPA/CPCB test ports", "Heat-resistant industrial protective coatings"],
    imageFolder: "chimney",
    images: ["/images/services/chimney/1.png", "/images/services/chimney/2.png", "/images/services/chimney/3.png", "/images/services/chimney/4.png"],
  },

  // 5. Platforms and under guards
  {
    slug: "platforms-and-under-guards",
    title: "Elevated Maintenance Platforms, Catwalks & Under-Guards",
    shortTitle: "Platforms & Under-Guards",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Structural catwalks, maintenance access platforms, stairways, and heavy safety under-guard nets beneath overhead conveyors.",
    description: "Worker safety beneath active overhead conveyor lines is paramount. We fabricate and install heavy-duty mesh under-guards and catch pans designed to prevent dropped tools or vehicle components from falling onto production lines, alongside ergonomic catwalks, safety handrails, and industrial access stairs.",
    scopeOfWork: [
      "Fabrication & installation of overhead conveyor under-guard mesh systems",
      "Heavy catwalks, access stairways, crossover bridges, and safety toe boards",
      "Galvanized wire mesh and expanded metal safety screening",
      "Self-closing safety gates and fall arrest tie-off points",
      "Rigid vibration isolation from primary conveyor support headers",
    ],
    keyFeatures: ["100% OSHA and Indian Factory Act compliant", "High-capacity impact catchment design", "Hot-dip galvanized or epoxy-coated finish", "Custom modular framing for easy maintenance access"],
    imageFolder: "platforms",
    images: ["/images/services/platforms/1.png", "/images/services/platforms/2.png", "/images/services/platforms/3.png", "/images/services/platforms/4.png"],
  },

  // 6. Bottom Conveyor
  {
    slug: "bottom-conveyor",
    title: "Inverted Floor Conveyors & Skid Transfer Systems",
    shortTitle: "Bottom Conveyors",
    category: "conveyors-handling",
    categoryName: "Conveyors & Material Handling",
    summary: "Precision floor-level conveyor tracks, dual-strand chain drives, slat conveyors, and skid accumulation systems.",
    description: "Floor-mounted conveyors provide clean, stable handling for vehicle bodies, chassis, and heavy assemblies throughout paint booths and trim lines without risk of overhead oil drips. We handle millimeter-accurate rail setting, drive sprocket alignment, tensioning units, and cross-transfer shuttles.",
    scopeOfWork: [
      "Precision floor track leveling and anchor grouting to sub-millimeter tolerances",
      "Dual-strand continuous chain and slat conveyor mechanical erection",
      "Skid accumulation stops, pneumatic lifters, and turntable indexing units",
      "Drive motor positioning, torque-limiting clutch alignment, and chain tensioning",
      "Cold and hot trial commissioning under simulated vehicle payloads",
    ],
    keyFeatures: ["Zero-contamination floor-level drive configuration", "Sub-millimeter guide track alignment", "High payload accumulation capabilities", "Seamless integration with robotic spray zones"],
    imageFolder: "bottom_conveyor",
    images: ["/images/services/bottom_conveyor/1.png", "/images/services/bottom_conveyor/2.png", "/images/services/bottom_conveyor/3.png", "/images/services/bottom_conveyor/4.png"],
  },

  // 7. Over Head Conveyor
  {
    slug: "overhead-conveyor",
    title: "Overhead Power & Free (P&F) Conveyors & Monorails",
    shortTitle: "Overhead Conveyors",
    category: "conveyors-handling",
    categoryName: "Conveyors & Material Handling",
    summary: "Continuous loop monorails, I-beam systems, and complex multi-drive Power & Free (P&F) asynchronous overhead conveyors.",
    description: "With proven execution records including 2000m running systems at Tata Motors and 1200m installations at Volvo and Eicher, UNIQUE ENGINEERS is a premier specialist in overhead material handling. We erect heavy track profiles, dog-transfer switches, vertical drop loops, anti-backup safety cams, and multi-drive synchronized electronic tensioners.",
    scopeOfWork: [
      "Erection of multi-drive Power & Free (3\", 4\", 6\") overhead conveyor tracks",
      "Installation of horizontal curve tracks, vertical curves, and track switches",
      "Carrier trolley assembly, load bars, and custom vehicle body hangers",
      "Multiple synchronized drive unit installation with caterpillar drive chains",
      "Pneumatic stops, speed-up zones, queue accumulation, and carrier disengagement",
    ],
    keyFeatures: ["Proven execution up to 2000+ running meters", "Multi-drive electronic speed synchronization", "Asynchronous accumulation and routing capability", "Heavy-gauge alloy track profiles"],
    imageFolder: "overhead_conveyor",
    images: ["/images/services/overhead_conveyor/1.png", "/images/services/overhead_conveyor/2.png", "/images/services/overhead_conveyor/3.png", "/images/services/overhead_conveyor/4.png"],
    featured: true,
  },

  // 8. Conveyor Structure
  {
    slug: "conveyor-structure",
    title: "Conveyor Structural Headers, Bridges & Superstructures",
    shortTitle: "Conveyor Structures",
    category: "conveyors-handling",
    categoryName: "Conveyors & Material Handling",
    summary: "Heavy structural framing, ceiling suspension headers, tie rods, and column networks engineered specifically for moving conveyor dynamics.",
    description: "A conveyor system is only as reliable as its supporting structural backbone. Moving payloads exert dynamic torsional and braking forces that require specialized header steel, sway braces, and anti-vibration damping. We erect standalone structural bridges and ceiling hung frameworks tailored to existing factory architectures.",
    scopeOfWork: [
      "Heavy portal frames, column bents, and longitudinal runner steel",
      "Ceiling truss suspension hangers with spherical tie-rod adjustments",
      "Dynamic load sway bracing designed to absorb sudden emergency stops",
      "Inter-building conveyor bridges with weatherproof cladding",
      "Torque-tightened high-strength friction grip (HSFG) bolting",
    ],
    keyFeatures: ["Dynamic fatigue-resistant structural engineering", "Minimal site downtime during ceiling suspension", "HSFG calibrated torque-bolted connections", "Custom spans over busy production aisles"],
    imageFolder: "conveyor_structure",
    images: ["/images/services/conveyor_structure/1.png", "/images/services/conveyor_structure/2.png", "/images/services/conveyor_structure/3.png", "/images/services/conveyor_structure/4.png"],
  },

  // 9. Conveyor and Handling Systems
  {
    slug: "conveyor-and-handling-systems",
    title: "Complete Automotive Material Handling Systems",
    shortTitle: "Material Handling Systems",
    category: "conveyors-handling",
    categoryName: "Conveyors & Material Handling",
    summary: "Integrated material flow automation uniting overhead conveyors, floor skids, transfer carts, turntables, and robotic cells.",
    description: "Turnkey material handling connects all phases of manufacturing into an efficient, unified flow. Partnering with global leaders like TEIL (Transmisiones Eisenmann) and Wooshing India, we deliver automated line transfers, cross-bay shuttles, carrier storage buffers, and synchronised assembly line feeds.",
    scopeOfWork: [
      "Full turnkey layout assembly and mechanical line integration",
      "Installation of turntables, rollover units, and 90-degree transfer carts",
      "Integration of optical line tracking sensors and mechanical flag actuators",
      "Commissioning support from initial dry-cycle trials to full SOP launch",
      "Complete operator ergonomics and safety interlocking",
    ],
    keyFeatures: ["Zero-bottleneck line flow engineering", "Multi-tier cross-bay transfer capabilities", "Smooth payload transitions between systems", "Comprehensive pre-commissioning validation"],
    imageFolder: "conveyor_and_handeling_system",
    images: ["/images/services/conveyor_and_handeling_system/1.png", "/images/services/conveyor_and_handeling_system/2.png", "/images/services/conveyor_and_handeling_system/3.png", "/images/services/conveyor_and_handeling_system/4.png"],
  },

  // 10. Drop Lifts
  {
    slug: "drop-lifts",
    title: "Automated Vertical Drop Sections & Scissor Lifts",
    shortTitle: "Drop Lifts",
    category: "conveyors-handling",
    categoryName: "Conveyors & Material Handling",
    summary: "Precision vertical transfer units, counterweighted drop lifts, and hydraulic scissor lifts transferring carriers between shop elevations.",
    description: "Transferring vehicle bodies between ground-level processing and overhead storage requires heavy-duty vertical lifts with fail-safe mechanical locking, precision guide rails, and emergency arrestors. We install counterweighted electric hoist drop sections and heavy hydraulic scissor lifting tables.",
    scopeOfWork: [
      "Vertical guide column alignment, base frame anchoring, and counterweight rigging",
      "Precision hoist drum, wire rope reeving, and anti-fall safety catchers",
      "Hydraulic scissor lift table positioning, power pack piping, and limit switches",
      "Carriage rail leveling to align perfectly with overhead and floor tracks",
      "Full dynamic payload drop and emergency brake safety load testing",
    ],
    keyFeatures: ["Fail-safe mechanical anti-fall locking pawls", "Multi-elevation millimeter-exact stopping accuracy", "Integrated pneumatic carrier holding locks", "High cycle-rate industrial reliability"],
    imageFolder: "drop_lifts",
    images: ["/images/services/drop_lifts/1.png", "/images/services/drop_lifts/2.png", "/images/services/drop_lifts/3.png", "/images/services/drop_lifts/4.png"],
  },

  // 11. Booth
  {
    slug: "booths",
    title: "Industrial Spray Booths & Enclosures",
    shortTitle: "Spray Booths",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Automotive topcoat, primer, and clearcoat spray booths including water-wash, Hydrospin, dry-filtration, and downdraft designs.",
    description: "UNIQUE ENGINEERS has installed over 75+ turnkey paint booths across India's leading vehicle plants. We handle modular insulated wall panel assembly, ceiling plenum filter diffusion grids, grating floors, downdraft water pans, sludge flumes, and under-floor water-wash vortex chambers.",
    scopeOfWork: [
      "Modular insulated sandwich panel booth enclosure assembly",
      "Ceiling plenum installation with micro-filtration diffusion media",
      "Underfloor steel grating, sub-floor water wash pans, and vortex tubes",
      "Hydrospin and dry-filter overspray separation chamber assembly",
      "Airlock entry/exit vestibules, high-lux explosion-proof LED lighting",
    ],
    keyFeatures: ["Laminar downdraft air velocity compliance", "Non-silicone airtight wall sealing", "Integrated Hydrospin sludge separation compatibility", "ATEX / Flameproof lighting integration"],
    imageFolder: "booths",
    images: ["/images/services/booths/1.png", "/images/services/booths/2.png", "/images/services/booths/3.png", "/images/services/booths/4.png"],
    featured: true,
  },

  // 12. Oven
  {
    slug: "ovens",
    title: "Industrial Curing & Drying Ovens",
    shortTitle: "Curing Ovens",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Gas-fired, electrical, and thermic fluid convection curing ovens with high-temperature air seals, turbulators, and insulated panels.",
    description: "Baking automotive electrocoat and clearcoat requires uniform thermal profiles without hot or cold spots. We erect high-density rockwool insulated panel bodies, heat-distribution ductwork, air-seal curtain hoods at openings, recirculating blower fans, and combustion burner chambers.",
    scopeOfWork: [
      "High-density tongue-and-groove rockwool panel assembly (up to 250°C rating)",
      "Internal recirculating distribution ducting with adjustable turbulator nozzles",
      "Entrance and exit air-seal curtain blowers preventing heat escape into plant",
      "Burner chamber mounting, gas train integration, and high-temp expansion joints",
      "Thermal mapping calibration support to ensure uniform bake curves",
    ],
    keyFeatures: ["Zero-thermal-bridge tongue-and-groove panel design", "High-velocity air-seal curtains at entry/exit", "Uniform heat curve distribution across vehicle bodies", "Rated for continuous operation up to 250°C"],
    imageFolder: "oven",
    images: ["/images/services/oven/1.png", "/images/services/oven/2.png", "/images/services/oven/3.png", "/images/services/oven/4.png"],
    featured: true,
  },

  // 13. Motors Fans and Plant Machinery
  {
    slug: "motors-fans-and-plant-machinery",
    title: "Industrial Heavy Blowers, Exhaust Fans & Motors",
    shortTitle: "Fans & Machinery",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Installation, dynamic balancing, and vibration-isolated mounting of heavy centrifugal blowers, plug fans, and high-capacity electric motors.",
    description: "Maintaining thousands of CFM of air movement demands precision rotating equipment installation. We mount heavy centrifugal supply and exhaust blowers on inertia concrete blocks with spring dampers, laser-align electric drive shafts, and perform initial dynamic balancing and sound attenuation.",
    scopeOfWork: [
      "Heavy centrifugal blower placement, inertia block anchoring, and spring vibration isolators",
      "High-capacity electric motor mounting and laser shaft alignment",
      "Belt drive pulley tensioning, flexible canvas duct connection sleeves",
      "Dynamic balancing verification and bearing temperature monitoring",
      "Acoustic attenuator baffles and sound-dampening enclosure installation",
    ],
    keyFeatures: ["Laser-guided precision shaft alignment", "Spring and inertia block vibration isolation", "High CFM capacity across paint supply and exhaust", "Complete dynamic balance verification"],
    imageFolder: "motor_fans",
    images: ["/images/services/motor_fans/1.png", "/images/services/motor_fans/2.png", "/images/services/motor_fans/3.png", "/images/services/motor_fans/4.png"],
  },

  // 14. Non Silicone PVC and EPDM Gaskets
  {
    slug: "non-silicone-pvc-and-epdm-gaskets",
    title: "Specialized Non-Silicone PVC & EPDM Rubber Gaskets",
    shortTitle: "Non-Silicone Gaskets",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Manufacturing and custom supply of certified non-silicone, anti-cratering PVC and EPDM extruded sealing profiles for automotive paint shops.",
    description: "Silicone traces inside an automotive paint shop cause disastrous cratering and fisheye defects in freshly painted finishes. UNIQUE ENGINEERS manufactures and supplies 100% silicone-free, paint-compatible PVC and ethylene propylene diene monomer (EPDM) gaskets, edge trims, and door seals certified for paint shop purity.",
    scopeOfWork: [
      "Custom extrusion of silicone-free PVC and EPDM rubber sealing profiles",
      "High-temperature oven door seals capable of continuous 220°C endurance",
      "Booth wall panel interlock seals, inspection window gaskets, and duct flanges",
      "Batch certification guaranteeing zero silicone or crater-forming chemistry",
      "Custom cut-to-length profiles and vulcanized corner joint frames",
    ],
    keyFeatures: ["100% Certified Silicone-Free (zero paint craters)", "High thermal resistance up to 220°C for ovens", "Weather, chemical, and ozone resistant EPDM", "Custom extruded cross-sections for plant doors & ducts"],
    imageFolder: "silicon_pvc",
    images: ["/images/services/silicon_pvc/1.png", "/images/services/silicon_pvc/2.png", "/images/services/silicon_pvc/3.png", "/images/services/silicon_pvc/4.png"],
  },

  // 15. Painting Robot
  {
    slug: "painting-robots",
    title: "Painting Robot Erection, Mounting & Commissioning",
    shortTitle: "Painting Robots",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "High-precision structural mounting, booth rail integration, and mechanical installation of robotic painting arms (ABB, Dürr, Fanuc).",
    description: "Having installed over 500+ robotic cells across India, UNIQUE ENGINEERS brings specialized experience in positioning, leveling, and anchoring multi-axis articulated painting and sealing robots. We erect booth wall mounts, tracking rails, umbilical cable trays, and atomizing bell purge stations.",
    scopeOfWork: [
      "Precision base plate leveling and anchoring with high-strength non-shrink grout",
      "Booth wall and overhead rail tracking system mechanical erection",
      "Robot manipulator mechanical placement using specialized clean rigging",
      "Routing of flexible energy chains, paint fluid lines, and electrical umbilicals",
      "Integration of bell flush boxes, tip cleaners, and paint kitchen dosing headers",
    ],
    keyFeatures: ["500+ Robot installation track record", "Sub-millimeter tracking rail alignment", "Cleanroom-standard rigging practices", "Compatible with ABB, Dürr, Fanuc, and Yaskawa systems"],
    imageFolder: "painting_robot",
    images: ["/images/services/painting_robot/1.png", "/images/services/painting_robot/2.png", "/images/services/painting_robot/3.png", "/images/services/painting_robot/4.png"],
    featured: true,
  },

  // 16. Aluminum Doors and Windows
  {
    slug: "aluminum-doors-and-windows",
    title: "Specialized Cleanroom Industrial Doors & Windows",
    shortTitle: "Doors & Windows",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Air-sealed aluminum industrial doors, observation windows, airlock access portals, and rapid roll-up door frames.",
    description: "Maintaining strict pressure differentials inside cleanroom paint facilities requires precision aluminum door and frame installations. We supply and install heavy-duty anodized and powder-coated aluminum doors with double-glazed flush vision panels, perimeter non-silicone seals, and panic hardware.",
    scopeOfWork: [
      "Fabrication & installation of heavy-gauge extruded aluminum doors and frames",
      "Flush double-glazed vision panels with silica-gel desiccant spacing",
      "Perimeter airtight non-silicone neoprene seals for cleanroom pressure retention",
      "Heavy-duty industrial door closers, magnetic interlocks, and panic release bars",
      "Observation window frames along visitor inspection corridors",
    ],
    keyFeatures: ["Air-tight perimeter sealing for pressure differentials", "Flush cleanroom-grade vision glazing", "Heavy-duty industrial grade hinges and closers", "Non-silicone gasketed frames"],
    imageFolder: "aluminium_doors",
    images: ["/images/services/aluminium_doors/1.png", "/images/services/aluminium_doors/2.png", "/images/services/aluminium_doors/3.png", "/images/services/aluminium_doors/4.png"],
  },

  // 17. Air supply units
  {
    slug: "air-supply-units",
    title: "Air Supply Units (ASU) & Recirculation Units (ARU)",
    shortTitle: "Air Supply Units",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Turnkey installation of high-capacity Air Supply Units (ASU) and Air Recirculation Units (ARU) with heating, cooling, and multi-stage filtration.",
    description: "Supplying massive volumes of thermally stable, moisture-controlled, and dust-free air to paint booths is critical to achieving Class-A automotive finishes. We handle rooftop and mezzanine placement of multi-section ASUs, chilled water cooling coils, gas burner heating sections, steam humidifiers, and multi-stage filter banks.",
    scopeOfWork: [
      "Rigging & multi-section assembly of heavy modular Air Supply Units",
      "Chilled water piping, steam/gas heating coil integration, and condensate drains",
      "Installation of pre-filter, pocket filter, and final HEPA diffusion filter racks",
      "Air intake louvers, bird screens, and motorized modulating volume dampers",
      "Airflow balancing and differential pressure transmitter integration",
    ],
    keyFeatures: ["Turnkey placement of units up to 100,000+ CFM", "Integrated heating, cooling, and humidity control", "Multi-tier cleanroom filtration (G4, F7, F9, HEPA)", "Air-tight thermal break panel housing"],
    imageFolder: "air_supply",
    images: ["/images/services/air_supply/1.png", "/images/services/air_supply/2.png", "/images/services/air_supply/3.png", "/images/services/air_supply/4.png"],
  },

  // 18. Erection and Commissioning
  {
    slug: "erection-and-commissioning",
    title: "Turnkey Mechanical Erection & Plant Commissioning",
    shortTitle: "Erection & Commissioning",
    category: "plant-operations",
    categoryName: "Plant Operations & Maintenance",
    summary: "Comprehensive site management, heavy rigging, mechanical erection, cold trials, and hot commissioning for greenfield and brownfield plants.",
    description: "From the arrival of raw equipment crates to the first successful production car body, UNIQUE ENGINEERS provides the seasoned leadership, certified riggers, fitters, and welders needed to execute projects on aggressive timelines without compromising safety or quality.",
    scopeOfWork: [
      "Site logistics planning, crane coordination, uncrating, and equipment inspection",
      "Turnkey mechanical assembly of complex production lines per OEM drawings",
      "Laser alignment of rotating drives, guide tracks, and transfer mechanisms",
      "Cold mechanical dry-run trials, sensor verification, and pneumatic testing",
      "Hot commissioning production support alongside client engineering teams",
    ],
    keyFeatures: ["Experienced site managers with 25+ years hands-on track record", "Comprehensive site tooling, rigging gear, and heavy cranes", "Zero casualty safety protocol enforced daily", "Seamless coordination with global EPC project managers"],
    imageFolder: "ercection_commissioning",
    images: ["/images/services/ercection_commissioning/1.png", "/images/services/ercection_commissioning/2.png", "/images/services/ercection_commissioning/3.png", "/images/services/ercection_commissioning/4.png"],
    featured: true,
  },

  // 19. Paint Shop Enclosures
  {
    slug: "paint-shop-enclosures",
    title: "Cleanroom Clean Wall Enclosures & Vestibules",
    shortTitle: "Paint Shop Enclosures",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Insulated sandwich panel cleanroom enclosures, inspection tunnels, air showers, and wipe-down clean zones.",
    description: "Protecting vehicle bodies as they transition between preparation, primer, topcoat, and oven zones demands continuous cleanroom enclosures. We erect modular flush-joint sandwich panels, illuminated inspection light tunnels with high-CRI fixtures, and pressurized airlock vestibules.",
    scopeOfWork: [
      "Erection of clean-skin insulated wall and ceiling panels with flush jointing",
      "Air shower vestibules and high-velocity de-ionizing dust-blow chambers",
      "Quality audit inspection tunnels with reflection lighting arrays",
      "Airtight silicone-free sealant application along all structural perimeters",
      "Floor coving and flush base channel profiles to eliminate dust traps",
    ],
    keyFeatures: ["Dust-free coved cleanroom detailing", "High-CRI reflection lighting for surface defect inspection", "Negative/positive pressure containment", "Smooth wash-down surface panels"],
    imageFolder: "paint_shop",
    images: ["/images/services/paint_shop/1.png", "/images/services/paint_shop/2.png", "/images/services/paint_shop/3.png", "/images/services/paint_shop/4.png"],
  },

  // 20. Critical Shut Down Jobs
  {
    slug: "critical-shutdown-jobs",
    title: "Critical Plant Shutdown Overhauls & Fast-Track Revamps",
    shortTitle: "Critical Shutdowns",
    category: "plant-operations",
    categoryName: "Plant Operations & Maintenance",
    summary: "Round-the-clock 24/7 rapid overhaul, modification, and re-commissioning executed during compressed annual factory shutdowns.",
    description: "When an automotive plant halts production for a 7 to 14-day holiday shutdown, there is zero margin for delay. UNIQUE ENGINEERS mobilizes multi-shift crews of up to 100+ skilled fitters, welders, and riggers to execute complex modifications, tank replacements, and conveyor overhauls ahead of production restart.",
    scopeOfWork: [
      "Pre-shutdown site staging, off-site pre-fabrication, and step-by-step hour planning",
      "24/7 multi-shift dismantling of outdated tanks, ducts, and conveyor tracks",
      "Rapid rigging and installation of pre-fabricated structural sections",
      "Piping tie-ins, valve replacements, and high-pressure system testing",
      "Final cold trials and sign-off before the client's scheduled first-shift startup",
    ],
    keyFeatures: ["Proven track record across 200+ fast-track shutdowns", "24/7 round-the-clock shift capability", "Pre-fabrication strategies to compress site hours", "Zero startup delay record on production restart"],
    imageFolder: "critical_shutdown",
    images: ["/images/services/critical_shutdown/1.png", "/images/services/critical_shutdown/2.png", "/images/services/critical_shutdown/3.png", "/images/services/critical_shutdown/4.png"],
    featured: true,
  },

  // 21. Toughened Glasses
  {
    slug: "toughened-glasses",
    title: "Certified Toughened, Safety Laminated & Fire Resistant Glass Supply",
    shortTitle: "Toughened Glass",
    category: "paint-finishing",
    categoryName: "Paint Finishing Systems",
    summary: "Supply and installation of certified high-strength toughened glass and laminated safety glass for spray booth viewing panels and cleanrooms.",
    description: "Inspection windows in paint spray booths and cleanrooms must provide distortion-free optical clarity while withstanding thermal variations, chemical overspray, and high pressure washdowns. We supply and install custom-cut tempered and laminated safety glass with silicone-free mounting seals.",
    scopeOfWork: [
      "Supply of certified ISI-marked tempered safety glass (6mm to 19mm)",
      "Multi-layer PVB laminated safety glass for explosion-relief and sound insulation",
      "Chemical-resistant and scratch-resistant surface treatment",
      "Non-silicone gasketed mounting in aluminum and stainless steel frames",
      "Precision on-site handling using vacuum suction lifting gear",
    ],
    keyFeatures: ["Certified shatter-proof safety performance", "Chemical & solvent overspray resistance", "Non-silicone mounting gaskets", "Crystal-clear optical inspection viewing"],
    imageFolder: "toughed_glass",
    images: ["/images/services/toughed_glass/1.png", "/images/services/toughed_glass/2.png", "/images/services/toughed_glass/3.png", "/images/services/toughed_glass/4.png"],
  },

  // 22. Plant Shifting and Re-location
  {
    slug: "plant-shifting-and-relocation",
    title: "Turnkey Plant Shifting, Dismantling & Factory Re-location",
    shortTitle: "Plant Shifting",
    category: "plant-operations",
    categoryName: "Plant Operations & Maintenance",
    summary: "End-to-end factory relocation: systematic tagging, match-marking, careful dismantling, logistics, structural re-erection, and re-commissioning.",
    description: "Moving an industrial plant between cities requires exceptional engineering discipline. Our teams methodically document wiring and piping, match-mark structural steel, safely unbolt equipment, coordinate specialized transport, and rebuild the entire facility at the destination site.",
    scopeOfWork: [
      "Pre-dismantling dimensional surveying, laser scanning, and match-marking",
      "Careful mechanical and electrical de-coupling, fluid drainage, and protective crating",
      "Heavy equipment rigging, loading, and over-dimensional cargo (ODC) coordination",
      "Structural re-fabrication, foundation re-anchoring, and alignment at new site",
      "Full utility re-piping, electrical reconnection, and turnkey re-commissioning",
    ],
    keyFeatures: ["20+ Complete plant relocations executed across India", "Match-mark cataloging system preventing assembly confusion", "Structural re-strengthening and modernization during re-erection", "Seamless turnkey delivery from origin to operational handover"],
    imageFolder: "plant_shifting",
    images: ["/images/services/plant_shifting/1.png", "/images/services/plant_shifting/2.png", "/images/services/plant_shifting/3.png", "/images/services/plant_shifting/4.png"],
  },

  // 23. Fire Fighting Systems
  {
    slug: "fire-fighting-systems",
    title: "Industrial Fire Fighting Systems & Sprinkler Networks",
    shortTitle: "Fire Fighting Systems",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "Industrial fire hydrant piping, automatic sprinkler systems, CO2 / deluge spray networks for paint booths, and pumphouse installations.",
    description: "Flammable solvent paints and high-temperature curing ovens demand uncompromising fire protection. We fabricate and install heavy-duty fire hydrant lines, quick-response deluge spray systems inside paint spray zones, CO2 gas suppression systems for electrical rooms, and diesel fire pump headers.",
    scopeOfWork: [
      "Fabrication & high-pressure welding of fire hydrant and sprinkler mains",
      "Automatic deluge spray and dry chemical suppression in paint booths",
      "CO2 flooding systems for electrical control rooms and paint mix kitchens",
      "Fire pump skid installation, jockey pump headers, and pressure relief valves",
      "Hydrostatic testing at 1.5x working pressure and statutory fire authority compliance",
    ],
    keyFeatures: ["NFPA and Tariff Advisory Committee (TAC) compliance", "High-velocity deluge spray for solvent hazards", "Rigorous hydrostatic pressure certification", "Seamless integration with plant emergency shutdowns"],
    imageFolder: "fighting_systems",
    images: ["/images/services/fighting_systems/1.png", "/images/services/fighting_systems/2.png", "/images/services/fighting_systems/3.png", "/images/services/fighting_systems/4.png"],
  },

  // 24. Piping
  {
    slug: "piping",
    title: "Process & Utility Piping Networks (SS, MS & Gas)",
    shortTitle: "Process & Utility Piping",
    category: "structural-piping",
    categoryName: "Structural Fabrication & Piping",
    summary: "High-integrity stainless steel (SS 304/316L) process piping, compressed air, paint circulation loops, chilled water, and industrial gas lines.",
    description: "From recirculating paint slurry at exact shears without settling to cross-country API SPEC 5L gas pipelines, UNIQUE ENGINEERS provides certified pipe fabricators and argon (TIG) welders for flawless, leak-free industrial fluid and gas transportation.",
    scopeOfWork: [
      "Sanitary & orbital TIG welding of SS 304/316L paint circulation loops",
      "High-pressure chilled water, cooling tower, and steam condensate headers",
      "Heavy carbon steel compressed air loops with zero-droplet moisture separators",
      "City Gas Distribution (CGD) and underground NGPL API SPEC 5L gas piping",
      "Non-destructive testing (NDT), radiography, dye-penetrant, and hydrostatic trials",
    ],
    keyFeatures: ["Tested & Certified Argon (TIG) and Arc Welders", "Mirror-finish SS paint circulation loops", "Underground trenching and API SPEC 5L pipeline execution", "Comprehensive radiographic & hydrostatic testing"],
    imageFolder: "piping",
    images: ["/images/services/piping/1.png", "/images/services/piping/2.png", "/images/services/piping/3.png", "/images/services/piping/4.png"],
    featured: true,
  },
];

