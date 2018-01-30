
// Update x, y in our matrix array with the delta x/y from moving.
export const pan = (dx, dy, matrix) => matrix.map((n, i) => (i === 4) ? n + dx : (i === 5) ? n + dy : n)

export const moveTo = (x, y, matrix) => matrix.map((n, i) => (i === 4) ? x : (i === 5) ? y : n)
