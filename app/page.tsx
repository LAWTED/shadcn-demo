"use client";
import MultiSelect from "@/components/ui/multiSelect";

import Image from "next/image";
import { useState } from "react";
import { animate, cubicBezier, delay, motion } from "framer-motion";
import { Words } from "@/components/ui/words";

export default function Home() {
  const options = [
    { value: "1", label: "熊大" },
    { value: "2", label: "熊二" },
    { value: "3", label: "光头强" },
  ];

  const frameVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.3,
      // },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 5,
      filter: "blur(2px)",
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.12 * i ,
        ease: [0.69, 0, 0.27, 1],
        bounce: 0,
      },
    }),
  };

  const [value, setValue] = useState<string[] | string>("");

  return (
    <main className="flex min-h-screen flex-col items-center mt-24 gap-10 p-24">
      <motion.div variants={frameVariants} initial="initial" animate="animate">
        <div>Just in Case, You want to know</div>

        <div>How to build Components with Tailwind And Fully Controllable</div>

        <Words variants={itemVariants} className="text-blue-400 font-semibold">
          The answer is Headless UI (radix/shadcn) + Tailwind
        </Words>
      </motion.div>

      <div className="flex flex-col items-start gap-4">
        <h1 className="text-xl">MultiSelect</h1>
        <MultiSelect
          options={options}
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="请选择负责人"
          inputPlaceholder="请输入关键词搜索"
          emptyPlaceholder="暂无数据"
          multiple
          className="min-w-72"
        />
      </div>
    </main>
  );
}
