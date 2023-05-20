import React, { useCallback, useEffect, useRef, useState } from "react";

const InfiniteLooper = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef();
  const innerRef = useRef();

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 50);
    }
  }
  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative  before:absolute before:left-0 before:w-40 before:z-50 before:bg-gradient-to-r before:from-[#ebebeb] before:to-transparent before:h-full after:absolute after:right-0 after:top-0 after:w-40 after:z-50 after:bg-gradient-to-l after:from-[#ebebeb] after:to-transparent after:h-full"
      ref={outerRef}
    >
      <div
        className="flex justify-center w-fit looper__innerList relative   "
        ref={innerRef}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            // className="flex gap-20 mr-20 w-max animate-scroll looper__listInstance"
            className="mr-20 w-max animate-scroll looper__listInstance grid grid-flow-col overflow-x-scroll auto-cols-[calc(20%-30px)] gap-20 "
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
