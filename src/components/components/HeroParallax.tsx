"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const certifications = [
  {
    title: "Huawei HCIA-AI V 3.5",
    link: "https://e.huawei.com/en/talent/ict-academy/",
    thumbnail:
      "/document/certifications/Huawei_HCIAAI.jpeg",
  },
  {
    title: "Oracle Database Programming",
    link: "https://academy.oracle.com/",
    thumbnail:
      "/document/certifications/Oracle_SqlDb.jpeg",
  },
  {
    title: "Ruang Guru AI Automation Mastery",
    link: "https://www.ruangguru.com/rea",
    thumbnail:
      "/document/certifications/RG_AiAutomation.jpeg",
  }
];

export default function HeroCertifications() {
  return <HeroParallax products={certifications} />;
}
