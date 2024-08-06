'use strict'

const SudokuSolver = require('../controllers/sudoku-solver.js')

module.exports = function (app) {

  let solver = new SudokuSolver()

  app.route('/api/check')
    .post((req, res) => {
      let puzzleString = req.body.puzzle
      let [rowO, colO] = req.body.coordinate.split('')
      let value = req.body.value

      // row, col as indexes
      let row = solver.letterToNumber(rowO) - 1
      let col = parseInt(colO - 1)

      let result = { valid: true }
      if (!solver.checkRowPlacement(puzzleString, row, col, value)) {
        result.valid = false
        result['conflict'] = ['row']
      }
      if (!solver.checkColPlacement(puzzleString, row, col, value)) {
        result.valid = false
        if (result.conflict) result.conflict.push("col")
        else result['conflict'] = ['col']
      }
      if (!solver.checkRegionPlacement(puzzleString, row, col, value)) {
        result.valid = false
        if (result.conflict) result.conflict.push("region")
        else result['conflict'] = ['region']
      }
      // { "valid": true }
      //  { "valid": false, "conflict": [ "row", "column" ] } 
      console.log(result)
      res.json(result)

    })

  app.route('/api/solve')
    .post((req, res) => {
      let puzzleString = req.body.puzzle
      solver.validate(puzzleString)
    })
}
