// Maximum Value Path
const test1 = [
  [1, 25, 10, 25],
  [5, 1, 10, 1],
  [1, 5, 10, 1],
  [10, 25, 1, 10],
]
// console.log(test1[0][0])

// work backwards, give each spot a value, choose right or down by value of next position


function maxValuePath(coinGrid) {
  let [x, y] = [0, 0];
  
  const move = (y, x, sum = 0, path = '') => {
    // console.log(x, y, sum)
    // console.log(sum)
    // add current number to sum
    sum += coinGrid[x][y]

    // base case cannot move right or down
    if (!coinGrid[y + 1] && !coinGrid[y][x + 1]) return sum;

    // if we are at right edge, move down
    if (!coinGrid[y][x + 1]) return move(y + 1, x, sum, path + 'D');
    // if we are at bottom edge, move right
    if (!coinGrid[y + 1]) return move(y, x + 1, sum, path + 'R');

    // move to higher number, right or down
    return Math.max(move(y + 1, x, sum, path + 'D'), move(y, x + 1, sum, path + 'R'))

  }

  return move(x, y);
}

console.log(maxValuePath(test1))
// Longest Common Subsequence

function LCS(x, y) {

}

// Golomb Sequence

function golomb(n) {

}


// Fair Split

function fairSplit(x) {

}

// Best Strategy

function bestStrategy(coins) {

}

// Extension: Shortest Path in DAG
// (first create a Directed Graph data structure)

function shortestPath(s, v) {

}
