import React from "react";

const Circles = ({
  background,
  complement,
  fill,
  heavier,
  id,
  lighter,
  radius,
  size,
  stroke,
  strokeWidth,
  thicker,
  thinner,
}) => {
  if (heavier) isNaN(heavier) ? (radius *= 2) : (radius *= 2 * heavier);

  if (lighter) isNaN(lighter) ? (radius /= 2) : (radius /= 2 * lighter);

  if (thicker) isNaN(thicker) ? (size /= 2) : (size /= 2 * thicker);

  if (thinner) isNaN(thinner) ? (size *= 2) : (size *= 2 * thinner);

  return (
    <defs>
      <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
        {background && <rect width={size} height={size} fill={background} />}
        <circle
          cx={size / 2}
          cy={size / 2}
          fill={fill}
          r={radius}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />

        {complement &&
          [
            [0, 0],
            [0, size],
            [size, 0],
            [size, size],
          ].map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              fill={fill}
              r={radius}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          ))}
      </pattern>
    </defs>
  );
};

Circles.defaultProps = {
  complement: false,
  fill: "#343434",
  radius: 2,
  size: 20,
  stroke: "#343434",
  strokeWidth: 0,
};

export default Circles;
