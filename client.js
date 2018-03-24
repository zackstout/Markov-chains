


console.log('js');
// A 5x2 matrix (first matrix, array of rows, 5 elements of 2);
var m1 = [[1, 2], [2, 3], [3, 1], [4, 0.42], [2, 3.14]];

// A 2x4 matrix (second matrix, array of cols, 4 elements of 2):
var m2 = [[5, 2.5], [2, 3], [3,2], [3.2,1]];


var m3 = [[0.6, 0.25], [0.81, 0.17]];

// It's annoying that they're not formatted the same, but we get the benefit that the length of their element-arrays is always the same.

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

  // console.log(mOut);
  return mOut;
} // end matrixMult


// Sample input: [1, 1, 2] and [2, 3, 5]:
function multRows(row, col) {
  var out = 0;
  for (var i=0; i < row.length; i++) {
    out += (row[i] * col[i]);
  }
  return out;
}

// matrixMult(m1, m2);

$(document).ready(function() {
  console.log('hithere');

  // COMMENT OUT FOR OTHER:
  var m = m3;

  var i = 30;

  // Either markov or This while loop. While loop works but i'm not sure why.
  // markov(m3, i);

  while (i > 0) {
    // Let's check to ensure that order doesn't matter here:
    // Yep, it doesn't matter.
    // Intersting -- can't store this in a new variable x -- that won't update.
    m = matrixMult(m, m3);
    console.log(m);

    $('#hi').append('<p>' + m + '</p>');
    i--;
  }
  m = matrixMult(m3, m3);
  matrixMult(m, m3);
});

function markov(matrix, num) {
  console.log('hi');
  var res;
  while (num > 0) {
    res = matrixMult(matrix, matrix);

    $('#hi').append('<p>' + res + '</p>');
    num --;
  }
}











// ahoy
