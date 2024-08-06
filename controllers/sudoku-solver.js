class SudokuSolver {

  validate(puzzleString) {
    return /^[\d|\.]{81}$/.test(puzzleString)
  }

  checkRowPlacement(puzzleString, row, col, value) {
    // puzzleString to grid array
    let grid = this.stringToGrid(puzzleString)

    // if number other than 0 or value present at coordinate
    if (grid[row][col] !== 0 && grid[row][col] != value) return false

    //if value exists in the given row skipping the coordinate provided
    for (let i = 0; i < 9; i++) {
      if (i == col) continue
      if (grid[row][i] == value) return false
    }
    return true
  }

  checkColPlacement(puzzleString, row, col, value) {
    // puzzleString to grid array
    let grid = this.stringToGrid(puzzleString)

    // if number other than 0 or value present at coordinate
    if (grid[row][col] !== 0 && grid[row][col] != value) return false

    //if value exists in the given col skipping the coordinate provided
    for (let i = 0; i < 9; i++) {
      if (i == col) continue
      if (grid[i][col] == value) return false
    }
    return true

  }

  checkRegionPlacement(puzzleString, row, col, value) {
    // puzzleString to grid array
    let grid = this.stringToGrid(puzzleString)

    // if number other than 0 or value present at coordinate
    if (grid[row][col] !== 0 && grid[row][col] != value) return false

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== (row % 3) && j !== (col % 3))
          if (grid[i][j] == value) return false
      }
    }
    return true

  }

  solve(puzzleString) {

  }

  letterToNumber(letter) {
    let number = letter.charCodeAt(0) - 65
    if (number >= 0 && number < 10) return number
  }

  /**
   * Transforms a 81 char string into a 9x9 array
   * @param {string} puzzleString 
   * @returns grid :  9 x 9 array
   * @throws Erro if string is not valid
   */
  stringToGrid(puzzleString) {

    if (this.validate(puzzleString)) throw new Error('String must be valid')
    // grid
    const grid = []

    for (let i = 0; i < 9; i++) {
      const row = []
      for (let j = 0; j < 9; j++) {
        // index in string
        const index = i * 9 + j;
        // Assign to cell
        if (puzzleString[index] === '.') row.push(0)
        else row.push(puzzleString[index])
      }
      grid.push(row)
    }
    return grid
  }


  /**
   * Turns a 9x9 grid into a 81 char string
   * @param {Array} grid 
   * @returns {string} The string for the grid
   */
  gridToString(grid) {
    // Check if the input is a 9x9 grid
    if (!Array.isArray(grid) || grid.length !== 9) throw new Error("Input must be a 9x9 grid.");

    for (let i = 0; i < 9; i++) {
      if (!Array.isArray(grid[i]) || grid[i].length !== 9) throw new Error("Input must be a 9x9 grid.");
    }

    let result = "";

    // Tranverse and add to string
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        result += grid[i][j];
      }
    }

    return result;
  }
}

module.exports = SudokuSolver;

