export interface WorkforceRole {
  role: string;
  count: string;
  category: "management" | "technical" | "support" | "welding";
  description?: string;
}

export interface EquipmentItem {
  name: string;
  specification: string;
  quantity: string;
  category: "welding" | "grinding" | "drilling" | "lifting";
}

export interface SafetyStat {
  title: string;
  description: string;
  detail: string;
}

export const workforceData: WorkforceRole[] = [
  { role: "Site Managers", count: "7+", category: "management", description: "Turnkey project execution & site leadership" },
  { role: "Site Supervisors", count: "10+", category: "management", description: "Daily operations, quality & progress tracking" },
  { role: "Safety Officers", count: "5+", category: "management", description: "EHS compliance, toolbox talks, PPE monitoring" },
  { role: "Electrical & Mechanical Fitters", count: "25+", category: "technical", description: "Precision mechanical alignment & electrical integration" },
  { role: "Semi-Fitters", count: "30+", category: "technical", description: "Structural assembly & fabrication support" },
  { role: "Piping Fitters", count: "10+", category: "technical", description: "Process, utility & high-pressure gas pipelines" },
  { role: "Riggers", count: "70+", category: "support", description: "Heavy crane lifting, high-altitude positioning" },
  { role: "Helpers", count: "90+", category: "support", description: "General site logistics, material movement" },
  { role: "Arc Welders (Certified)", count: "20+", category: "welding", description: "Tested & certified for structural and pipe welding" },
  { role: "Argon / TIG Welders (Certified)", count: "15+", category: "welding", description: "High-integrity stainless steel and utility lines" },
  { role: "CO₂ / MIG Welders (Certified)", count: "7+", category: "welding", description: "High-speed structural and plate fabrication" },
];

export const equipmentFleetData: EquipmentItem[] = [
  // Welding
  { name: "Arc Welding Machines", specification: "200 A / 400 A", quantity: "20 nos", category: "welding" },
  { name: "MIG Welding Machines", specification: "400 A", quantity: "5 nos", category: "welding" },
  { name: "TIG / Arc Welding Machines", specification: "250 A", quantity: "25 nos", category: "welding" },
  { name: "Hot Gas Cutters", specification: "Industrial Grade", quantity: "15 nos", category: "welding" },

  // Grinding & Cutting
  { name: "Angular Grinders", specification: '4" Diameter', quantity: "40 nos", category: "grinding" },
  { name: "Heavy Angular Grinders", specification: '7" Heavy-Duty', quantity: "25 nos", category: "grinding" },
  { name: "Chop Saw Machines", specification: '14" Heavy Cutting', quantity: "10 nos", category: "grinding" },
  { name: "Chop Saw Cutters", specification: '4" Cutting', quantity: "10 nos", category: "grinding" },

  // Drilling & Power Tools
  { name: "Electric Drill Machines", specification: "10 / 13 mm Chuck", quantity: "30 nos", category: "drilling" },
  { name: "Hammering Drill / Breakers", specification: "32 mm Capacity", quantity: "15 nos", category: "drilling" },
  { name: "Air Compressors", specification: "1 / 2 / 5 HP Industrial", quantity: "3 nos", category: "drilling" },

  // Lifting Equipment
  { name: "Chain Pulley Blocks (1 Ton)", specification: "1 T Rated Capacity", quantity: "20 nos", category: "lifting" },
  { name: "Chain Pulley Blocks (2 Ton)", specification: "2 T Rated Capacity", quantity: "15 nos", category: "lifting" },
  { name: "Chain Pulley Blocks (3 Ton)", specification: "3 T Rated Capacity", quantity: "15 nos", category: "lifting" },
  { name: "Chain Pulley Blocks (5 Ton)", specification: "5 T Heavy Industrial", quantity: "7 nos", category: "lifting" },
];

export const safetyComplianceData: SafetyStat[] = [
  {
    title: "Zero Safety Casualties",
    description: "Since 1999 till date, maintaining 100% casualty-free execution across 500+ industrial sites.",
    detail: "Zero Casualties Record",
  },
  {
    title: "Fall Protection & Height Safety",
    description: "140 Full Body Harness Arrestors and 20 sets of 100m Life Lines for overhead and chimney work.",
    detail: "140 Harnesses · 20 Life Lines",
  },
  {
    title: "Fire Protection Equipment",
    description: "60 ABC Fire Extinguishers, ISO Certified Fire Blankets, Sand Buckets, and industrial Hose Reels.",
    detail: "60 Extinguishers · ISO Blankets",
  },
  {
    title: "Non-Toxic & Silicone-Free Compliance",
    description: "All tools, materials, and consumables are 100% silicone-free and non-toxic per automotive paint shop standards.",
    detail: "100% Paint-Shop Compliant",
  },
  {
    title: "Full PPE Protocol",
    description: "Mandatory ISI-marked hard hats, ear protection, face visors, anti-glare safety glasses, and heat-resistant welding gloves.",
    detail: "100% ISI-Marked Gear",
  },
  {
    title: "Statutory Workforce Compliance",
    description: "All site personnel are legally registered and insured under ESIC and Provident Fund (PF).",
    detail: "ESIC & PF Insured Workforce",
  },
];

