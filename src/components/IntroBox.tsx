import React from "react";
import LogoClickable from "./LogoClickable";

export default function IntroBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-16">
      <div className="font-mono">{title}</div>
      <div className="font-mono">{description}</div>
      <div
        id="clickables"
        className="flex flex-row space-x-8 justify-center items-center"
      >
        <LogoClickable
          imagePath="/logos/LinkedIn.png"
          altDescription="LinkedIn"
          link="https://www.linkedin.com/in/jacktheqiu/"
        />
        <LogoClickable
          imagePath="/logos/GitHub.png"
          altDescription="GitHub"
          link="https://github.com/jacklqiu"
        />
      </div>
    </div>
  );
}
