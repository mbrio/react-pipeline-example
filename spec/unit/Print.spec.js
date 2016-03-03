jest.dontMock('../../src/Print.js');

import React from 'react';

const Print = require('../../src/Print.js').default;

describe('Print', () => {
  describe('exec', () => {
    pit('should print to console.log', () => {
      const message = 'Here is a message';
      const stdout = { write: jest.genMockFunction() };
      const print = new Print({ stdout: stdout, message }, {});

      return print.start().then(() => {
        expect(stdout.write.mock.calls.length).toBe(1);
        expect(stdout.write.mock.calls[0][0]).toBe(`${message}\n`);
      });
    });
  });
});
