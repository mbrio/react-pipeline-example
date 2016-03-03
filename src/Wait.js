import React from 'react';
import { Task } from 'react-pipeline';

/**
 * A task that allows for pauses between other tasks.
 * @class
 */
export default class Wait extends Task {
  /**
   * The default duration to wait if no duration property is supplied
   */
  static defaultDuration = 5000;

  static propTypes = {
    duration: React.PropTypes.number
  };

  /**
   * Sets a timeout and resolves it's promise once the timeout is complete.
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    return new Promise((resolve, reject) => {
      const duration = this.props.duration || Wait.defaultDuration;
      setTimeout(resolve, duration);
    });
  }
}
