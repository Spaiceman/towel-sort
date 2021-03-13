module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  var mas = matrix[0];

    for (var x = 1; x < matrix.length; x++) {
      x%2 !=0 ? mas =mas.concat(matrix[x].reverse()) : mas = mas.concat(matrix[x]);
  }
  return mas;
}