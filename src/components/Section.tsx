"use client";

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}