import { Task } from 'react-pipeline';

/**
 * Gets top used words
 * @class
 */
export default class TopNWords extends Task {
  /**
   * Gets the top n used words and passes them onto onComplete
   * @return {Promise} the promise associated with the async task.
   */
  exec() {
    let words = [];
    const origWords = this.props.words;
    const take = this.props.take || 10;
    for (var key in origWords) {
      words.push({
        word: key,
        count: origWords[key]
      });
    }

    const out = words.sort((a, b) => b.count - a.count).slice(0, take);

    this.props.onComplete(out);

    return Promise.resolve();
  }
}
