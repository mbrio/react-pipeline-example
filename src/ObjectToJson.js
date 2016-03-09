import { Task } from 'react-pipeline';

/**
 * Gets top used words
 * @class
 */
export default class ObjectToJson extends Task {
  /**
   * Gets the top n used words and passes them onto onComplete
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    this.props.onComplete(JSON.stringify(this.props.obj));

    return Promise.resolve();
  }
}
