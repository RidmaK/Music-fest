"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About EVOLVING" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">EVOLVING</span>
        redefines the music festival experience, offering a unique investment
        opportunity. Inspired by globally renowned events like Afterlife,
        EVOLVING curates an immersive journey that transcends the ordinary. Our
        carefully selected lineup of international and local artists, combined
        with cutting-edge production and a breathtaking outdoor setting, creates
        an unparalleled atmosphere for attendees.{" "}
        <span className="font-extrabold text-white">
          madness of the EVOLVING
        </span>{" "}
        Yes! EVOLVING is more than just a festival of today, using only it's a
        brand that fosters a loyal community and generates revenue through
        diverse channels, including ticketing, merchandise, and brand
        partnerships. Investing in EVOLVING means tapping into a thriving market
        and aligning with a concept that resonates with music enthusiasts
        worldwide.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
