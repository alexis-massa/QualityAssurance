const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  suite('convertHandler', () => {
    test('should correctly read a whole number input.', () => {
      // convertHandler should correctly read a whole number input.
      assert.equal(10, convertHandler.getNum('10mi'))
    })

    test('should correctly read a decimal number input.', () => {
      // convertHandler should correctly read a decimal number input.
      assert.equal(1.3, convertHandler.getNum('1.3mi'))
    })

    test('should correctly read a fractional input.', () => {
      // convertHandler should correctly read a fractional input.
      assert.equal(0.25, convertHandler.getNum('1/4mi'))
    })

    test('should correctly read a fractional input with a decimal.', () => {
      // convertHandler should correctly read a fractional input with a decimal.
      assert.equal(10, convertHandler.getNum('15/1.5mi'))
    })

    test('should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
      // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
      assert.equal('err', convertHandler.getNum('1/2/3mi'))
    })

    test('should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
      // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
      assert.equal(1, convertHandler.getNum('mi'))
    })

    test('should correctly read each valid input unit.', () => {
      // convertHandler should correctly read each valid input unit.
      ['mi', 'km', 'gal', 'L', 'kg', 'lbs'].forEach(unit => {
        assert.equal(unit, convertHandler.getUnit(`5${unit}`))

      });
    })

    test('should correctly return an error for an invalid input unit.', () => {
      // convertHandler should correctly return an error for an invalid input unit.
      assert.equal('err', convertHandler.getUnit('4lbbs'))
    })

    test('should return the correct return unit for each valid input unit.', () => {
      // convertHandler should return the correct return unit for each valid input unit.
      assert.equal('mi', convertHandler.getReturnUnit('km'))
      assert.equal('km', convertHandler.getReturnUnit('mi'))
      assert.equal('gal', convertHandler.getReturnUnit('L'))
      assert.equal('L', convertHandler.getReturnUnit('gal'))
      assert.equal('kg', convertHandler.getReturnUnit('lbs'))
      assert.equal('lbs', convertHandler.getReturnUnit('kg'))

    })

    test('should correctly return the spelled-out string unit for each valid input unit.', () => {
      // convertHandler should correctly return the spelled-out string unit for each valid input unit.
      assert.equal('miles', convertHandler.spellOutUnit('mi'))
      assert.equal('kilometers', convertHandler.spellOutUnit('km'))
      assert.equal('galons', convertHandler.spellOutUnit('gal'))
      assert.equal('liters', convertHandler.spellOutUnit('L'))
      assert.equal('kilograms', convertHandler.spellOutUnit('kg'))
      assert.equal('pounds', convertHandler.spellOutUnit('lbs'))
    })

    test('should correctly convert gal to L.', () => {
      // convertHandler should correctly convert gal to L.
      const inputNum = convertHandler.getNum('10gal')
      const inputUnit = convertHandler.getUnit('10gal')
      assert.equal(37.8541, convertHandler.convert(inputNum, inputUnit))
    })

    test('should correctly convert L to gal.', () => {
      // convertHandler should correctly convert L to gal.
      const inputNum = convertHandler.getNum('37.8541L')
      const inputUnit = convertHandler.getUnit('37.8541L')
      assert.equal(10, convertHandler.convert(inputNum, inputUnit))
    })

    test('should correctly convert mi to km.', () => {
      // convertHandler should correctly convert mi to km.
      const inputNum = convertHandler.getNum('10mi')
      const inputUnit = convertHandler.getUnit('10mi')
      assert.equal(16.0934, convertHandler.convert(inputNum, inputUnit))
    })

    test('should correctly convert km to mi.', () => {
      // convertHandler should correctly convert km to mi.
      const inputNum = convertHandler.getNum('16.0934km')
      const inputUnit = convertHandler.getUnit('16.0934km')
      assert.equal(10, convertHandler.convert(inputNum, inputUnit))
    })

    test('should correctly convert lbs to kg.', () => {
      // convertHandler should correctly convert lbs to kg.
      const inputNum = convertHandler.getNum('10lbs')
      const inputUnit = convertHandler.getUnit('10lbs')
      assert.equal(4.53592, convertHandler.convert(inputNum, inputUnit))
    })

    test('should correctly convert kg to lbs.', () => {
      // convertHandler should correctly convert kg to lbs.
      const inputNum = convertHandler.getNum('4.53592kg')
      const inputUnit = convertHandler.getUnit('4.53592kg')
      assert.equal(10, convertHandler.convert(inputNum, inputUnit))
    })
  })
});