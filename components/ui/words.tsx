import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordsProps {
  children: string;
  className?: string;
  [key: string]: any;
}

export function Words({ children, className, ...rest }: WordsProps) {
  let words = children.split(" ");
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        className={cn(className, "inline-block overflow-hidden")}
      >
        <motion.div {...rest} className="inline-block" custom={i}>
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}
