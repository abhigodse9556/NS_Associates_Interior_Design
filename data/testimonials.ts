export interface Testimonial {
  quote: string;
  name: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They transformed our flat into something we did not dare imagine. Every detail was considered, and the process felt effortless from our side.",
    name: "Sarah & James Whitmore",
    project: "Whitmore Residence, Satara",
  },
  {
    quote:
      "The studio translated who we are into a workplace people now want to spend time in. Clients notice the difference immediately.",
    name: "Henrik Larsen",
    project: "Studio Norde, Copenhagen",
  },
  {
    quote:
      "Working with Forma was the single best investment in the property. The penthouse sold in four days at asking price.",
    name: "Marina Volkov",
    project: "Vantage Penthouse, New York",
  },
];
