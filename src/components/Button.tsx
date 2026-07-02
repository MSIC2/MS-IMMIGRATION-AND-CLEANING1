"use client";

import Link from "next/link";

export interface ButtonProps {
  title: string;
  href: string;
  className?: string;
}

export default function Button({ title, href, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`btn btn-primary ${className}`}
    >
      {title}
    </Link>
  );
}