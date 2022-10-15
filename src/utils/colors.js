export default {
  multiply([r0, g0, b0, a0], [r1, g1, b1, a1]) {
    const a01 = (1 - a0) * a1 + a0;
    const r01 = ((1 - a0) * a1 * r1 + a0 * r0) / a01;
    const g01 = ((1 - a0) * a1 * g1 + a0 * g0) / a01;
    const b01 = ((1 - a0) * a1 * b1 + a0 * b0) / a01;

    return [r01, g01, b01, a01];
  },

  makeTransparent([r, g, b]) {
    return [r, g, b, 0];
  },

  toString(color) {
    return `rgba(${color.join(",")})`;
  },
};
