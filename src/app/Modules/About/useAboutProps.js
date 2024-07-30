import { useState } from "react";

export default function useAboutProps() {
  const [progress, setProgress] = useState(50);

  const segmentWidth = 100 / 3;

  const getSegmentWidth = (index) => {
    const segmentStart = index * segmentWidth;
    const segmentEnd = (index + 1) * segmentWidth;

    if (progress < segmentStart) {
      return 0;
    } else if (progress < segmentEnd) {
      return ((progress - segmentStart) / segmentWidth) * 100;
    } else {
      return 100;
    }
  };

  return {
    getSegmentWidth,
  };
}
