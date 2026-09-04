export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "full-interior-design",
    number: "01",
    title: "Full Interior Design",
    summary:
      "A complete design service from first conversation through final styling.",
    details: ["Concept direction", "Space planning", "Procurement", "Site coordination"],
  },
  {
    id: "interior-styling",
    number: "02",
    title: "Interior Styling",
    summary:
      "A refined finishing layer for homes, rental properties, photoshoots, and sale preparation.",
    details: ["Furniture edit", "Art and objects", "Textile layering", "Final installation"],
  },
  {
    id: "kitchen-bath",
    number: "03",
    title: "Kitchen & Bath Design",
    summary:
      "Technical, material, and supplier coordination for high-performance rooms.",
    details: ["Layout drawings", "Fixtures and finishes", "Lighting", "Supplier liaison"],
  },
  {
    id: "commercial-spaces",
    number: "04",
    title: "Commercial Spaces",
    summary:
      "Brand-coherent interiors for offices, retail environments, and hospitality spaces.",
    details: ["Workplace planning", "Hospitality FF&E", "Retail flow", "Brand touchpoints"],
  },
  {
    id: "design-consultation",
    number: "05",
    title: "Design Consultation",
    summary:
      "Focused working sessions to clarify direction, solve spatial issues, and create an action plan.",
    details: ["Two-hour session", "Design audit", "Material guidance", "Roadmap notes"],
  },
];
