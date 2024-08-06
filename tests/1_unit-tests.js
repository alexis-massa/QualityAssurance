const chai = require('chai');
const assert = chai.assert;

const SudokuSolver = require('../controllers/sudoku-solver.js');
let solver = new SudokuSolver();

suite('Unit Tests', () => {
  suite('vSudokuSolver.alidate', () => {
    test('Logic handles a valid puzzle string of 81 characters', () => {
      let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
      assert.isTrue(solver.validate(puzzleString))
    })

    test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
      let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37a'
      assert.isFalse(solver.validate(puzzleString))
    })

    test('Logic handles a puzzle string that is not 81 characters in length', () => {
      let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37'
      assert.isFalse(solver.validate(puzzleString))
    })
  })

  suite('SudokuSolver.checkRowPlacement()', () => {
    test('Logic handles a valid row placement', () => {
      let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37'
      assert.isFalse(solver.checkRowPlacement(puzzleString, 0, 0, 0))
    })

    test('Logic handles an invalid row placement', () => {
      let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37'
      assert.isFalse(solver.checkRowPlacement(puzzleString, 0, 0, 0))
    })
  })

  suite('SudokuSolver.checkColPlacement()', () => {
    test('Logic handles a valid column placement', () => {
      // TODO
      assert.fail('to implement')
    })

    test('Logic handles an invalid column placement', () => {
      // TODO
      assert.fail('to implement')
    })
  })

  suite('SudokuSolver.checkRegionPlacement()', () => {
    test('Logic handles a valid region (3x3 grid) placement', () => {
      // TODO
      assert.fail('to implement')
    })

    test('Logic handles an invalid region (3x3 grid) placement', () => {
      // TODO
      assert.fail('to implement')
    })
  })

  suite('SudokuSolver.solve()', () => {
    test('Valid puzzle strings pass the solver', () => {
      // TODO
      assert.fail('to implement')
    })

    test('Invalid puzzle strings fail the solver', () => {
      // TODO
      assert.fail('to implement')
    })

    test('Solver returns the expected solution for an incomplete puzzle', () => {
      // TODO
      assert.fail('to implement')
    })
  })
});
