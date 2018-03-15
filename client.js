
// A 5x2 matrix (first matrix, array of rows);
var m1 = [[1, 2], [2, 3], [3, 1], [4, 0.42], [2, 3.14]];

// A 2x4 matrix (second matrix, array of cols):
var m2 = [[5, 2.5], [2, 3], [3,2], [3.2,1]];

// A matrix is either an array of rows (first argument a) or an array of cols (second argument b):
function matrixMult(a, b) {
  var aRows = a.length;
  var aCols = a[0].length;
  var bRows = b.length;
  var bCols = b[0].length;

  // console.log(aRows, aCols, bRows, bCols);
  var mOut = [];

  for (var i=0; i < aRows; i++) {
    var ar = a[i];
    // console.log(ar);
    var row = [];
    // Ok this has to be bRows instead of bCols since we're readapting:
    for (var j=0; j < bRows; j++) {
      var bc = b[j];
      // console.log(ar, bc);
      row.push(multRows(ar, bc));
    }
    mOut.push(row);
  }

  console.log(mOut);
}


// Sample input: [1, 1, 2] and [2, 3, 5]:
function multRows(row, col) {
  var out = 0;
  for (var i=0; i < row.length; i++) {
    out += (row[i] * col[i]);
  }
  return out;
}

matrixMult(m1, m2);
