"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-slate-800 h-screen text-neutral-50 prose min-w-full prose-h1:text-neutral-50 py-6 px-4">
      <AnimateSentence Component="h1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </AnimateSentence>
      <AnimateSentence Component="p">
        This is an animated paragraph tag.
      </AnimateSentence>
      <AnimateSentence Component="span">
        Cupiditate sapiente incidunt quod dolor a beatae perferendis nobis
        dolore perspiciatis, sunt nesciunt nam consectetur nemo maiores repellat
        blanditiis, suscipit accusamus fugit?
      </AnimateSentence>
    </main>
  );
}

function AnimateSentence({
  children,
  Component = "h1",
}: {
  children: string;
  Component: React.ElementType;
}) {
  function textspliter(inputString: string) {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(match[0]);
    }
    return characters;
  }

  const variant = {
    start: { opacity: 0 },
    middle: { opacity: 1 },
  };

  return (
    <motion.div
      initial="start"
      whileInView="middle"
      transition={{ staggerChildren: 0.02 }}
    >
      <Component>
        {textspliter(children).map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.5 }}
            variants={variant}
          >
            {char}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
