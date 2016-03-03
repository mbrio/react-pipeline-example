import React from 'react';
import { Task } from 'react-pipeline';

/**
 * A task that prints a line of text to the supplied stdout.
 * @class
 */
export default class Print extends Task {
  static propTypes = {
    stdout: React.PropTypes.object.isRequired,
    message: React.PropTypes.string.isRequired
  };

  /**
   * Prints a message to the supplied stdout.
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    this.props.stdout.write(`${this.props.message}\n`);
    return Promise.resolve();
  }
}
