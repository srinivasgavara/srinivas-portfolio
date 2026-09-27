"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    year: "2025",
    link: "/certificates/python-101-data-science.pdf",
    icon: "🐍",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    year: "2025",
    link: "/certificates/oracle-database-sql.pdf",
    icon: "🗄️",
  },
  {
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "/certificates/data-science-essentials.pdf",
    icon: "📊",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "/certificates/data-analytics-essentials.pdf",
    icon: "📈",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#050505] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-400">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Learning Never Stops
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            These certifications showcase my continuous learning in Python,
            SQL, data science and data analytics.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
                {certificate.icon}
              </div>

              <h3 className="text-2xl font-bold transition group-hover:text-blue-400">
                {certificate.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {certificate.issuer}
              </p>

              <p className="mt-2 font-medium text-blue-400">
                {certificate.year}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="font-semibold text-blue-400">
                  View Certificate
                </span>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}