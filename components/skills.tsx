"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Brain,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C", "C++", "SQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Libraries",
    icon: Brain,
    skills: ["NumPy", "Pandas"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Concepts",
    icon: Wrench,
    skills: [
      "Data Structures",
      "OOP",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050505] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            These are the technologies and concepts I've been learning
            and applying through coursework, certifications and projects.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mb-6 text-2xl font-bold">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}