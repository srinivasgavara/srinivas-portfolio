"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Trophy,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm always interested in internships, software engineering
            opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* Email */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=srinivasgavara12@gmail.com"
target="_blank"
rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-blue-500"
          >
            <Mail className="text-blue-500" size={30} />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-zinc-400">
                srinivasgavara12@gmail.com
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/srinivasgavara"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-blue-500"
          >
            <FaGithub className="text-3xl text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">GitHub</h3>
              <p className="text-zinc-400">
                github.com/srinivasgavara
              </p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/satya-srinivas-gavara-14662939b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-blue-500"
          >
            <FaLinkedin className="text-3xl text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-zinc-400">
                Connect with me
              </p>
            </div>
          </motion.a>

          {/* Unstop */}
          <motion.a
            href="https://unstop.com/u/satyagav91744"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-blue-500"
          >
            <Trophy className="text-blue-500" size={30} />
            <div>
              <h3 className="text-xl font-semibold">Unstop</h3>
              <p className="text-zinc-400">
                View my profile
              </p>
            </div>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-5 rounded-3xl bg-blue-600 p-8 transition hover:bg-blue-700"
          >
            <Download size={30} />
            <div>
              <h3 className="text-xl font-semibold">
                Download Resume
              </h3>
              <p className="text-blue-100">
                PDF Format
              </p>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}