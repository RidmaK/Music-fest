"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Countdown to EVOLVING" textStyles="text-center" />

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-8 font-normal sm:text-2xl text-lg text-center text-secondary-white"
        >
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col p-4 bg-neutral rounded-lg text-neutral-content"
              >
                <span className="countdown font-mono text-6xl mb-2">
                  <span style={{ "--value": value }}>{value}</span>
                </span>
                <span className="uppercase text-sm">{unit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-6 h-6 object-contain mt-10"
        />
      </motion.div>
    </section>
  );
};

export default Countdown;
