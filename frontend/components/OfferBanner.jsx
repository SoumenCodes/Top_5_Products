import React from "react";
import { TextLoop } from "./motion-primitives/text-loop";

function OfferBanner() {
  return (
    <div className="text-base text-center py-3 text-btnBlue">
      Unlock{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span className="text-white"> Exclusive Deals </span>
        <span className="text-white"> Exclusive Deals </span>
      </TextLoop>{" "}
      on Top Products! Shop Smart,{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span className="text-white">Save</span>
        <span className="text-white">Save</span>
      </TextLoop>{" "}
      Big! Only Value for Your{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span className="text-white">Money!!</span>
        <span className="text-white">Money!!</span>
      </TextLoop>{" "}
    </div>
  );
}

export default OfferBanner;
