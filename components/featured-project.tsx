"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Expense Tracking",
  "Analytics Dashboard",
  "Wallet Management",
  "Reports & Insights",
  "Excel Export",
  "Responsive Design",
  "Search Expenses",
  "Modern UI",
];

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-400">
            Featured Project
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Paisa – Personal Expense Tracker
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A modern expense management application that helps users record
            expenses, analyse spending habits, manage wallet balance and
            generate reports through a clean dashboard.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src="/paisa/dashboard.png"
                alt="Paisa Dashboard"
                width={1200}
                height={800}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              Full Stack Project
            </span>

            <h3 className="mt-6 text-4xl font-bold">
              Track every rupee.
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              Paisa provides a modern interface for managing personal finances
              with dashboards, analytics, wallet tracking, reports and expense
              history.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-zinc-900 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-500"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}