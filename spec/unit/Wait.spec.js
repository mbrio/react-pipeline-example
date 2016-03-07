import React from 'react';
import ReactPipeline from 'react-pipeline';

const Wait = require('../../src/Wait.js').default;

describe('Wait', () => {
  describe('exec', () => {
    it('should wait for default duration', (done) => {
      ReactPipeline.start(<Wait />).then(() => {
        expect(Wait.defaultDuration).toBeDefined();
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(Wait.defaultDuration);

        done();
      });

      jest.runAllTimers();
    });

    it('should wait for specified duration', (done) => {
      ReactPipeline.start(<Wait duration={500} />).then(() => {
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(500);

        done();
      });

      jest.runAllTimers();
    });
  });
});
