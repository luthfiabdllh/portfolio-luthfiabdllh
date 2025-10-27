"use client";
import { VideoText } from "../magicui/video-text";
import { cn } from "@/lib/utils";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc: string;
  title: string;
  description: string;
  number: string;
  background: string;
  backgroundFlip: string;
  category: string;
  rotate?: "x" | "y";
}

export default function ServicesCard({
  videoSrc,
  title,
  description,
  number,
  category,
  rotate = "x", 
  className,
  background = "bg-[#2A2F45]", 
  backgroundFlip = "bg-[#1A1F2D]",
  ...props
}: ServiceCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        "group w-full [perspective:1000px] cursor-pointer",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full transition-all duration-700 ease-out [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front - Video Content */}
        <div className={cn("w-full [backface-visibility:hidden]", background)}>
          {/* content 1 - Video */}
          <div className="relative h-[60vh] w-full overflow-hidden">
            <VideoText
              src={videoSrc}
              className="h-full w-full text-6xl md:text-8xl lg:text-9xl font-bold"
            >
              {title === "UI/UX Design"
                ? "UI / UX"
                : title === "Frontend Development"
                ? "FRONT END"
                : title === "Backend Development"
                ? "BACK END"
                : title.toUpperCase()}
            </VideoText>
          </div>
        </div>

        {/* Back - Text Content */}
        <div
          className={cn(
            "absolute inset-0 w-full [backface-visibility:hidden]",
            backgroundFlip,
            self[1]
          )}
        >
          {/* content 2 - Text */}
          <div className="flex items-center justify-center h-[60vh]">
            <div className="flex items-center space-x-6 justify-center max-w-4xl font-thin mx-auto w-full">
              {/* Large Number */}
              <div className="flex-shrink-0">
                <h2 className="text-[14vh] text-white/15 font-light leading-none">
                  {number}
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1 max-w-3xl">
                <h3 className="text-4xl text-white leading-tight">
                  {category.split(" ").map((word, index) => (
                    <span key={index}>
                      {word.split("").map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className={
                            ["o", "c", "g", "O", "C", "G"].includes(char)
                              ? "font-carl-brown"
                              : ""
                          }
                        >
                          {char}
                        </span>
                      ))}
                      {index < category.split(" ").length - 1 && " "}
                    </span>
                  ))}
                </h3>

                <p className=" leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}