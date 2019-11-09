export default function getLinesPattern(size, orientation) {
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
}
