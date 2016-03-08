jest.dontMock('react-pipeline');
jest.dontMock('path');
jest.dontMock('fs');

import React from 'react';

const ReactPipeline = require('react-pipeline').default;
const path = require('path');
const fs = require('fs');
const ReadFile = require('../../src/ReadFile').default;

describe('ReadFile', () => {
  describe('exec', () => {
    pit('should read file', () => {
      const p = path.join(__dirname, '..', 'fixtures', 'declaration-of-independence.txt');
      const text = fs.readFileSync(p, 'utf8');
      const onComplete = jest.genMockFunction();

      return ReactPipeline.start(<ReadFile path={p} onComplete={onComplete} />)
      .then(() => {
        expect(onComplete.mock.calls.length).toBe(1);
        expect(onComplete.mock.calls[0][0]).toBe(text);
      });
    });

    it('should count words', done => {
      const p = path.join(__dirname, '..', 'fixtures', 'does-not-exist.txt');
      const onComplete = jest.genMockFunction();
      
      ReactPipeline.start(<ReadFile path={p} onComplete={onComplete} />)
      .then(() => { fail(); })
      .catch(err => { done(); });
    });
  });
});
