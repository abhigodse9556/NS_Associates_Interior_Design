export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  completionYear: string;
  projectType: string;
  scope: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "whitmore-residence",
    title: "The Whitmore Residence",
    slug: "whitmore-residence",
    category: "Residential",
    location: "Satara, UK",
    summary:
      "A quiet full-home renovation shaped around warm stone, tailored joinery, and generous entertaining.",
    description:
      "A heritage flat reworked for contemporary family life, balancing original architectural detail with calmer spatial flow and tactile finishes. The result is polished without feeling staged, with storage, lighting, and furniture plans tuned to everyday rituals.",
    coverImage:
      "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?w=1400&h=1000&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?w=1200&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&h=1100&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?w=1100&h=900&fit=crop&auto=format",
    ],
    completionYear: "2024",
    projectType: "Full Home",
    scope: [
      "Space planning",
      "Bespoke joinery",
      "Furniture curation",
      "Site styling",
    ],
    stats: [
      { label: "Rooms", value: "8" },
      { label: "Duration", value: "9 mo" },
      { label: "Area", value: "2,400 sq ft" },
    ],
  },
  {
    id: "vantage-penthouse",
    title: "Vantage Penthouse",
    slug: "vantage-penthouse",
    category: "Residential",
    location: "New York, US",
    summary:
      "A city penthouse staged with softened edges, sculptural furniture, and a restrained material palette.",
    description:
      "Designed for a fast-moving property sale, this penthouse needed atmosphere without excess. We edited the plan, layered natural materials, and created distinct lounge, dining, and retreat moments while preserving open skyline views.",
    coverImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&h=1200&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=1000&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1684928365167-e91916573122?w=1000&h=900&fit=crop&auto=format",
    ],
    completionYear: "2024",
    projectType: "Penthouse Styling",
    scope: [
      "Interior styling",
      "Art placement",
      "Lighting selection",
      "Sale presentation",
    ],
    stats: [
      { label: "Level", value: "34" },
      { label: "Duration", value: "8 wk" },
      { label: "Result", value: "Sold" },
    ],
  },
  {
    id: "studio-norde",
    title: "Studio Norde",
    slug: "studio-norde",
    category: "Commercial",
    location: "Copenhagen, DK",
    summary:
      "A work studio designed for focused production, client hosting, and a stronger brand presence.",
    description:
      "Studio Norde required a workplace that could shift between team concentration and client presentation. We used acoustic softness, custom worktables, and a calm material system to make the office feel composed throughout the day.",
    coverImage:
      "https://images.unsplash.com/photo-1684928365167-e91916573122?w=1100&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1684928365167-e91916573122?w=1200&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1000&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=1200&h=800&fit=crop&auto=format",
    ],
    completionYear: "2023",
    projectType: "Office",
    scope: [
      "Workplace strategy",
      "Material palette",
      "Furniture procurement",
      "Brand detailing",
    ],
    stats: [
      { label: "Desks", value: "28" },
      { label: "Duration", value: "5 mo" },
      { label: "Zones", value: "6" },
    ],
  },
  {
    id: "chateau-lumiere",
    title: "Chateau Lumiere",
    slug: "chateau-lumiere",
    category: "Residential",
    location: "Bordeaux, FR",
    summary:
      "A country estate refreshed with layered textiles, antique sourcing, and updated private suites.",
    description:
      "This estate project asked for respect rather than reinvention. We restored proportion, introduced softer furnishings, and built a sourcing story around vintage pieces that could live comfortably beside contemporary necessities.",
    coverImage:
      "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=1100&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1648881806148-e5c51179c826?w=1100&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?w=1100&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?w=1200&h=900&fit=crop&auto=format",
    ],
    completionYear: "2023",
    projectType: "Estate",
    scope: [
      "Historic interiors",
      "Antique sourcing",
      "Textile design",
      "Guest suites",
    ],
    stats: [
      { label: "Suites", value: "5" },
      { label: "Duration", value: "11 mo" },
      { label: "Pieces", value: "70+" },
    ],
  },
  {
    id: "the-alderton",
    title: "The Alderton",
    slug: "the-alderton",
    category: "Hospitality",
    location: "Edinburgh, UK",
    summary:
      "A boutique hotel suite concept combining durable hospitality details with private-residence warmth.",
    description:
      "For The Alderton, we designed a suite system that could be repeated without feeling formulaic. Hardwearing materials, layered lighting, and deep color moments create rooms that feel personal, memorable, and operationally practical.",
    coverImage:
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=1400&h=850&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=1400&h=850&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1000&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&h=1200&fit=crop&auto=format",
    ],
    completionYear: "2023",
    projectType: "Hotel Suite",
    scope: ["Guest room concept", "FF&E", "Lighting", "Operational detailing"],
    stats: [
      { label: "Keys", value: "18" },
      { label: "Duration", value: "7 mo" },
      { label: "Scheme", value: "Repeatable" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.slice(0, 5);
}
