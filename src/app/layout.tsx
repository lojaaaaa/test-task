import React from "react";

interface LayotProps {
  children: React.ReactNode
}

export const Layot = ({ children }: LayotProps) => (
  <main
    className="max-w-screen-lg mx-auto py-2 px-8"
  >
    {children}
  </main>
);
