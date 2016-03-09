import { Task } from 'react-pipeline';

function count(data) {
  const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

  const m = data.match(pattern);
  const words = {};

  for (var i = 0; i < m.length; i++) {
    const word = m[i];
    if (!words[word]) { words[word] = 1; }
    else { words[word] = words[word] + 1; }
  }

  return words;
}

/**
 * Counts the words in a string
 * @class
 */
export default class CountWords extends Task {
  /**
   * Counts the words and passes the ordered array onto onComplete
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    const results = count(this.props.text);
    this.props.onComplete(results);

    return Promise.resolve();
  }
}
