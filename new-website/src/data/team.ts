export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  education: string;
  background: string;
  expertise: string[];
  keyProjects?: string[];
  email?: string;
  isExecutive?: boolean;
}

export const teamData: TeamMember[] = [
  {
    name: "Mr. Murtaza",
    role: "Proprietor · Business Development & Commercials",
    experience: "25+ Years Leadership",
    education: "Engineering & Industrial Management",
    background:
      "Leads UNIQUE ENGINEERS' nationwide strategic operations, client engagements, and turnkey execution contracts across leading automotive OEMs and global EPC technology suppliers.",
    expertise: [
      "Turnkey Paint Finishing Contracting",
      "EPC Collaborations (Dürr, Eisenmann, TEIL, Taikisha, Bullows, GEICO)",
      "Multi-Site Resource Mobilization & Fast-Track Shutdowns",
      "Commercial Tendering & Client Relations",
    ],
    email: "murtaza@uniqueengineers.com",
    isExecutive: true,
  }
];