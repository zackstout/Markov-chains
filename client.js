
console.log('we in');

// A 5x2 matrix (first matrix, array of rows);
var m1 = [[1, 2], [2, 3], [3, 1], [4, 0.42], [2, 3.14]];
// Wait wait this is weird, why does it think these are backwards? (i.e. flip 2.5 and 0):
// i.e. it's behaving as if this were an array of columns

// All right whatever let's run with it, second matrix has to be passed as array of cols rather than rows:
// A 2x4 matrix (second matrix, array of cols):
var m2 = [[5, 2.5], [2, 3], [3,2], [3.2,1]];

// A matrix is an array of rows; each row is an arrow of col elements.
// Ex: 3x2, which is 3 elements of length 2, (e.g. [[1, 2], [2, 3], [3,1]]) times a 2x1 ([[5], [2.5]]), should return a 3x1 ([[10], [17.5], [17.5])
function matrixMult(a, b) {
  var aRows = a.length;
  var aCols = a[0].length;
  var bRows = b.length;
  var bCols = b[0].length;

  // console.log(aRows, aCols, bRows, bCols);
  var mOut = [];


  // for (var k=0; k < aRows; k++) {
  //   mOut.push([]);
  // }

  // console.log(mOut);


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
