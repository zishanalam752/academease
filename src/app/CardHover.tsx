import { HoverEffect } from "../components/ui/card-hover-effect";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 overflow-hidden">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "COE & IT",
    description:
      "Shape the future with COE & IT: Innovation, Technology, Possibilities.",
    link: "/coe",
  },
  {
    title: "ECE",
    description:
      "Connect the world through ECE: Signals, Communication, Technological Advancements.",
    link: "/ece",
  },
  {
    title: "Electrical",
    description:
      "Power the world with EEE: Electricity, Systems, Sustainable Solutions.",
    link: "/elect",
  },
  {
    title: "Civil",
    description:
      "Build the world around us: Infrastructure, Structures, Sustainable Development.",
    link: "/civil",
  },
  {
    title: "Production",
    description:
      "Transform ideas into reality: Optimization, Efficiency, Manufacturing.",
    link: "/pi",
  },
  {
    title: "Mechanical",
    description:
      "Engineer the future: Machines, Innovation, Mechanical Systems, Manufacturing.",
    link: "/mech",
  },
];
