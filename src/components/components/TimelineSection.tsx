import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="space-y-3">
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Frontend Developer — Novaren
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Developed the APIIKS mood-tracking web app and a CRM system for PT
              Inviro, improving efficiency by up to 40% and optimizing
              accessibility across devices.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Assistant Lecturer — Proyek Aplikasi Dasar, UGM
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Mentored student developer teams in fundamental application
              development, improving code quality and project success rate by
              30%.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Freelance Frontend Developer — Semesta Data Digital
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Built and launched a company profile website that increased client
              inquiries by 25% through improved design and responsiveness.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Vice Head of Huminfo — Gamatiga UGM
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Managed creative media and social campaigns, improving
              communication and engagement among 200+ members.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Hacker — Google Developer Group on Campus (GDGoC UGM)
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Collaborated in developing a health information-sharing web app
              and participated in team sprints and code reviews to enhance agile
              development skills.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-3">
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Leader — ASSETS (Association of Software Engineering Technology
              Students, UGM)
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Led 60+ members, initiated 5+ academic and professional
              development programs, and collaborated with tech communities to
              expand networking opportunities.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Head of UXGAMA — Komunitas Mahasiswa TIK UGM
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Directed 20+ members in UX design and product development.
              Organized 8+ workshops and mentoring sessions using Figma and
              usability testing frameworks.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Staff — Human Resources Development, KMTEDI UGM
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Assisted in planning and executing training and bonding programs
              to enhance engagement and collaboration across members.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-3">
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Universitas Gadjah Mada — Software Engineering
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Began pursuing a Bachelor of Applied Computer degree with a GPA of
              3.78/4.00 (expected 2027). Started developing skills in React,
              Next.js, Laravel, and UX design.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2020 – 2023",
      content: (
        <div className="space-y-3">
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              SMA Negeri 3 Salatiga
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Major in Mathematics and Science. Developed logical and analytical
              thinking that sparked interest in technology and software
              fundamentals.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip py-12 sm:py-20 md:py-32 lg:py-40">
        <Timeline data={data} />
    </div>
  );
}
