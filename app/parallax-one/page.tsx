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

  // const sm = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -550]);

  return (
    <section ref={refContainer} className="min-w-full prose py-96 relative">
      <h2>This is Awesome!</h2>

      <div className="w-full flex justify-center ">
        <motion.div>
          <Image
            src="/img-1.png"
            width={800}
            height={1200}
            alt="image 1"
            title="image 1"
            className="w-[20rem] rounded-md shadow-md"
          ></Image>
        </motion.div>
      </div>

      <motion.div style={{ y: md }}>
        <Image
          src="/img-2.jpg"
          width={800}
          height={1200}
          alt="image 2"
          title="image 2"
          className="w-[11rem] rounded-md shadow-md absolute top-[10%] left-[20%] transform -translate-y-1/2"
        />
      </motion.div>
      <motion.div style={{ y: lg }}>
        <Image
          src="/img-3.jpg"
          width={800}
          height={1200}
          alt="image 3"
          title="image 3"
          className="w-[13rem] rounded-md shadow-md absolute top-[35%] left-[55%] transform -translate-y-1/2"
        />
      </motion.div>
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
