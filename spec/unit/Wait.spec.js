jest.dontMock('../../src/Wait.js');

import React from 'react';

const Wait = require('../../src/Wait.js').default;

describe('Wait', () => {
  describe('exec', () => {
    it('should wait for default duration', (done) => {
      const wait = new Wait({}, {});
      wait.start().then(() => {
        expect(Wait.defaultDuration).toBeDefined();
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(Wait.defaultDuration);

        done();
      });

      jest.runAllTimers();
    });

    it('should wait for specified duration', (done) => {
      const wait = new Wait({ duration: 500 }, {});
      wait.start().then(() => {
        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(500);

        done();
      });

      jest.runAllTimers();
    });
  });
});
