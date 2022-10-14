/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];

  const go = (l, r, s) => { // l: left remaining, r: right remaining
    if (l > r) return; // Validate by the number of '(' should be always >= ')'

    if (l === 0 && r === 0) {
      res.push(s);
      return;
    }

    if (l > 0) go(l - 1, r, s + '(');
    if (r > 0) go(l, r - 1, s + ')');
  };

  go(n, n, '');
  return res;
};