"use client";

export interface BadgeProps {
  title: string;
}

export default function Badge({ title }: BadgeProps) {
  return (
    <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
      {title}
    </span>
  );
}