class SudokuSolver {

  validate(puzzleString) {
    return /^[\d|\.]{81}$/.test(puzzleString)
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {

  }

  letterToNumber(letter) { return letter.charCodeAt(0) - 97 }
}

module.exports = SudokuSolver;

