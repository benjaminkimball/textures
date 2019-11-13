import { h } from "preact";

import getPathsPattern from "../../utils/get-paths-pattern";

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
          shape-rendering={shapeRendering}
          stroke={stroke}
          stroke-linecap="square"
          stroke-width={strokeWidth}
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

export default Paths;
