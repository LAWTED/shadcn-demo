"use client";
import MultiSelect from "@/components/ui/multiSelect";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const options = [
    { value: "1", label: "熊大" },
    { value: "2", label: "熊二" },
    { value: "3", label: "光头强" },
  ];

  const [value, setValue] = useState<string[] | string>("");

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="text-slate-500/80">
        <div>Just in Case, You want to know</div>
        <div> How to build Components with Tailwind And Fully Controllable</div>
        <br />
        <div>
          {" "}
          The answer is{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-semibold">
            {" "}
            Headless UI (radix/shadcn) +
          </span>
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text  text-transparent font-semibold">
            Tailwind{" "}
          </span>
        </div>
      </div>
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
