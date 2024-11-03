"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Page() {
  return (
    <main>
      <div className="max-w-5xl mx-auto">
        <DummyPara />
        <Features />
        <DummyPara />
      </div>
    </main>
  );
}

function Features() {
  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -350]);
  console.log(scrollYProgress.get());

  return (
    <section ref={refContainer} className="min-w-full prose py-96">
      <h2>This is Awesome!</h2>
      <div className="w-full flex justify-center relative">
        <motion.div style={{ y: sm }}>
          <Image
            src="/img-1.png"
            width={800}
            height={1200}
            alt="image 1"
            title="image 1"
            className="w-[26rem] rounded-md shadow-md"
            priority
          />
        </motion.div>
        <motion.div style={{ y: md, zIndex: "90" }}>
          <Image
            src="/img-2.jpg"
            width={800}
            height={1200}
            alt="image 2" // Updated alt and title attributes
            title="image 2" // Updated alt and title attributes
            className="w-[18rem] rounded-md shadow-md absolute  top-[30%] left-[15%] transform -translate-y-1/2"
            priority
          />
        </motion.div>
        <motion.div style={{ y: lg }}>
          <Image
            src="/img-3.jpg"
            width={800}
            height={1200}
            alt="image 3" // Updated alt and title attributes
            title="image 3" // Updated alt and title attributes
            className="w-[21rem] rounded-md shadow-md absolute top-[35%] left-[55%] transform -translate-y-1/2"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

function DummyPara() {
  return (
    <section className="prose min-w-full">
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit?</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed
        quisquam rerum, quasi consectetur minima sequi velit placeat vel dolorum
        ipsam, officiis neque consequatur corrupti ipsa rem perferendis incidunt
        inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        necessitatibus aliquam ea magni exercitationem neque eaque incidunt
        quibusdam optio impedit.
      </p>
      <h2>Lorem ipsum dolor sit amet consectetur?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus,
        dignissimos ea, magni magnam deserunt aliquam fugiat aperiam enim rerum
        unde doloremque corrupti culpa nihil.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        necessitatibus aliquam ea magni exercitationem neque eaque incidunt
        quibusdam optio impedit.
      </p>{" "}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed
      <p>
        quisquam rerum, quasi consectetur minima sequi velit placeat vel dolorum
        ipsam, officiis neque consequatur corrupti ipsa rem perferendis incidunt
        inventore?
      </p>
    </section>
  );
}
