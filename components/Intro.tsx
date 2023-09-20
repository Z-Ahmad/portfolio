'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src="/zaki.jpg"
              alt="zaki portrait"
              width={192}
              height={192}
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5]" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Zaki.</span> I'm a <span className="font-bold">computer science graduate</span> from the{" "}
        <span className="font-bold">University at Buffalo</span>. My expertise lies in <span className="italic"> full-stack </span>web development, primarily
        using <span className="underline">React (Next.js)</span>. I'm on a <span className="font-bold">mission</span> to explore diverse tech fields and find my
        niche.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Resume.pdf"
          target="_blank"
          className=" group bg-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/z-ahmad42661/"
          target="_blank"
          className=" bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Z-Ahmad"
          target="_blank"
          className=" bg-white p-4 text-gray-700
          flex items-center gap-2  text-[1.35rem] rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
