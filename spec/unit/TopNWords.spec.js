jest.dontMock('react-pipeline');
jest.dontMock('path');
jest.dontMock('fs');

import React from 'react';

const ReactPipeline = require('react-pipeline').default;
const path = require('path');
const fs = require('fs');
const TopNWords = require('../../src/TopNWords').default;

describe('TopNWords', () => {
  describe('exec', () => {
    pit('should take default count of words', () => {
      const words = {
        a: 10,
        b: 20,
        c: 3,
        d: 4,
        e: 7,
        f: 3,
        g: 40,
        h: 25,
        i: 10,
        j: 13,
        k: 8,
        l: 10,
        m: 100
      };
      const onComplete = jest.genMockFunction();

      return ReactPipeline.start(<TopNWords words={words} onComplete={onComplete} />)
      .then(() => {
        expect(onComplete.mock.calls.length).toBe(1);
        expect(onComplete.mock.calls[0][0].length).toBe(10);
        expect(onComplete.mock.calls[0][0][0].count).toBe(100);
      });
    });

    pit('should take requested count of words', () => {
      const words = {
        a: 10,
        b: 20,
        c: 3,
        d: 4,
        e: 7,
        f: 3,
        g: 40,
        h: 25,
        i: 10,
        j: 13,
        k: 8,
        l: 10,
        m: 100
      };
      const onComplete = jest.genMockFunction();

      return ReactPipeline.start(<TopNWords words={words} take={5} onComplete={onComplete} />)
      .then(() => {
        expect(onComplete.mock.calls.length).toBe(1);
        expect(onComplete.mock.calls[0][0].length).toBe(5);
        expect(onComplete.mock.calls[0][0][0].count).toBe(100);
      });
    });
  });
});
