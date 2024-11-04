"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
export default function Page() {
  return (
    <div className="bg-neutral-200 ">
      {stepsData.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </div>
  );
}

function Card({
  header,
  paragraph,
  colorCode,
}: {
  header: string;
  paragraph: string;
  colorCode: string;
}) {
  const cardContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div ref={cardContainer} className="h-screen sticky top-40 mx-4">
      <section
        className="prose h-[450px] !w-[1000px] min-w-full rounded-xl p-6 flex justify-center items-center  gap-4 mb-6 shadow-md"
        style={{ backgroundColor: colorCode }}
      >
        <div className="max-w-[40%]">
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </div>

        <div className="max-w-[60%] h-[300px]">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full overflow-hidden"
          >
            <Image
              src="/img-1.png"
              alt="image 1"
              title="image 1"
              width={1000}
              height={800}
              className=" rounded-md object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

type itemType = {
  header: string;
  paragraph: string;
  colorCode: string;
};

const stepsData: itemType[] = [
  {
    header: "Step 1: Define Your Goals",
    paragraph:
      "Start by clearly outlining your goals. What do you want to achieve?",
    colorCode: "#FF5733", // Red
  },
  {
    header: "Step 2: Research and Plan",
    paragraph:
      "Conduct thorough research and create a detailed plan to reach your goals.",
    colorCode: "#33FF57", // Green
  },
  {
    header: "Step 3: Take Action",
    paragraph:
      "Begin implementing your plan and take consistent action towards your goals.",
    colorCode: "#3357FF", // Blue
  },
  {
    header: "Step 4: Monitor Progress",
    paragraph:
      "Regularly assess your progress and make adjustments as necessary.",
    colorCode: "#F3FF33", // Yellow
  },
  {
    header: "Step 5: Reflect and Adjust",
    paragraph:
      "Reflect on your journey and adjust your strategies for continued improvement.",
    colorCode: "#FF33A1", // Pink
  },
];
