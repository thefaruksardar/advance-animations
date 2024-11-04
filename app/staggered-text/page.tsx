"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-pink-300 h-screen w-full flex justify-center items-center flex-col gap-5">
      <p className="text-neutral-600">Hover on the Text below</p>
      <Fliptext>Facebook</Fliptext>
      <Fliptext>WhatsApp</Fliptext>
      <Fliptext>Instagram</Fliptext>
      <Fliptext>Telegram</Fliptext>
      <Fliptext>Faruk</Fliptext>
    </div>
  );
}

function Fliptext({ children }: { children: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative  text-5xl whitespace-nowrap font-bold cursor-pointer overflow-hidden"
      style={{ lineHeight: 1.1 }}
    >
      <div>
        {children?.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children?.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
