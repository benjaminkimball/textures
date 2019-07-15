import React from "react";

const Paths = ({
  background,
  fill,
  heavier,
  height,
  id,
  lighter,
  shapeRendering,
  size,
  stroke,
  strokeWidth,
  thicker,
  thinner,
  type,
  width
}) => {
  if (heavier)
    isNaN(heavier) ? (strokeWidth *= 2) : (strokeWidth *= 2 * heavier);

  if (lighter)
    isNaN(lighter) ? (strokeWidth /= 2) : (strokeWidth /= 2 * lighter);

  if (thicker) isNaN(thicker) ? (size /= 2) : (size /= 2 * thicker);

  if (thinner) isNaN(thinner) ? (size *= 2) : (size *= 2 * thinner);

  if (type === "hexagons") {
    width = 3;
    height = Math.sqrt(width);
  }

  return (
    <defs>
      <pattern
        id={id}
        width={size * width}
        height={size * height}
        patternUnits="userSpaceOnUse"
      >
        {background && (
          <rect width={size * width} height={size * height} fill={background} />
        )}
        <path
          d={path(size, type)}
          fill={fill}
          shapeRendering={shapeRendering}
          stroke={stroke}
          strokeLinecap="square"
          strokeWidth={strokeWidth}
        />
      </pattern>
    </defs>
  );
};

Paths.defaultProps = {
  fill: "transparent",
  height: 1,
  shapeRendering: "auto",
  size: 20,
  stroke: "#343434",
  strokeWidth: 2,
  width: 1
};

const path = (size, type) => {
  const s = size;

  switch (type) {
    case "caps": {
      return `
        M ${s / 4},${(s * 3) / 4}
        l ${s / 4},${-s / 2}
        l ${s / 4},${s / 2}
      `;
    }

    case "crosses": {
      return `
        M ${s / 4},${s / 4}
        l ${s / 2},${s / 2}
        M ${s / 4},${(s * 3) / 4}
        l ${s / 2},${-s / 2}
      `;
    }

    case "hexagons": {
      const w = 3;
      const h = Math.sqrt(w);

      return `
        M ${s},0
        l ${s},0
        l ${s / 2},${(s * h) / 2}
        l ${-s / 2},${(s * h) / 2}
        l ${-s},0
        l ${-s / 2},${(-s * h) / 2}
        Z
        M 0,${(s * h) / 2}
        l ${s / 2},0
        M ${s * w},${(s * h) / 2}
        l ${-s / 2},0
      `;
    }

    case "nylon": {
      return `
        M 0,${s / 4}
        h ${s / 4}
        v ${-s / 4}
        M ${(s * 3) / 4},${s}
        v ${-s / 4}
        h ${s / 4}
        M ${s / 4},${s / 2}
        v ${s / 4}
        h ${s / 4}
        M ${s / 2},${s / 4}
        h ${s / 4}
        v ${s / 4}
      `;
    }

    case "squares": {
      return `
        M ${s / 4},${s / 4}
        l ${s / 2},0
        l 0,${s / 2}
        l ${-s / 2},0
        Z
      `;
    }

    case "waves": {
      return `
        M 0,${s / 2}
        c ${s / 8},${-s / 4} ${(s * 3) / 8},${-s / 4}, ${s / 2},0
        c ${s / 8},${s / 4} ${(s * 3) / 8},${s / 4}, ${s / 2},0
        M ${-s / 2},${s / 2}
        c ${s / 8},${s / 4} ${(s * 3) / 8},${s / 4}, ${s / 2},0
        M ${s},${s / 2}
        c ${s / 8},${-s / 4} ${(s * 3) / 8},${-s / 4}, ${s / 2},0
      `;
    }

    case "woven": {
      return `
        M ${s / 4},${s / 4}
        l ${s / 2},${s / 2}
        M ${(s * 3) / 4},${s / 4}
        l ${s / 2},${-s / 2}
        M ${s / 4},${(s * 3) / 4}
        l ${-s / 2},${s / 2}
        M ${(s * 3) / 4},${(s * 5) / 4}
        l ${s / 2},${-s / 2}
        M ${-s / 4},${s / 4}
        l ${s / 2},${-s / 2}
      `;
    }

    default: {
      return `
        M ${s / 4},${(s * 3) / 4}
        l ${s / 4},${-s / 2}
        l ${s / 4},${s / 2}
      `;
    }
  }
};

export default Paths;
