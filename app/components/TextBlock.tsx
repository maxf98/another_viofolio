import React from "react";

interface TextBlockProps {
  children: React.ReactNode;
}

export default function TextBlock({ children }: TextBlockProps) {
  return (
    <div className="bg-body">
      <div className="content-container text-2xl text-white text-center py-32">
        {children}
      </div>
    </div>
  );
}
