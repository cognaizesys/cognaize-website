"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultIndex?: number;
  className?: string;
}

export function Tabs({ items, defaultIndex = 0, className }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={className}>
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" aria-label="Tabs">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "py-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                activeIndex === index
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
              aria-current={activeIndex === index ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(activeIndex === index ? "block" : "hidden")}
            role="tabpanel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
