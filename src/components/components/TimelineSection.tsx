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
              Vice Head of Medinfo — Gamatiga (Gadjah Mada Salatiga)
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Feb 2025 - Present</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Led creative media and content planning to strengthen the organization’s communication strategy and public engagement among 200+ members.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Leader — Association of Software Engineering Technology Students UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Feb 2025 - Feb 2026</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Led a team of 60+ active members, overseeing strategic planning and execution of all association programs, including 5+ academic and professional initiatives.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Assistant Lecturer — Proyek Aplikasi Dasar, UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Aug 2025 - Dec 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Mentored 3+ student developer teams, conducting weekly technical sessions on programming logic and debugging, leading to a 30% improvement in code quality.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Hacker (Frontend Developer) — Google Developer Group On Campus UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Dec 2024 - Jun 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Collaborated in building a health information-sharing web application and participated in Agile development sprints and peer code reviews.
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
              Head of UXGAMA Division — Komunitas Mahasiswa TIK UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Nov 2024 - Nov 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Directed 20+ members in UX design and product development, organizing 8+ workshops and sessions on Figma and usability testing.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Staff — Human Resources Development, KMTEDI SV UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Oct 2024 - Nov 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Assisted in planning 3+ training and bonding programs and contributed to mentorship initiatives for Informatics students.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Staff — Human Resources Development, ASSETS UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Mar 2024 - Feb 2025</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Led and coordinated SERIES (Software Engineering Oriented Study) 2025.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
              Member — UXGAMA, Komunitas Mahasiswa TIK UGM
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Feb 2024 - Nov 2024</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Developed foundational skills in UX Research and UI design using Figma.
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
              Began pursuing a Bachelor of Applied Computer degree. Started developing skills in React, Next.js, Laravel, and UX design.
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
              Major in Mathematics and Science. Developed logical and analytical thinking that sparked interest in technology.
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
