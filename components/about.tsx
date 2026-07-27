"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "I enjoy building practical applications using Python, SQL and modern web technologies.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Currently exploring AI and Data Science while applying concepts through academic and personal projects.",
  },
  {
    icon: Database,
    title: "Database Systems",
    description:
      "Comfortable working with SQL and MySQL to design and manage structured databases.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Always improving my programming, problem-solving and software engineering skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Building Software That Solves Problems
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm a Computer Science Engineering student specialising in
            Artificial Intelligence & Data Science at Marwadi University.
            I enjoy backend development, databases, software engineering,
            and creating applications that solve real-world problems.
            My goal is to become a Software Engineer while continuously
            learning new technologies and improving my development skills.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}