"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `At AcademEase, we revolutionize student life by offering attendance tracking, job/internship updates, study materials, and an anonymous faculty review system. Empowering student success, one click at a time.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
