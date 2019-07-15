import React from "react";

const Lines = ({
  background,
  heavier,
  id,
  lighter,
  orientation,
  shapeRendering,
  size,
  stroke,
  strokeWidth,
  thicker,
  thinner
}) => {
  if (heavier)
    isNaN(heavier) ? (strokeWidth *= 2) : (strokeWidth *= 2 * heavier);

  if (lighter)
    isNaN(lighter) ? (strokeWidth /= 2) : (strokeWidth /= 2 * lighter);

  if (orientation && !Array.isArray(orientation)) orientation = [orientation];

  if (thicker) isNaN(thicker) ? (size /= 2) : (size /= 2 * thicker);

  if (thinner) isNaN(thinner) ? (size *= 2) : (size *= 2 * thinner);

  return (
    <defs>
      <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
        {background && <rect width={size} height={size} fill={background} />}
        {orientation.map((orientation, index) => (
          <path
            key={index}
            d={path(size, orientation)}
            shapeRendering={shapeRendering}
            stroke={stroke}
            strokeLinecap="square"
            strokeWidth={strokeWidth}
          />
        ))}
      </pattern>
    </defs>
  );
};

Lines.defaultProps = {
  orientation: ["diagonal"],
  shapeRendering: "auto",
  size: 20,
  stroke: "#343434",
  strokeWidth: 2
};

const path = (size, orientation) => {
  const s = size;

  switch (orientation) {
    case "0/8":
    case "vertical": {
      return `
        M ${s / 2},0
        l 0,${s}
      `;
    }

    case "1/8": {
      return `
        M ${s / 4},0
        l ${-s / 2},${s}
        M ${(s * 3) / 4},0
        l ${-s / 2},${s}
        M ${(s * 5) / 4},0
        l ${-s / 2},${s}
      `;
    }

    case "2/8":
    case "diagonal": {
      return `
        M 0,${s}
        l ${s},${-s}
        M ${-s / 4},${s / 4}
        l ${s / 2},${-s / 2}
        M ${(s * 3) / 4},${(s * 5) / 4}
        l ${s / 2},${-s / 2}
      `;
    }

    case "3/8": {
      return `
        M 0,${(s * 3) / 4}
        l ${s},${-s / 2}
        M 0,${s / 4}
        l ${s},${-s / 2}
        M 0,${(s * 5) / 4}
        l ${s},${-s / 2}
      `;
    }

    case "4/8":
    case "horizontal": {
      return `
        M 0,${s / 2}
        l ${s},0
      `;
    }

    case "5/8": {
      return `
        M 0,${-s / 4}
        l ${s},${s / 2}
        M 0,${s / 4}
        l ${s},${s / 2}
        M 0,${(s * 3) / 4}
        l ${s},${s / 2}
      `;
    }

    case "6/8": {
      return `
        M 0,0
        l ${s},${s}
        M ${-s / 4},${(s * 3) / 4}
        l ${s / 2},${s / 2}
        M ${(s * 3) / 4},${-s / 4}
        l ${s / 2},${s / 2}
      `;
    }

    case "7/8": {
      return `
        M ${-s / 4},0
        l ${s / 2},${s}
        M ${s / 4},0
        l ${s / 2},${s}
        M ${(s * 3) / 4},0
        l ${s / 2},${s}
      `;
    }

    default: {
      return `
        M ${s / 2},0
        l 0,${s}
      `;
    }
  }
};

export default Lines;
