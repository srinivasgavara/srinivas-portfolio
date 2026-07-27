"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-24 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-semibold text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Satya
            <br />
            Srinivas G
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-zinc-300">
            Aspiring Software Engineer
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Computer Science Engineering (AI & Data Science) student passionate
            about building practical software using Python, SQL and AI.
            Currently seeking Software Engineering internship opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-blue-500"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/srinivasgavara"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-900 p-4 text-2xl transition hover:bg-blue-600"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/satya-srinivas-gavara-14662939b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-900 p-4 text-2xl transition hover:bg-blue-600"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=srinivasgavara12@gmail.com"
target="_blank"
rel="noopener noreferrer"
              className="rounded-full bg-zinc-900 p-4 transition hover:bg-blue-600"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-[90px]" />

            <Image
              src="/profile.jpg"
              alt="Satya Srinivas"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-4 border-blue-500 object-cover shadow-[0_0_80px_rgba(59,130,246,.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}