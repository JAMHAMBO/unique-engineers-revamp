export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  foundingYear: number;
  yearsOfExperience: string;
  projectsDelivered: string;
  majorClientsCount: string;
  workforceCount: string;
  safetyRecord: string;
  safetyMandays: string;
  keyContact: {
    name: string;
    designation: string;
    phone: string;
    alternatePhone: string;
    officePhone: string;
    email: string;
    whatsappUrl: string;
  };
  generalEmail: string;
  registeredOffice: {
    title: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  worksAddress: {
    title: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  registrations: {
    gst: string;
    esic: string;
    pf: string;
  };
}

export const companyData: CompanyInfo = {
  name: "UNIQUE ENGINEERS",
  legalName: "UNIQUE ENGINEERS",
  tagline: "Fabrication & Installation Contractors · Automotive Paint Finishing Systems",
  foundingYear: 1999,
  yearsOfExperience: "25+",
  projectsDelivered: "500+",
  majorClientsCount: "50+",
  workforceCount: "200+",
  safetyRecord: "ZERO Safety Casualties",
  safetyMandays: "7,500+",
  keyContact: {
    name: "Mr. Murtaza",
    designation: "Proprietor · Business Development",
    phone: "+91 99205 55852",
    alternatePhone: "+91 88507 98923",
    officePhone: "022-4003 6552",
    email: "murtaza@uniqueengineers.com",
    whatsappUrl: "https://wa.me/919920555852?text=Hello%20Mr.%20Murtaza,%20I%20am%20inquiring%20about%20turnkey%20engineering%20services%20from%20UNIQUE%20ENGINEERS.",
  },
  generalEmail: "info@uniqueengineers.com",
  registeredOffice: {
    title: "Registered Head Office",
    addressLine1: "1st Floor, 213 Bora Bazar Street",
    addressLine2: "Opp. Jain Mandir, Near CST Railway Station, Fort",
    city: "Mumbai",
    pincode: "400 001",
    state: "Maharashtra",
    country: "India",
    fullAddress:
      "1st Floor, 213 Bora Bazar Street, Opp. Jain Mandir, Near CST Railway Station, Fort, Mumbai – 400 001, Maharashtra, India",
  },
  worksAddress: {
    title: "Works & Fabrication Facility",
    addressLine1: "Gram Panchayat Kalivali, Survey 32 & 33, Hissa-1A",
    addressLine2: "Priya Complex, Gala-106, Zakat Naka",
    city: "Bhiwandi",
    pincode: "421 302",
    state: "Maharashtra",
    country: "India",
    fullAddress:
      "Gram Panchayat Kalivali, Survey 32 & 33, Hissa-1A, Priya Complex, Gala-106, Zakat Naka, Bhiwandi – 421 302, Maharashtra, India",
  },
  registrations: {
    gst: "27ABYPT2014L1Z1",
    esic: "31000584400000599",
    pf: "MH/125486",
  },
};

/** Converts a display phone number (e.g. "+91 99205 55852") into a `tel:` href. */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

/** WhatsApp number in wa.me format (digits only), derived from the primary contact phone. */
export const whatsappNumber = companyData.keyContact.phone.replace(/\D/g, "");

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

