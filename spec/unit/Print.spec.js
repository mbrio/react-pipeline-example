jest.dontMock('react-pipeline');

import React from 'react';

const ReactPipeline = require('react-pipeline').default;
const Print = require('../../src/Print.js').default;

describe('Print', () => {
  describe('exec', () => {
    pit('should print to stdout', () => {
      const message = 'Here is a message';
      const stdout = { write: jest.genMockFunction() };

      return ReactPipeline.start(<Print stdout={stdout} message={message} />)
      .then(() => {
        expect(stdout.write.mock.calls.length).toBe(1);
        expect(stdout.write.mock.calls[0][0]).toBe(`${message}\n`);
      });
    });
  });
});
