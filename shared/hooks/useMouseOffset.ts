import { useEffect, useState } from "react";

import { clamp } from "../../utils/math";

export type Offset = [number, number];

export const useMouseOffset = ({
  onSetOffset,
  initialState,
  min,
  max,
}: {
  onSetOffset?: (offset: Offset) => void;
  initialState: Offset;
  min?: number;
  max?: number;
}) => {
  const [offset, setOffset] = useState(initialState);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const [cx, cy] = [window.innerWidth / 2, window.innerHeight / 2];

      const x = cx - e.x;
      const y = cy - e.y;
      const xn = x < 0;
      const yn = y < 0;

      const nextOffset: Offset = [
        clamp((Math.abs(x) / cx) * (xn ? -100 : 100), min, max),
        clamp((Math.abs(y) / cy) * (yn ? -100 : 100), min, max),
      ];

      onSetOffset && onSetOffset(nextOffset);
      setOffset(nextOffset);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
    // eslint-disable-next-line
  }, []);

  return offset;
};
