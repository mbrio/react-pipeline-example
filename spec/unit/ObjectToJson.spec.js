jest.dontMock('react-pipeline');

import React from 'react';

const ReactPipeline = require('react-pipeline').default;
const ObjectToJson = require('../../src/ObjectToJson').default;

describe('ObjectToJson', () => {
  describe('exec', () => {
    pit('should count words', () => {
      const onComplete = jest.genMockFunction();
      const obj = { message: 'Hello, World!' };

      return ReactPipeline.start(<ObjectToJson obj={obj} onComplete={onComplete} />)
      .then(() => {
        expect(onComplete.mock.calls.length).toBe(1);
        expect(onComplete.mock.calls[0][0]).toBe(JSON.stringify(obj));
      });
    });
  });
});
