"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Page() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={containerRef} className="h-[300vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
    </div>
  );
}

function Section1({ scrollYProgress }: { scrollYProgress: MotionValue }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="prose p-5  h-screen min-w-full bg-red-500 text-neutral-50 flex justify-center items-center flex-col sticky top-0 -z-20"
    >
      <h1 className="text-neutral-50">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo
        neque animi magnam, sit et incidunt ex sunt, nobis, dolore placeat ipsum
        quasi quae consequatur esse! Ea provident nam ut!
      </p>
    </motion.section>
  );
}

function Section2({ scrollYProgress }: { scrollYProgress: MotionValue }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="prose p-5 h-screen min-w-full bg-purple-500 text-neutral-950 flex justify-center items-center flex-col sticky top-0 -z-20"
    >
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo
        neque animi magnam, sit et incidunt ex sunt, nobis, dolore placeat ipsum
        quasi quae consequatur esse! Ea provident nam ut!
      </p>
    </motion.section>
  );
}

function Section3({ scrollYProgress }: { scrollYProgress: MotionValue }) {
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.section
      style={{ opacity, scale }}
      className="prose p-5 h-screen min-w-full bg-green-500 text-neutral-950 flex justify-center items-center flex-col top-0 -z-10"
    >
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo
        neque animi magnam, sit et incidunt ex sunt, nobis, dolore placeat ipsum
        quasi quae consequatur esse! Ea provident nam ut!
      </p>
    </motion.section>
  );
}
