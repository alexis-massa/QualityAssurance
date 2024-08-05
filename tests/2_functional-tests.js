const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  suite('Solve : POST /api/solve', () => {
    test('valid puzzle string', () => {
      chai.request(server).keepOpen()
        .post('/api/solve')
        .send({})
        .end(() => {
          // Solve a puzzle with valid puzzle string: POST request to /api/solve
          assert.fail('to implement')
        })
    })

    test('missing puzzle string', () => {
      chai.request(server).keepOpen()
        .post('/api/solve')
        .send({})
        .end(() => {
          // Solve a puzzle with missing puzzle string: POST request to /api/solve
          assert.fail('to implement')
        })
    })

    test('invalid characters', () => {
      chai.request(server).keepOpen()
        .post('/api/solve')
        .send({})
        .end(() => {
          // Solve a puzzle with invalid characters: POST request to /api/solve
          assert.fail('to implement')
        })
    })

    test('incorrect length', () => {
      chai.request(server).keepOpen()
        .post('/api/solve')
        .send({})
        .end(() => {
          // Solve a puzzle with incorrect length: POST request to /api/solve
          assert.fail('to implement')
        })
    })

    test('cannot be solved', () => {
      chai.request(server).keepOpen()
        .post('/api/solve')
        .send({})
        .end(() => {
          // Solve a puzzle that cannot be solved: POST request to /api/solve
          assert.fail('to implement')
        })
    })

  })
  suite('Check : POST /api/check', () => {
    test('all fields', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with all fields: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('single placement conflict', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with single placement conflict: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('multiple placement conflicts', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with multiple placement conflicts: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('all placement conflicts', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with all placement conflicts: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('missing required fields', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with missing required fields: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('invalid characters', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with invalid characters: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('incorrect length', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with incorrect length: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('invalid placement coordinate', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with invalid placement coordinate: POST request to /api/check
          assert.fail('to implement')
        })
    })

    test('invalid placement value', () => {
      chai.request(server).keepOpen()
        .post('/api/check')
        .send({})
        .end(() => {
          // Check a puzzle placement with invalid placement value: POST request to /api/check
          assert.fail('to implement')
        })
    })

  })

});

