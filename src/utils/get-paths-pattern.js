export default (size, type) => {
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
