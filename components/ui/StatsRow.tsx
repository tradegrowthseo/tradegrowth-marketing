"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsRowProps {
  stats: Stat[];
  dark?: boolean;
}

function StatItem({ stat, index, dark }: { stat: Stat; index: number; dark: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gradient">
        {stat.value}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <div className={`text-sm font-medium ${dark ? "text-white/60" : "text-[#8a90a0]"}`}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsRow({ stats, dark = false }: StatsRowProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} index={i} dark={dark} />
      ))}
    </div>
  );
}
