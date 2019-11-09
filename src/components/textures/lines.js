import React from "react";
import { arrayOf, bool, number, oneOfType, string } from "prop-types";

import getLinesPattern from "../../../lib/get-lines-pattern";

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
            d={getLinesPattern(size, orientation)}
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

Lines.propTypes = {
  background: string,
  heavier: oneOfType([bool, number]),
  id: string.isRequired,
  lighter: oneOfType([bool, number]),
  orientation: oneOfType([arrayOf(string), string]),
  shapeRendering: string,
  size: number,
  stroke: string,
  strokeWidth: number,
  thicker: oneOfType([bool, number]),
  thinner: oneOfType([bool, number])
};

Lines.defaultProps = {
  orientation: ["diagonal"],
  shapeRendering: "auto",
  size: 20,
  stroke: "#343434",
  strokeWidth: 2
};

export default Lines;
