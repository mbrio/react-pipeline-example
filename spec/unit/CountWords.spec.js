jest.dontMock('react-pipeline');
jest.dontMock('path');
jest.dontMock('fs');

import React from 'react';

const ReactPipeline = require('react-pipeline').default;
const path = require('path');
const fs = require('fs');
const CountWords = require('../../src/CountWords').default;

describe('CountWords', () => {
  describe('exec', () => {
    pit('should count words', () => {
      const p = path.join(__dirname, '..', 'fixtures', 'declaration-of-independence.txt');
      const text = fs.readFileSync(p, 'utf8');
      const onComplete = jest.genMockFunction();

      return ReactPipeline.start(<CountWords text={text} onComplete={onComplete} />)
      .then(() => {
        expect(onComplete.mock.calls.length).toBe(1);
        expect(onComplete.mock.calls[0][0].of).toBe(78);
      });
    });
  });
});
