import React from "react";

const LinesPattern = ({
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

  console.log(background);

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

LinesPattern.defaultProps = {
  orientation: ["diagonal"],
  shapeRendering: "auto",
  size: 20,
  stroke: "#06142a",
  strokeWidth: 2
};

const path = (size, orientation) => {
  switch (orientation) {
    case "0/8":
    case "vertical": {
      return `
        M ${size / 2},0
        l 0,${size}
      `;
    }

    case "1/8": {
      return `
        M ${size / 4},0
        l ${-size / 2},${size}
        M ${(size * 3) / 4},0
        l ${-size / 2},${size}
        M ${(size * 5) / 4},0
        l ${-size / 2},${size}
      `;
    }

    case "2/8":
    case "diagonal": {
      return `
        M 0,${size}
        l ${size},${-size}
        M ${-size / 4},${size / 4}
        l ${size / 2},${-size / 2}
        M ${(size * 3) / 4},${(size * 5) / 4}
        l ${size / 2},${-size / 2}
      `;
    }

    case "3/8": {
      return `
        M 0,${(size * 3) / 4}
        l ${size},${-size / 2}
        M 0,${size / 4}
        l ${size},${-size / 2}
        M 0,${(size * 5) / 4}
        l ${size},${-size / 2}
      `;
    }

    case "4/8":
    case "horizontal": {
      return `
        M 0,${size / 2}
        l ${size},0
      `;
    }

    case "5/8": {
      return `
        M 0,${-size / 4}
        l ${size},${size / 2}
        M 0,${size / 4}
        l ${size},${size / 2}
        M 0,${(size * 3) / 4}
        l ${size},${size / 2}
      `;
    }

    case "6/8": {
      return `
        M 0,0
        l ${size},${size}
        M ${-size / 4},${(size * 3) / 4}
        l ${size / 2},${size / 2}
        M ${(size * 3) / 4},${-size / 4}
        l ${size / 2},${size / 2}
      `;
    }

    case "7/8": {
      return `
        M ${-size / 4},0
        l ${size / 2},${size}
        M ${size / 4},0
        l ${size / 2},${size}
        M ${(size * 3) / 4},0
        l ${size / 2},${size}
      `;
    }

    default: {
      return `
        M ${size / 2},0
        l 0,${size}
      `;
    }
  }
};

export default LinesPattern;
