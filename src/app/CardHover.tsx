import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "COE & IT",
    description:
      "Shape the future with COE & IT: Innovation, Technology, Possibilities.",
    link: "https://stripe.com",
  },
  {
    title: "ECE",
    description:
      "Connect the world through ECE: Signals, Communication, Technological Advancements.",
    link: "https://netflix.com",
  },
  {
    title: "Electrical",
    description:
      "Power the world with EEE: Electricity, Systems, Sustainable Solutions.",
    link: "https://google.com",
  },
  {
    title: "Civil",
    description:
      "Build the world around us: Infrastructure, Structures, Sustainable Development.",
    link: "https://meta.com",
  },
  {
    title: "Production",
    description:
      "Transform ideas into reality: Optimization, Efficiency, Manufacturing.",
    link: "https://amazon.com",
  },
  {
    title: "Mechanical",
    description:
      "Engineer the future: Machines, Innovation, Mechanical Systems, Manufacturing.",
    link: "https://microsoft.com",
  },
];
