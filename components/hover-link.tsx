"use client";

import Link, { type LinkProps } from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type HoverLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export function HoverLink({ children, ...props }: HoverLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className="motion-link"
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.16 }}
    >
      <Link {...props}>{children}</Link>
    </motion.div>
  );
}
