import fs from 'fs';
import { Task } from 'react-pipeline';

/**
 * Reads in a text file and passes the contents onto the parent.
 * @class
 */
export default class ReadFile extends Task {
  /**
   * Reads the contents of a file and passes it onto the onComplete handler
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.props.path, 'utf8', (err, data) => {
        if (err) { return reject(err); }
        this.props.onComplete(data);
        resolve();
      });
    });
  }
}
