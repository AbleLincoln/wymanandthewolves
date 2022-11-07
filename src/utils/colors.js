export default {
  /**
   * multiplies two colors together to simulate color0 on top of color1
   *
   * source: https://stackoverflow.com/questions/28900598/how-to-combine-two-colors-with-varying-alpha-values
   * @param {color} color0 top color as `rgba` array
   * @param {color} color1 bottom color as `rgba` array
   * @returns `rgba` color array
   */
  multiply([r0, g0, b0, a0], [r1, g1, b1, a1]) {
    const a01 = (1 - a0) * a1 + a0;
    const r01 = ((1 - a0) * a1 * r1 + a0 * r0) / a01;
    const g01 = ((1 - a0) * a1 * g1 + a0 * g0) / a01;
    const b01 = ((1 - a0) * a1 * b1 + a0 * b0) / a01;

    return [r01, g01, b01, a01];
  },

  /**
   * takes a `[r,g,b,a]` color and returns it with an `alpha = 0`
   *
   * @param {color} color as `[rgba]` array
   * @returns
   */
  makeTransparent([r, g, b]) {
    return [r, g, b, 0];
  },

  /**
   * formats `[rgba]` color in `rgba(r, g, b, a)` format
   *
   * @param {color} color
   * @returns `rgba(...)` string
   */
  toString(color) {
    return `rgba(${color.join(",")})`;
  },
};
