"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UnderlineScroll = ({ children }) => {
  const textRef = useRef(null);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }
  }, [children]);

  useEffect(() => {
    if (inView) {
      controls.start({ width });
    } else {
      controls.start({ width: 0 });
    }
  }, [inView, width, controls]);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <span ref={textRef} style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>
        {children}
      </span>
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          height: "2px",
          backgroundColor: "#000",
          position: "absolute",
          bottom: 0,
          left: 1,
        }}
      />
    </div>
  );
};

export default UnderlineScroll;
