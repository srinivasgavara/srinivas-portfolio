"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "AI-Based Travel Matching",
  "Travel Partner Discovery",
  "Trip Planning",
  "User Authentication",
  "Responsive Interface",
  "Academic Team Project",
];

export default function TravelProject() {
  return (
    <section
      id="travel-project"
      className="bg-[#050505] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-purple-400">
            Academic Project
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            AI-Powered Travel Buddy Finder
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI-assisted travel platform designed to help travellers find
            compatible travel companions based on destination, interests and
            travel preferences. Built as an academic project to explore
            recommendation systems and collaborative travel planning.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src="/travelbuddy/image1.png"
                alt="Travel Buddy Screenshot 1"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src="/travelbuddy/image2.png"
                alt="Travel Buddy Screenshot 2"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold">
              AI Project
            </span>

            <h3 className="mt-6 text-4xl font-bold">
              Find Your Perfect Travel Companion
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              The application connects travellers with suitable travel
              partners using profile information and travel preferences.
              It focuses on improving trip planning, enhancing user
              experience and encouraging collaborative travel.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-zinc-900 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="text-purple-500"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-purple-400">
                Project Status
              </p>

              <p className="mt-3 leading-8 text-zinc-400">
                This project was developed as part of my academic coursework.
                While the original source code is no longer available, the
                project demonstrates my understanding of software development,
                UI design and collaborative application development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}