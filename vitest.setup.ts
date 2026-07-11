import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock window.scrollTo since happy-dom/jsdom does not implement scrolling layout features
if (typeof window !== "undefined") {
  window.scrollTo = vi.fn();
}

// Mock next/image so it renders as a standard img tag in testing environments
vi.mock("next/image", () => {
  return {
    default: (props: Record<string, unknown>) => {
      // Create a standard img tag from the props passed to next/image
      return React.createElement("img", {
        ...props,
        // next/image specifies src, alt, width, height, etc.
        src: props.src as string,
        alt: props.alt as string,
      });
    },
  };
});
