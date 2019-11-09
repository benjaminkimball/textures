import React from "react";
import { bool, number, oneOfType, string } from "prop-types";

import getPathsPattern from "../../../lib/get-paths-pattern";

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
          d={getPathsPattern(size, type)}
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

Paths.propTypes = {
  background: string,
  fill: string,
  heavier: oneOfType([bool, number]),
  height: number,
  id: string.isRequired,
  lighter: oneOfType([bool, number]),
  shapeRendering: string,
  size: number,
  stroke: string,
  strokeWidth: number,
  thicker: oneOfType([bool, number]),
  thinner: oneOfType([bool, number]),
  type: string,
  width: number
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

export default Paths;
